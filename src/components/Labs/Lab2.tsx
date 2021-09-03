import React from 'react';
import labs from '../../data/labs';

import Lab from "./Lab"
import Section from '../Section';
import LabAnswer from './LabAnswer';
import CodeBlock from '../CodeBlock';
import Figure from '../Figure';
import GateSection from '../Other/GateSection';
import DownloadFilesButton from './DownloadFilesButton';

import NOT from '../../static/images/lab2/diagrams/NOT.png';
import AND from '../../static/images/lab2/diagrams/AND.svg';
import OR from '../../static/images/lab2/diagrams/OR.png';
import XOR from '../../static/images/lab2/diagrams/XOR.png';
import MUX from '../../static/images/lab2/diagrams/MUX.svg';
import DMUX from '../../static/images/lab2/diagrams/DMUX.svg';

import NOTtest from '../../static/images/lab2/tests/NOT.png';
import ANDtest from '../../static/images/lab2/tests/AND.png';
import ORtest from '../../static/images/lab2/tests/OR.png';
import XORtest from '../../static/images/lab2/tests/XOR.png';
import MUXtest from '../../static/images/lab2/tests/MUX.png';
import DMUXtest from '../../static/images/lab2/tests/DMUX.png';
import NOT16test from '../../static/images/lab2/tests/NOT16.png';
import AND16test from '../../static/images/lab2/tests/AND16.png';
import OR16test from '../../static/images/lab2/tests/OR16.png';
import OR8WAYtest from '../../static/images/lab2/tests/OR8WAY.png';
import MUX16test from '../../static/images/lab2/tests/MUX16.png';
import MUX4WAY16test from '../../static/images/lab2/tests/MUX4WAY16.png';
import MUX8WAY16test from '../../static/images/lab2/tests/MUX8WAY16.png';
import DMUX4WAYtest from '../../static/images/lab2/tests/DMUX4WAY.png';
import DMUX8WAYtest from '../../static/images/lab2/tests/DMUX8WAY.png';


import getUserOS from '../../utils/os';

const FILES_PATH = "/files/lab2/gates";

const LAB = labs[1];

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
                targetId: "not",
                displayName: "Not"
            },
            {
                targetId: "and",
                displayName: "And"
            },
            {
                targetId: "or",
                displayName: "Or"
            },
            {
                targetId: "xor",
                displayName: "Xor"
            },
            {
                targetId: "mux",
                displayName: "Mux"
            },
            {
                targetId: "dmux",
                displayName: "DMux"
            },
            {
                targetId: "not16",
                displayName: "Not 16 bits"
            },
            {
                targetId: "and16",
                displayName: "And 16 bits"
            },
            {
                targetId: "or16",
                displayName: "Or 16 bits"
            },
            {
                targetId: "mux16",
                displayName: "Mux 16 bits"
            },
            {
                targetId: "or8way",
                displayName: "Or 8 Way"
            },
            {
                targetId: "mux4way16",
                displayName: "Mux 4 Way 16 bits"
            },
            {
                targetId: "mux8way16",
                displayName: "Mux 8 Way 16 bits"
            },
            {
                targetId: "dmux4way",
                displayName: "DMux 4 Way"
            },
            {
                targetId: "dmux8way",
                displayName: "DMux 8 Way"
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
    title: "4. Bibliografía",
    items: [
        {
            srcName: "Nand2tetris",
            srcLink: "https://www.nand2tetris.org/course",
            srcLinkName: "Course"
        },
        {
            srcName: "Inductiveload. (2006, 12 julio). AND Gate constructed only from NAND Gates. [Ilustración]. ",
            srcLink: "https://es.m.wikipedia.org/wiki/Archivo:AND_from_NAND.svg"
        },
        {
            srcName: "Lowe, D. (2016, 26 marzo). Electronics Logic Gates: Universal NAND Gates. Dummies. ",
            srcLink: "https://www.dummies.com/programming/electronics/components/electronics-logic-gates-universal-nand-gates/"
        },
        {
            srcName: "Storr, W. (2021, 22 junio). Demultiplexer (DEMUX) Digital Decoder Tutorial. Basic Electronics Tutorials. ",
            srcLink: "https://www.electronics-tutorials.ws/combination/comb_3.html"
        }
    ]
}

