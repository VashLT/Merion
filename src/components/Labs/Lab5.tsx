import React from 'react';
import labs from '../../data/labs';

import Section, { SubSection } from '../Section';
import LabAnswer from './LabAnswer';
import CodeBlock from '../Other/CodeBlock';
import Figure from '../Figure';
import DownloadFilesButton from './DownloadFilesButton';
import Lab from './Lab';

import { CDN_DOMAIN } from '../../utils/constants';

import getUserOS from '../../utils/os';
import Table from '../Table';

const FILES_PATH = `/files/lab5`;
const STATIC_PATH = `${CDN_DOMAIN}/files/lab5`;
const LAB = labs[4];

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
        targetId: "assembler",
        displayName: "2. Ensamblador",
        subSections: [
            {
                targetId: "impl",
                displayName: "Implementación"
            },
            {
                targetId: "ref-table",
                displayName: "Tabla de Referencia"
            },
            {
                targetId: "code",
                displayName: "Código fuente"
            },
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
    title: "5. Bibliografía",
    items: [
        {
            srcName: "Noam N., Shimon S. (2005, Junio). Capítulo 4 y 5, The Elements of Computing Systems: Building a Modern Computer from First Principles. [Libro]",
            srcLink: "https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_d70026d8c1424487a451eaba3e372132.pdf",
        },
        {
            srcName: "Evaluación de Rendimiento de Sistemas Computacionales. (2020, noviembre). [Artículo]",
            srcLink: "https://archourlives.blogspot.com/2020/11/evaluacion-de-rendimiento-de-sistemas.html",
        }
    ]
}

