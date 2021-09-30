#!/usr/bin/python
# Arquitectura de Computadores: Grupo 4

# run this file and pass it as args the files to assemble
# example: python3 ../assembler.py Add.asm Max.asm

import sys
import os

from sym_maps import SYM_TABLE, DEST, COMP, JUMP

COMMENT_LINE_PREFIX = "//"
ROOT_PATH = os.path.dirname(__file__)


class Assembler:
    """translates programs written in the 'Hack assembly'
    language into binary code which can be execute by the
    'Hack hardware'.

    given a series of files (with .asm ext) parse each one and output
    a new file for each with the 'hack' extension.

    so given 'Add.asm' as an argument, will output a new file called 'Add.hack'
    """

    def __init__(self, files: list):
        # space for variables, initially is 16
        self._var_memory = 16

        if not files:
            print("No files were assembled.")
            return

        for file_name in files:
            file = os.path.join(ROOT_PATH, "assembly", file_name)
            if not os.path.exists(file):
                print(f"{file_name} is not a valid file.")
                continue

            self.assemble(file)

    def assemble(self, file_path: str):
        """makes input file symbol-less, translates every line in it and
        writes those lines into a new file (with .hack ext).
        """
        symless_lines: list = self.get_symless_version(file_path)

        file_name = os.path.basename(file_path).split(".")[0]
        output_path = os.path.join(ROOT_PATH, f"{file_name}.hack")

        with open(output_path, mode="w") as output_file:
            for line in symless_lines:
                translated_line = self.translate(line)
                output_file.write(translated_line + "\n")

    def get_symless_version(self, file_path: str) -> list[str]:
        """remove empty lines, newlines characters, and comments.
        Each symbol is added to SYM_TABLE.
        """
        symless_lines = []

        with open(file_path, mode="r") as file:
            line_number = 0

            for line in file:
                if any(
                    [line.startswith(COMMENT_LINE_PREFIX), line == "", line == "\n"]
                ):
                    continue

                strip_line = Assembler.clean_line(line)

                if strip_line.startswith("("):
                    # strip_line should look like: (label_name)
                    label = strip_line[1:-1]

                    SYM_TABLE[label] = line_number
                    continue

                line_number += 1
                symless_lines.append(strip_line)

        return symless_lines

    def translate(self, line: str):
        """translates symbol-less line by applying proper instruction"""

        if line.startswith("@"):
            return self.a_instruction(line)

        return self.c_instruction(line)

    def a_instruction(self, line: str) -> str:
        """translates a line as an address instruction"""
        if not line[1].isalpha():
            value = int(line[1:])
        else:
            label: str = line[1:]

            value: int = SYM_TABLE.get(label, -1)
            
            if value == -1:
                value = self.increase_memory(label)

        # give value a fixed 16-bit length
        return bin(value)[2:].zfill(16)

    def c_instruction(self, line: str) -> str:
        """translates a line as a compute instruction"""

        format_line = Assembler.format_line(line)

        dest_sym, remaining = format_line.split("=")
        dest_code = DEST.get(dest_sym, "destFAIL")

        comp_sym, jump_sym = remaining.split(";")

        comp_code = COMP.get(comp_sym, "compFAIL")
        jump_code = JUMP.get(jump_sym, "jumpFAIL")

        return f"111{comp_code}{dest_code}{jump_code}"

    def increase_memory(self, variable: str) -> int:
        """store new variables and add more space for them"""
        SYM_TABLE[variable] = self._var_memory
        self._var_memory += 1
        return SYM_TABLE[variable]

    @staticmethod
    def clean_line(line: str) -> str:
        """remove whitespaces, newlines and comments from line"""
        return (
            line.split(COMMENT_LINE_PREFIX)[0]
            .replace("/", "")
            .replace("\n", "")
            .strip()
        )

    @staticmethod
    def format_line(line: str) -> str:
        """give line a c-instrunction format if necessary"""
        if not "=" in line:
            line = f"null={line}"

        if not ";" in line:
            line = f"{line};null"

        return line


if __name__ == "__main__":
    # first arg is always the path to file that is being exec
    # so is discarded.
    Assembler(sys.argv[1:])