export const Lab2: React.FC = () => {
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
                    <p>Para este segundo laboratorio, desarrollaremos el <a href="https://www.nand2tetris.org/project01" title="ir al proyecto">proyecto 1</a> llamado "Lógica Booleana" propuesto por Nand to Tetris. Nuestro objetivo en el desarrollo del segundo laboratorio es acercarnos a la construcción de las compuertas lógicas principales descritas en el mismo, el cual nos introduce a la metodología de trabajo del curso y nos permite acceder a los conocimientos necesarios para desarrollar las actividades programadas en este.</p>
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


            <Section id="gates" title="2. Compuertas Lógicas">
                <p>Cada una de las compuertas programadas para el laboratorio fueron testeadas con un <a href={"/files/HardwareSimulator." + (getUserOS() === "windows" ? "bat" : "sh")}>Simulador de Hardware</a>. De esta manera, se garantizó el correcto funcionamiento de las mismas.</p>

                <GateSection className="section__gate" title="Not" id="not">
                    <p>Para construir la compuerta NOT simplemente se hace pasar la entrada por una compuerta NAND, de esta manera siempre se conseguirá el valor opuesto de la entrada. </p>
                    <Figure
                        title="Compuerta NOT construida con una NAND"
                        figIndex="1"
                        img={NOT}
                        src="https://qph.fs.quoracdn.net/main-qimg-6664d9b8e96801605a8c257e64477ded.webp"
                    />
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Not.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="2"
                        img={NOTtest}
                        src={NOTtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="And" id="and">
                    <p>La compuerta AND se construyó a partir de 2 compuertas NAND conectadas entre sí, como se muestra en el siguiente diagrama.</p>
                    <Figure
                        title="Compuerta AND construida con NANDs"
                        figIndex="3"
                        img={AND}
                        src="https://qph.fs.quoracdn.net/main-qimg-6664d9b8e96801605a8c257e64477ded.webp"
                    />
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/And.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema: </p>
                    <Figure
                        title="Test para compuerta AND"
                        figIndex="4"
                        img={ANDtest}
                        src={ANDtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Or" id="or">
                    <p>La compuerta OR se construye a partir de 2 compuertas NAND para negar las entradas, y finalmente se operan estas 2 a través de otra compuerta NAND.</p>
                    <Figure
                        title="Compuerta OR construida con NANDs"
                        figIndex="5"
                        img={OR}
                        imgStyle={{ height: "120px" }}
                        src="https://qph.fs.quoracdn.net/main-qimg-6664d9b8e96801605a8c257e64477ded.webp"
                    />
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Or.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta OR"
                        figIndex="6"
                        img={ORtest}
                        src={ORtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Xor" id="xor">
                    <p>Para esta compuerta se opera:</p>
                    <ul>
                        <li>En NAND las 2 entradas.</li>
                        <li>En NAND la entrada a con la salida de la primera operación.</li>
                        <li>En NAND la entrada b con la salida de la primera operación.</li>
                        <li>En NAND los resultados de las operaciones 2 y 3.</li>
                    </ul>
                    <Figure
                        title="Compuerta OR construida con NANDs"
                        figIndex="7"
                        img={XOR}
                        imgStyle={{ height: "120px" }}
                        src="https://qph.fs.quoracdn.net/main-qimg-6664d9b8e96801605a8c257e64477ded.webp"
                    />
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Xor.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta XOR"
                        figIndex="8"
                        img={XORtest}
                        src={XORtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Mux" id="mux">
                    <p>La compuerta Mux tiene cómo entradas <em>a</em>, <em>b</em>, <em>sel</em> y cómo salida el valor de <em>a</em> si la <em>sel</em> es 0 y <em>b</em> en cualquier otro caso. Por tanto, se niega la entrada <em>sel</em> con la compuerta NOT anteriormente desarrollado y se opera con la compuerta AND anteriormente desarrollada con entradas <em>a</em> y negación de <em>sel</em> Y finalmente se opera en la compuerta OR las 2 salidas anteriores.
                    </p>
                    <Figure
                        title="Compuerta MUX construida con NAND, AND y OR"
                        figIndex="9"
                        img={MUX}
                        imgStyle={{ height: "150px" }}
                        src="https://qph.fs.quoracdn.net/main-qimg-6664d9b8e96801605a8c257e64477ded.webp"
                    />
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Mux.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta MUX"
                        figIndex="10"
                        img={MUXtest}
                        src={MUXtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="DMux" id="dmux">
                    <p>A partir de la lógica propia de la compuerta DMUX se pueden construir las salidas de las siguiente manera: <em>a = in AND NOT(sel)</em> y <em>b = in AND sel</em>, construyéndola a partir de estas dos compuertas anteriormente desarrolladas.
                    </p>
                    <Figure
                        title="Compuerta MUX construida con NAND, AND y OR"
                        figIndex="11"
                        img={DMUX}
                        imgStyle={{ height: "150px" }}
                        src="https://qph.fs.quoracdn.net/main-qimg-6664d9b8e96801605a8c257e64477ded.webp"
                    />
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/DMux.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta DMUX"
                        figIndex="12"
                        img={DMUXtest}
                        src={DMUXtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Not 16 bits" id="not16">
                    <p>Para esta compuerta se utilizan 16 compuertas <a href="#not" title="Ir a la compuerta">NOT</a> previamente desarrolladas. El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Not16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT16"
                        figIndex="13"
                        img={NOT16test}
                        src={NOT16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="And 16 bits" id="and16">
                    <p>Para esta compuerta se utilizan 16 compuertas <a href="#and" title="Ir a la compuerta">AND</a> previamente desarrolladas. Su código se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/And16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema: </p>
                    <Figure
                        title="Test para compuerta AND16"
                        figIndex="14"
                        img={AND16test}
                        src={AND16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Or 16 bits" id="or16">
                    <p>Para esta compuerta se utilizan 16 compuertas <a href="#or" title="Ir a la compuerta">OR</a> previamente desarrolladas. Su código se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Or16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema: </p>
                    <Figure
                        title="Test para compuerta OR16"
                        figIndex="14"
                        img={OR16test}
                        src={OR16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Mux 16 bits" id="mux16">
                    <p>Para esta compuerta se utilizan 16 compuertas <a href="#mux" title="Ir a la compuerta">MUX</a> previamente desarrolladas. El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Mux16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta MUX16"
                        figIndex="15"
                        img={MUX16test}
                        src={MUX16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Or 8 Way" id="or8way">
                    <p>Esta compuerta tiene una entrada de 8 elementos por lo que se operan entre sí en parejas con la compuerta <a href="#or" title="Ir a la compuerta">OR</a> anteriormente desarrollada, se operan también entre sí en parejas utilizando las compuerta OR con los resultados de las anteriores operaciones y finalmente se operan con OR estos 2 últimos resultados.</p>
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Or8Way.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta OR8WAY"
                        figIndex="16"
                        img={OR8WAYtest}
                        src={OR8WAYtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Mux 4 Way 16 bits" id="mux4way16">
                    <p>Esta compuerta tiene 4 entradas (<em>a, b, c, d</em>) de 16 elementos cada una y 2 <em>sel</em>.
                        Se utilizan los <a href="#mux16" title="Ir a la compuerta">MUX16</a> anteriormente desarrollados para operar <em>a - b</em> y <em>c - d</em>, y finalmente se operan los 2 resultados anteriores en un MUX16, arrojando este último el resultado final de 16 elementos.
                    </p>
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Mux4Way16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta MUX4WAY16"
                        figIndex="17"
                        img={MUX4WAY16test}
                        src={MUX4WAY16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Mux 8 Way 16 bits" id="mux8way16">
                    <p>Esta compuerta cuenta con 8 entradas (<em>a, b, c, d, e, f, g, h</em>) de 16 elementos y una entrada <em>sel</em> de 3 elementos,
                        se operan las parejas de letras <em>a-b</em>, <em>c-d</em>, <em>e-f</em> y <em>g-h</em> con la compuerta MUX16 resultando 4 salidas, una respectiva a cada operación. Se operan con MUX16 parejas de salidas <em>out1 - out2</em> y <em>out3 - out4</em> y estas generan 2 salidas, una respectiva a cada operación. Finalmente se operan las 2 salidas resultantes con MUX16  y esto nos da el resultado final de 16 elementos
                    </p>
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Mux8Way16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta MUX8WAY16"
                        figIndex="6"
                        img={MUX8WAY16test}
                        src={MUX8WAY16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="DMux 4 Way" id="dmux4way">
                    <p>Está compuerta se construye a partir de <a href="#dmux" title="Ir a la compuerta">DMUX</a>,
                        operando <em>in</em> y <em>sel[1]</em> en un DMUX para obtener 2 salidas, las cuales
                        posteriormente se operan en un DMUX, la salida 1 con <em>sel[0]</em> y la salida 2 con <em>sel[0]</em>, obteniendo así las salidas <em>a</em>, <em>b</em> y <em>c</em>, <em>d</em> respectivamente.
                    </p>
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/DMux4Way.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta DMUX4WAY"
                        figIndex="18"
                        img={DMUX4WAYtest}
                        src={DMUX4WAYtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="DMux 8 Way" id="dmux8way">
                    <p>La compuerta DMUX8WAY es una “continuación” de la <a href="#dmux4way" title="Ir a la compuerta">DMUX4WAY</a>, ya que presenta un comportamiento similar pero con 3 entradas en <em>sel</em> y 8 salidas (<em>a, b, c, d, f, g, h</em>) por lo que se puede extender el comportamiento planteado para la DMUX4WAY obteniendo primero 6 salidas y luego operando estas con <em>sel[0]</em> y así obteniendo las salidas finales.

                    </p>
                    <p>El código para la compuerta se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/DMux8Way.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó la compuerta y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta DMUX8WAY"
                        figIndex="19"
                        img={DMUX8WAYtest}
                        src={DMUX8WAYtest}
                        imgClass="img__test"
                    />
                </GateSection>

            </Section>

            <Section id="files" title="3. Archivos">

                <p className="mb-3">
                    A continuación se adjuntan los archivos HDL (Hardware Descriptive Language) de cada uno de los chips.
                </p>

                <div className="c-files">
                    <DownloadFilesButton files={LAB.files!} zipSrc={LAB.zip!} />
                </div>
            </Section>

        </Lab>
    )
}

export default Lab2;