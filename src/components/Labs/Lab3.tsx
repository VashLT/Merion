import React from 'react';
import labs from '../../data/labs';

import Section from '../Section';
import LabAnswer from './LabAnswer';
import CodeBlock from '../CodeBlock';
import Figure from '../Figure';
import GateSection from '../Other/GateSection';
import Lab from './Lab';

import getUserOS from '../../utils/os';

const FILES_PATH = "/files/lab2/gates";

const LAB = labs[2];

const sections: ITOFItem[] = [
    {
        targetId: "questions",
        displayName: "1. Preguntas",
        subSections: [
            {
                targetId: "qt1",
                displayName: LAB.raw_questions[0]
            }
        ]
    },
    {
        targetId: "gates",
        displayName: "2. Compuertas Lógicas",
        subSections: [
            {
                targetId: "half-adder",
                displayName: "HalfAdder"
            },
            {
                targetId: "full-adder",
                displayName: "FullAdder"
            },
            {
                targetId: "add16",
                displayName: "Add16"
            },
            {
                targetId: "inc16",
                displayName: "Inc16"
            },
            {
                targetId: "ALU-nostat",
                displayName: "ALU (no-stat)"
            },
            {
                targetId: "ALU",
                displayName: "ALU"
            },
            {
                targetId: "DFF",
                displayName: "DFF"
            },
            {
                targetId: "bit",
                displayName: "Bit"
            },
            {
                targetId: "register",
                displayName: "Register"
            },
            {
                targetId: "ram8",
                displayName: "RAM8"
            },
            {
                targetId: "ram64",
                displayName: "RAM64"
            },
            {
                targetId: "ram512",
                displayName: "RAM512"
            },
            {
                targetId: "ram4k",
                displayName: "RAM4K"
            },
            {
                targetId: "ram16k",
                displayName: "RAM16k"
            },
            {
                targetId: "pc",
                displayName: "PC"
            }
        ]
    },
    {
        targetId: "files",
        displayName: "3. Archivos"
    },
    {
        targetId: "biblio",
        displayName: "4. Bibliografía"
    }
]

const bibliography: Ibiblio = {
    title: "4. Bibliografía",
    items: [
        {
            srcName: "Sample",
            srcLink: "https://google.com",
        }
    ]
}

export const Lab3: React.FC = () => {
    return (
        <Lab
            data={LAB}
            tableOfContent={sections}
            biblio={bibliography}
        >
            <Section id="questions" title="1. Preguntas">
                <LabAnswer
                    id="qt1"
                    question={LAB.raw_questions[0]}
                >
                    <p>Para este segundo laboratorio, desarrollaremos el <a href="https://www.nand2tetris.org/project02" title="ir al proyecto">proyecto 2</a> y <a href="https://www.nand2tetris.org/project03" title="ir al proyecto">proyecto 3</a> llamado "Aritmetica booleana" y "Lógica secuencial" respectivamente. Nuestro objetivo en el desarrollo del segundo laboratorio es acercarnos a la construcción de las compuertas lógicas principales descritas en el mismo, el cual nos introduce a la metodología de trabajo del curso y nos permite acceder a los conocimientos necesarios para desarrollar las actividades programadas en este.</p>
                    <p>
                        En primera instancia, debemos revisar los temas de lógica Booleana, síntesis de funciones booleanas, compuertas lógicas y luego enfocarnos en el lenguaje de descripción de hardware (HDL) adentrándonos en su funcionamiento, entorno y características ya que es el lenguaje  con el cual llevaremos a cabo la práctica.
                    </p>

                    <p>
                        Las compuertas, se construyeron gradualmente desde la más sencilla (partiendo de la NAND) hasta la más compleja (DMux8Way) dando como resultado un conjunto de chips básicos, cabe decir que la compuerta principal es la Nand, puesto que con ella se crearon las compuertas básicas (And, Or, Not) que dieron lugar a desarrollar las los chips más complejos.
                    </p>
                    <p>
                        Nuestro principal soporte para desarrollarlas fue basarnos en el diagrama de cada compuerta lógica, no obstante, para el desarrollo de una de las compuertas, se hizo necesario el uso de internet, y a partir de la lógica utilizada en esta, se lograron desarrollar varias compuertas más.
                    </p>
                </LabAnswer>
            </Section>

            <Section id="chips" title="2. Chips">
                <p>Cada una de los chips programados para el laboratorio fueron testeadas con un <a href={"/files/lab2/HardwareSimulator." + (getUserOS() === "windows" ? "bat" : "sh")}>Simulador de Hardware</a>. De esta manera, se garantizó el correcto funcionamiento de los mismos.</p>

                <GateSection className="section__gate" title="HalfAdder" id="half-adder">
                    <p>Para construir la compuerta NOT simplemente se hace pasar la entrada por una compuerta NAND, de esta manera siempre se conseguirá el valor opuesto de la entrada. </p>
                    {/* <Figure
                        title="Compuerta NOT construida con una NAND"
                        figIndex="1"
                        img={NOT}
                        src="https://qph.fs.quoracdn.net/main-qimg-6664d9b8e96801605a8c257e64477ded.webp"
                    /> */}
                    <p>El código para la compuerta se presenta a continuación: </p>
                    {/* <CodeBlock filePath={`${FILES_PATH}/Not.hdl`} /> */}
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    {/* <Figure
                        title="Test para compuerta NOT"
                        figIndex="2"
                        img={NOTtest}
                        src={NOTtest}
                        imgClass="img__test"
                    /> */}
                </GateSection>

            </Section>

        </Lab>
    );
}

export default Lab3;