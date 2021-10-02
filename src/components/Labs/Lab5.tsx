import React from 'react';
import labs from '../../data/labs';

import Section, { SubSection } from '../Section';
import LabAnswer from './LabAnswer';
import CodeBlock from '../Other/CodeBlock';
import DownloadFilesButton from './DownloadFilesButton';
import Lab from './Lab';

import Table from '../Table';
import Figure, { Figures } from '../Figure';
import getUserOS from '../../utils/os';

const FILES_PATH = `/files/lab5`;
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
            {
                targetId: "results",
                displayName: "Resultados"
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
            srcName: "Noam N., Shimon S. (2005, Junio). Capítulo 6, The Elements of Computing Systems: Building a Modern Computer from First Principles. [Libro]",
            srcLink: "https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_b73759b866b249a0b3a715bf5a18f668.pdf",
            id: "bib:1"
        },
        {
            srcName: "Rose A. (2014, Mayo). Capítulo 6, nand2tetris assembler.py. [Repositorio de GitHub]",
            srcLink: "https://github.com/rose/nand2tetris/blob/master/assembler.py",
            id: "bib:2"
        },
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
                    <p>Para este quinto laboratorio, desarrollaremos el <a href="https://www.nand2tetris.org/project06" title="ir al proyecto">proyecto 6</a> titulado "El ensamblador" . El objetivo de este proyecto consiste en estudiar y programar un ensamblador, el cual podríamos definir brevemente como un programa que es capaz de traducir de lenguaje simbolico (entendible por humanos) a lenguaje binario (entendible por maquinas). </p>

                    <p>En esta práctica tendremos en cuenta conceptos vistos anteriormente (<i>e.g.</i> acceso a memoria, etiquetas, operaciones lógicas), sobretodo de la programación en <i>assembly</i> para implementar una lógica capaz de mapear cada uno de los simbolos definidos por dicho lenguaje más los definidos por el usuario. Para desarrollar este laboratorio se estudió <a href="#bib:1">[1]</a> y se tomó como base <a href="#bib:2">[2]</a> para construir el ensamblador.</p>

                </LabAnswer>
            </Section>

            <Section id="assembler" title="2. Ensamblador">
                <p>El código simbólico que se escribe en los lenguaje <i>assembly</i> no es entendible directamente por una CPU, antes se debe hacer uso de un programa denominado <i>assembler</i> (ensamblador) para convertir (traducir) el código simbolico (<i>e.g.</i> etiquetas, direcciones de memoría, números) en instrucciones de procesador, las cuáles están en código binario.
                </p>

                <SubSection className="section__gate" title="Implementación" id="impl">
                    <p>Para realizar el proceso de conversión desde el lenguaje ‘Hack assembly’ al código binario se inicia con tomar el archivo y convertirlo a un archivo symbol-less (sin símbolos), eliminando las líneas vacías, carácteres especiales (cómo los salto de línea) y comentarios. Posteriormente, se traducen los símbolos utilizando <em className="python inline">SYM_TABLE</em> (<strong>Fig. 1</strong>) de <a href="#sym_maps.py" title="ver código fuente">sym_maps.py</a>.</p>

                    <Figure
                        title="Tabla de simbolos predefinidos"
                        img="https://i.imgur.com/3rGRhRv.png"
                        imgStyle={{ "height": "220px" }}
                        figIndex="1"
                        src="https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_b73759b866b249a0b3a715bf5a18f668.pdf"
                    />

                    <p>Una vez hecho lo anterior, se traduce cada línea dependiendo si se trata de una instrucción de dirección de memoria (<em className="python inline">a-instruction</em>) o una instrucción de cálculo (<em className="python inline">c-instruction</em>), utilizando para esta última <em className="python inline">COMP</em>, <em className="python inline">JUMP</em> y <em className="python inline">DEST</em> de <a href="#sym_maps.py" title="ver código fuente">sym_maps.py</a> como diccionarios de instrucciones a código binario y realizando un proceso de formato (En caso de tener un valor null) o limpieza de la línea (eliminar espacios, saltos de línea y comentarios) en caso de ser necesario.</p>


                    <Figure
                        title="Tabla con mapeos de instrucción COMP a binario"
                        img="https://i.imgur.com/pfaRBkH.png"
                        imgStyle={{ "height": "420px" }}
                        figIndex="2"
                        src="https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_b73759b866b249a0b3a715bf5a18f668.pdf"
                    />

                    <Figure
                        title="Tabla con mapeos de instrucción DEST a binario"
                        img="https://i.imgur.com/hh2s4te.png"
                        imgStyle={{ "height": "230px" }}
                        figIndex="3"
                        src="https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_b73759b866b249a0b3a715bf5a18f668.pdf"
                    />

                    <Figure
                        title="Tabla con mapeos de instrucción JUMP a binario"
                        img="https://i.imgur.com/7XwX0mi.png"
                        imgStyle={{ "height": "230px" }}
                        figIndex="4"
                        src="https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_b73759b866b249a0b3a715bf5a18f668.pdf"
                    />

                    <p>Finalmente, se escribe cada línea traducida en un nuevo archivo con extensión .hack.</p>



                </SubSection>

                <SubSection className="section__gate" title="Tabla de Referencia" id="ref-table">
                    <p>La descripción y detalles de la implementación de cada método/función que utiliza el ensamblador se sintentiza en la siguiente tabla:</p>
                    <Table
                        title="Documentación de la clase Assembler"
                        tableIndex="1"
                        className="table table-bordered table-responsive "
                    >
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    <strong><em className="python-keyword">Class</em> <em className="python-class">Assembler</em></strong> <br></br>
                                    Clase con objetos usados para convertir un programa escrito en el lenguaje 'Hack assembly' (.asm) en código binario que pueda ser ejecutada por la herramienta ‘Assembler’ (.hack)
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}><strong>Constructor</strong></td>
                            </tr>
                            <tr>
                                <td><em className="python-builtin">__init__</em></td>
                                <td>args: <em className="python inline">files</em> [<em className="python-type">list</em>]</td>
                                <td><em className="python-keyword">return</em> <em className="python-class">Assembler</em></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Itera sobre cada archivo en <em className="python inline">files</em>, si es un archivo valido procede a llamar al método <em className="python-function inline">assemble</em> para ensamblar el archivo.</td>
                            </tr>
                            <tr>
                                <td colSpan={3}><strong>Métodos</strong></td>
                            </tr>
                            <tr>
                                <td><em className="python-function">assemble</em></td>
                                <td>args: <em className="python inline">file_path</em> [<em className="python-type">str</em>]</td>
                                <td><em className="python-builtin__constant">None</em></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Convierte el archivo ingresado a un archivo symbol-less (sin símbolos), traduce cada línea a bínario y escribe cada una de estas lineas en un nuevo archivo con extensión .hack</td>
                            </tr>

                            <tr>
                                <td><em className="python-function">get_symless_version</em></td>
                                <td>args: <em className="python inline">file_path</em> [<em className="python-type">str</em>]</td>
                                <td><em className="python-keyword">return</em> <em className="python inline">symless_lines</em> [<em className="python-type">list</em>]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Convierte el archivo ingresado a un archivo symbol-less (sin símbolos), eliminando las líneas vacías, carácteres especiales (cómo los salto de línea) y comentarios. Traduce los símbolos utilizando <em className="python inline">SYM_TABLE</em> de <a href="#sym_maps.py" title="ir al archivo">sym_maps.py</a></td>
                            </tr>

                            <tr>
                                <td><em className="python-function">translate</em></td>
                                <td>args: <em className="python inline">line</em> [<em className="python-type">str</em>]</td>
                                <td><em className="python-keyword">return</em> <em className="python inline">a_instruction | c_instruction</em> [<em className="python-type">str</em>]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Traduce una línea symbol-less a una instrucción de dirección de memoria si la línea inicia con “@” o a una instrucción de cálculo en el caso contrario y la retorna</td>
                            </tr>

                            <tr>
                                <td><em className="python-function">a_instruction</em></td>
                                <td>args: <em className="python inline">line</em> [<em className="python-type">str</em>]</td>
                                <td><em className="python-keyword">return</em> [<em className="python-type">str</em>] </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Convierte una línea symbol-less en una instrucción de memoria con una longitud fija de 16 bits utilizando el diccionario SYM_TABLE de sym_maps.py si la línea son alfabéticos en caso contrario simplemente la convierte a entero.</td>
                            </tr>

                            <tr>
                                <td><em className="python-function">c_instruction</em></td>
                                <td>args: <em className="python inline">line</em> [<em className="python-type">str</em>]</td>
                                <td><em className="python-keyword">return</em> [<em className="python-type">str</em>]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Convierte una línea como una instrucción de cálculo, si en la línea hay un ‘=’  con el valor del lado izquierdo se busca su resultado correspondiente en <em className="python inline">DEST</em> proveniente de sym_maps, si en la línea hay  ‘;’ el valor del lado izquierdo lo busca en <em className="python inline">COMP</em> y el valor del lado derecho lo busca en <em className="python inline">JUMP</em> ambos proveniente de sym_maps. </td>
                            </tr>
                            <tr>
                                <td><em className="python-function">increase_memory</em></td>
                                <td>args: <em className="python inline">variable</em> [<em className="python-type">str</em>]</td>
                                <td><em className="python-keyword">return</em> [<em className="python-type">int</em>]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Indexa nuevas variables y reserva más espacio para ellas.</td>
                            </tr>
                            <tr>
                                <td><em className="python-function">clean_line</em></td>
                                <td>args: <em className="python inline">line</em> [<em className="python-type">str</em>]</td>
                                <td><em className="python-keyword">return</em> [<em className="python-type">str</em>]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Permite eliminar espacios en blanco, nuevas líneas y comentarios en comentarios en línea</td>
                            </tr>
                            <tr>
                                <td><em className="python-function">format_line</em></td>
                                <td>args: <em className="python inline">line</em> [<em className="python-type">str</em>]</td>
                                <td><em className="python-keyword">return</em> [<em className="python-type">str</em>]</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Permite dar a la línea un formato c-instrucción en caso de ser necesario, es una función que se utiliza en la función <em className="python-function inline">c_instruction</em>.</td>
                            </tr>
                        </tbody>

                    </Table>



                </SubSection>

                <SubSection className="section__gate" title="Código fuente" id="code">
                    <p>El ensamblador fue escrito en el lenguaje de programación <a href="https://www.python.org/" title="Ir al home de Python">Python</a>. La estructura del programa se presenta a continuación: </p>

                    <CodeBlock filePath={`${FILES_PATH}/other/project_tree.txt`} lang="plaintext" showLineNumbers={false} />

                    <p>El programa consta de dos archivos principales, <a href="#assembler.py" title="ver código"><em>assembler.py</em></a> y <a href="#sym_maps.py" title="ver código"><em>sym_maps.py</em></a>. En <em>assembler.py</em> se encuentra el código del ensamblador, el cual hace uso los mapeos definidos en <em>sym_maps.py</em>. Se espera que los archivos <em>.asm</em> que se pasen como argumentos al ensamblador estén en una carpeta llamada <em>assembly</em> en el root del proyecto.</p>

                    <p><em className="python">assembler.py</em></p>
                    <CodeBlock filePath={`${FILES_PATH}/assembler.py`} lang="python" id="assembler.py" />

                    <p><em className="python">sym_maps.py</em></p>
                    <CodeBlock filePath={`${FILES_PATH}/sym_maps.py`} lang="python" id="sym_maps.py" />
                </SubSection>

                <SubSection className="section__gate" title="Resultados" id="results">
                    <p>Para comprobar el correcto funcionamiento del ensamblador se testearon cada uno de los archivos de prueba brindados por nand2tetris. Por ejemplo, para <em className="python inline">Add.asm</em> el ensamblador da como output:</p>
                    <CodeBlock filePath={`${FILES_PATH}/other/Add.hack`} lang="plaintext" showLineNumbers={false} />

                    <p>Ahora, mediante la herramienta <a href={`/files/Assembler.` + (getUserOS() === "windows" ? "bat" : "sh")} download title="descargar">Assembler</a> se utilizó el ensamblador de nand2tetris para comprobar que la salida de ambos programas fuese la misma. Al utilizar dicha herramienta con el mismo archivo se obtiene:</p>

                    <Figure
                        title="Compilación de Add.asm con el ensamblador de referencia"
                        img="https://i.imgur.com/r7YEFxp.png"
                        imgStyle={{ "height": "480px" }}
                        figIndex="5"
                    />

                    <p>Como se observa, ambos ensambladores producen la misma compilación. Asi mismo, con los demás archivos se comprobó que ocurriese lo mismo: </p>

                    <Figures
                        title="Comparación de la salida de los ensambladores (izquierda: nuestra implementación; derecha: ensamblador de referencia) para el archivo Max.asm"
                        imgs={["https://i.imgur.com/tNNF9TH.png", "https://i.imgur.com/qVQeji4.png"]}
                        imgStyle={[{ "height": "280px", "marginRight": "20px" }, { "height": "450px" }]}
                        figIndex="6"
                    />

                    <Figures
                        title="Comparación de la salida de los ensambladores (izquierda: nuestra implementación; derecha: ensamblador de referencia) para el archivo Pong.asm. Solo se muestran algunas lineas (el archivo tiene alrededor de 27000 lineas)"
                        imgs={["https://i.imgur.com/jwHx7q3.png", "https://i.imgur.com/XMkKtMa.png"]}
                        imgStyle={[{ "height": "700px", "marginRight": "20px" }, { "height": "550px" }]}
                        figIndex="7"
                    />

                    <Figures
                        title="Comparación de la salida de los ensambladores (izquierda: nuestra implementación; derecha: ensamblador de referencia) para el archivo Rect.asm"
                        imgs={["https://i.imgur.com/IzrDFNH.png", "https://i.imgur.com/9mvgxLA.png"]}
                        imgStyle={[{ "height": "380px", "marginRight": "20px" }, { "height": "550px" }]}
                        figIndex="8"
                    />

                </SubSection>


            </Section>


            <Section id="files" title="3. Archivos">

                <p className="mb-3">
                    A continuación se adjuntan los archivos correspondientes al ensamblador, y los archivos .asm que provee nand2tetris para probar el ensamblador.
                </p>

                <div className="c-files">
                    <DownloadFilesButton files={LAB.files!} zipSrc={LAB.zip!} />
                </div>
            </Section>

        </Lab>
    );
}

export default Lab5;