export const Lab5: React.FC = () => {
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
                    <p>Para este cuarto laboratorio, desarrollaremos el <a href="https://www.nand2tetris.org/project06" title="ir al proyecto">proyecto 6</a> titulado "El ensamblador" . Para el proyecto 4 el objetivo es que el estudiante se familiarice con los lenguajes de bajo nivel y mediante la ayuda de la herramienta assembler aprecie la traducción que se hace desde el lenguaje simbólico (entendible por humanos) al lenguaje de máquina (código binario entendible por maquinas). Adicionalmente, se tiene una herramienta para visualizar el almacenamiento en memoria llamada "CPU emulator" donde se visualiza la manera en que son almacenados los datos.</p>

                </LabAnswer>
            </Section>

            <Section id="assembler" title="2. Ensamblador">
                <p>El código simbólico que se escribe en los lenguaje <i>assembly</i> no es entendible directamente por una CPU, antes se debe hacer uso de un programa denominado <i>assembler</i> (ensamblador) para convertir (traducir) el código simbolico (<i>e.g.</i> etiquetas, direcciones de memoría, números) en instrucciones de procesador, las cuáles están en código binario.
                </p>

                <SubSection className="section__gate" title="Implementación" id="impl">
                    <p>A continuación</p>



                </SubSection>

                <SubSection className="section__gate" title="Tabla de Referencia" id="ref-table">
                    <p>La descripción y detalles de la implementación de cada método/función que utiliza el ensamblador se sintentiza en la siguiente tabla:</p>
                    <Table
                        title="Documentación de la clase 'Assembler'"
                        tableIndex="1"
                        className="table table-bordered table-responsive "
                    >
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    <strong>Class Assembler</strong> <br></br>
                                    Clase con objetos usados para convertir un programa escrito en el lenguaje 'Hack assembly' (.asm) en código binario que pueda ser ejecutada por la herramienta ‘Assembler’ (.hack)
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}><strong>Constructor</strong></td>
                            </tr>
                            <tr>
                                <td>__init__</td>
                                <td>args: files [list]</td>
                                <td>return Assembler</td>
                            </tr>
                            <tr>
                                <td colSpan={3}><strong>Métodos</strong></td>
                            </tr>
                            <tr>
                                <td>assemble</td>
                                <td>args: file_path [str]</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Convierte el archivo ingresado a un archivo symbol-less (sin símbolos) traduciendo cada línea y poniéndola en un nuevo archivo con extensión .hack</td>
                            </tr>

                            <tr>
                                <td>get_symless_version</td>
                                <td>args: file_path [str]</td>
                                <td>return symless_lines [list]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Convierte el archivo ingresado a un archivo symbol-less (sin símbolos), eliminando las líneas vacías, carácteres especiales (cómo los salto de línea) y comentarios. Traduce los símbolos utilizando SYM_TABLE de sym_maps.py</td>
                            </tr>

                            <tr>
                                <td>translate</td>
                                <td>args: line [str]</td>
                                <td>return a_instruction | c_instruction [str]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Traduce una línea symbol-less a una instrucción de dirección de memoria si la línea inicia con “@” o a una instrucción de cálculo en el caso contrario y la retorna</td>
                            </tr>

                            <tr>
                                <td>a_instruction</td>
                                <td>args: line [str]</td>
                                <td>return 16-length str </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Convierte una línea symbol-less en una instrucción de memoria con una longitud fija de 16 bits utilizando el diccionario SYM_TABLE de sym_maps.py si la línea son alfabéticos en caso contrario simplemente la convierte a entero.</td>
                            </tr>

                            <tr>
                                <td>c_instruction</td>
                                <td>args: line [str]</td>
                                <td>return [str]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Convierte una línea como una instrucción de cálculo, si en la línea hay un ‘=’  con el valor del lado izquierdo se busca su resultado correspondiente en DEST proveniente de sym_maps, si en la línea hay  ‘;’ el valor del lado izquierdo lo busca en COMP y el valor del lado derecho lo busca en JUMP ambos proveniente de sym_maps. </td>
                            </tr>
                            <tr>
                                <td>increase_memory</td>
                                <td>args: variable [str]</td>
                                <td>return [int]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Indexa nuevas variables y reserva más espacio para ellas.</td>
                            </tr>
                            <tr>
                                <td>clean_line</td>
                                <td>args: line [str]</td>
                                <td>return [str]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Permite eliminar espacios en blanco, nuevas líneas y comentarios en comentarios en línea</td>
                            </tr>
                            <tr>
                                <td>format_line</td>
                                <td>args: line [str]</td>
                                <td>return [str]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Permite dar a la línea un formato c-instrucción en caso de ser necesario, es una función que se utiliza en la función c_instruction.</td>
                            </tr>
                        </tbody>

                    </Table>



                </SubSection>

                <SubSection className="section__gate" title="Código fuente" id="code">
                    <p>El ensamblador fue escrito en el lenguaje de programación <a href="https://www.python.org/" title="Ir al home de Python">Python</a>. La estructura del programa se presenta a continuación: </p>

                    <CodeBlock filePath={`${FILES_PATH}/project_tree.txt`} lang="plaintext" showLineNumbers={false} />


                    <p>El programa consta de dos archivos principales, <a href="#assembler.py" title="ver código"><em>assembler.py</em></a> y <a href="#sym_maps.py" title="ver código"><em>sym_maps.py</em></a>. En <em>assembler.py</em> se encuentra el código del ensamblador, el cual hace uso los mapeos definidos en <em>sym_maps.py</em>. Se espera que los archivos <em>.asm</em> que se pasen como argumentos al ensamblador estén en una carpeta llamada <em>assembly</em> en el root del proyecto.</p>

                    <CodeBlock filePath={`${FILES_PATH}/assembler.py`} lang="python" id="assembler.py" />
                    <p>Utilizando el simulador de CPU, se testeó el programa y pasó las pruebas sin ningún problema. </p>

                    <CodeBlock filePath={`${FILES_PATH}/sym_maps.py`} lang="python" id="sym_maps.py" />
                </SubSection>


            </Section>

            <Section id="files" title="3. Archivos">

                <p className="mb-3">
                    A continuación se adjuntan tanto los archivos ASM (Assembly), como los HDL (Hardware Descriptive Language) de cada uno de los chips.
                </p>

                <div className="c-files">
                    <DownloadFilesButton files={LAB.files!} zipSrc={LAB.zip!} />
                </div>
            </Section>

        </Lab>
    );
}

export default Lab5;