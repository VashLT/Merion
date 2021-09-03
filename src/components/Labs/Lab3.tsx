import React from 'react';
import labs from '../../data/labs';

import Section from '../Section';
import LabAnswer from './LabAnswer';
import CodeBlock from '../CodeBlock';
import Figure from '../Figure';
import GateSection from '../Other/GateSection';
import DownloadFilesButton from './DownloadFilesButton';
import Lab from './Lab';

// project 2
import HALFADDER from '../../static/images/lab3/diagrams/HALFADDER.png';
import FULLADDER from '../../static/images/lab3/diagrams/FULLADDER.png';
import INC16 from '../../static/images/lab3/diagrams/INC16.jpg';
import BIT from '../../static/images/lab3/diagrams/BIT.png';

import HALFADDERtest from '../../static/images/lab3/tests/HALFADDER.png';
import FULLADDERtest from '../../static/images/lab3/tests/FULLADDER.png';
import ADD16test from '../../static/images/lab3/tests/ADD16.png';
import INC16_1test from '../../static/images/lab3/tests/INC16_1.png';
import INC16_2test from '../../static/images/lab3/tests/INC16_2.png';
// import ALUNOSTATtest from '../../static/images/lab3/tests/ALU-NOSTAT.png';
// import ALUtest from '../../static/images/lab3/tests/ALU.png';

// project 3
import BITtest from '../../static/images/lab3/tests/BIT.png';
import REGISTERtest from '../../static/images/lab3/tests/REGISTER.png';
// import RAM8test from '../../static/images/lab3/tests/RAM8.png';
// import RAM64test from '../../static/images/lab3/tests/RAM64.png';
// import RAM512test from '../../static/images/lab3/tests/RAM512.png';
// import RAM4Ktest from '../../static/images/lab3/tests/RAM4K.png';
// import RAM16Ktest from '../../static/images/lab3/tests/RAM16K.png';
import PCtest from '../../static/images/lab3/tests/PC.png';



import getUserOS from '../../utils/os';

const FILES_PATH = "/files/lab3/chips";

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
                    <p>Para este tercer laboratorio, desarrollaremos el <a href="https://www.nand2tetris.org/project02" title="ir al proyecto">proyecto 2</a> y <a href="https://www.nand2tetris.org/project03" title="ir al proyecto">proyecto 3</a> llamado "Aritmetica booleana" y "Lógica secuencial" respectivamente. Nuestro objetivo en el desarrollo del tercer laboratorio es acercarnos a la construcción de las compuertas lógicas principales descritas en el mismo, el cual nos introduce a la metodología de trabajo del curso y nos permite acceder a los conocimientos necesarios para desarrollar las actividades programadas en este.</p>
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
                <p>Cada una de los chips programados para el laboratorio fueron testeadas con un <a href={"/files/HardwareSimulator." + (getUserOS() === "windows" ? "bat" : "sh")}>Simulador de Hardware</a>. De esta manera, se garantizó el correcto funcionamiento de los mismos.</p>

                <GateSection className="section__gate" title="HalfAdder" id="half-adder">
                    <p>Para construir el “half adder” se hace uso de dos compuertas, una compuerta XOR que recibe dos entradas (<em>A</em> y <em>B</em>) y tiene como salida la suma <em>S</em>, y una compuerta AND que recibe estas mismas dos entradas pero como salida tiene el bit de carga <em>C</em>. </p>
                    <Figure
                        title='Esquema de referencia para el chip "Half Adder"'
                        figIndex="1"
                        img={HALFADDER}
                        imgStyle={{ height: "150px" }}
                        src="https://es.m.wikipedia.org/wiki/Archivo:Half_Adder.svg"
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/HalfAdder.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip HalfAdder"
                        figIndex="2"
                        img={HALFADDERtest}
                        src={HALFADDERtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="FullAdder" id="full-adder">
                    <p>La construcción del sumador completo se hizo a partir de dos medios sumadores (Half adder), a diferencia del anterior el sumador completo tiene una entrada adicional para un acarreo.</p>
                    <Figure
                        title='Esquema de referencia para el chip "Full Adder"'
                        figIndex="3"
                        img={FULLADDER}
                        imgStyle={{ height: "250px" }}
                        src="#"
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/FullAdder.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip FullAdder"
                        figIndex="4"
                        img={FULLADDERtest}
                        src={FULLADDERtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Add16" id="add16">
                    <p>El Add 16 se construyó con:</p>
                    <ul>
                        <li>1 medio sumador</li>
                        <li>15 sumadores completos</li>
                    </ul>
                    <p>Su solución se basó en que la suma de los dos primeros bits no tiene acarreo por esto se usa 1 medio sumador y partir de aquí se obtiene un acarreo por lo tanto se implementaron los 15 sumadores completos.</p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Add16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="5"
                        img={ADD16test}
                        src={ADD16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="16-bit incrementer" id="inc16">
                    <p>Para este chip se desarrollaron 2 soluciones:</p>
                    <h5>Solución 1</h5>
                    <p>La primera solución se dio basándose en el diagrama, donde se usaron 16 <a href="#half-adder" title="Ir a la compuerta">HALF-ADDER</a> donde la entrada <em>b</em> del primer sumador se pone en <em>True</em>.</p>
                    <Figure
                        title='Esquema de referencia para el chip "16-bit incrementer"'
                        figIndex="6"
                        img={INC16}
                        imgStyle={{ height: "500px" }}
                        src="https://hackaday.io/project/166246-computer-build-from-first-principals/log/165051-16-bit-1-increment-implementation-hdl"
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Inc16_1.hdl`} />
                    <p>Al testear el chip este pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para el chip Inc16 (solución 1)"
                        figIndex="7"
                        img={INC16_1test}
                        src={INC16_1test}
                        imgClass="img__test"
                    />
                    <h5>Solución 2</h5>
                    <p>En esta solución simplemente se usó un <a href="#add16" title="Ir a la compuerta">ADD16</a> el cual se implementó anteriormente y en la entrada <em>b</em> en el primer bit se puso en <em>True</em>.</p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Inc16_2.hdl`} />
                    <p>Al testear el chip este pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para el chip Inc16 (solución 2)"
                        figIndex="8"
                        img={INC16_2test}
                        src={INC16_2test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="ALU sin estados" id="ALU-nostat">
                    <p>El Add 16 se construyó con:</p>
                    <ul>
                        <li>1 medio sumador</li>
                        <li>15 sumadores completos</li>
                    </ul>
                    <p>Su solución se basó en que la suma de los dos primeros bits no tiene acarreo por esto se usa 1 medio sumador y partir de aquí se obtiene un acarreo por lo tanto se implementaron los 15 sumadores completos.</p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Add16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="9"
                        img={ADD16test}
                        src={ADD16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="ALU (Unidad Aritmética Lógica)" id="ALU">
                    <p>El Add 16 se construyó con:</p>
                    <ul>
                        <li>1 medio sumador</li>
                        <li>15 sumadores completos</li>
                    </ul>
                    <p>Su solución se basó en que la suma de los dos primeros bits no tiene acarreo por esto se usa 1 medio sumador y partir de aquí se obtiene un acarreo por lo tanto se implementaron los 15 sumadores completos.</p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Add16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="10"
                        img={ADD16test}
                        src={ADD16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Bit" id="bit">
                    <p>Agregar descripción</p>
                    <Figure
                        title='Esquema de referencia para el chip "Full Adder"'
                        figIndex="3"
                        img={BIT}
                        imgStyle={{ height: "200px" }}
                        src="#"
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Bit.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip Bit"
                        figIndex="4"
                        img={BITtest}
                        src={BITtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Register" id="register">
                    <p>Se compone de 16 <a href="#bit" title="Ir al chip">BIT</a>.</p>
                    <Figure
                        title='Esquema de referencia para el chip "Full Adder"'
                        figIndex="3"
                        img={BIT}
                        src="#"
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Register.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip Register"
                        figIndex="4"
                        img={REGISTERtest}
                        src={REGISTERtest}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="8-bit RAM" id="ram8">
                    <p>Añadir descripción </p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Add16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="5"
                        img={ADD16test}
                        src={ADD16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="64-bit RAM" id="ram64">
                    <p>Añadir descripción </p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Add16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="5"
                        img={ADD16test}
                        src={ADD16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="512-bit RAM" id="ram512">
                    <p>Añadir descripción </p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Add16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="5"
                        img={ADD16test}
                        src={ADD16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="4K-bit RAM" id="ram4k">
                    <p>Añadir descripción </p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Add16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="5"
                        img={ADD16test}
                        src={ADD16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="16K-bit RAM" id="ram16k">
                    <p>Añadir descripción </p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Add16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="5"
                        img={ADD16test}
                        src={ADD16test}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="PC (contador de programa)" id="pc">
                    <p>añadir descripción <a href="#bit" title="Ir al chip">BIT</a>.</p>
                    <Figure
                        title='Esquema de referencia para el chip "Full Adder"'
                        figIndex="3"
                        img={BIT}
                        src="#"
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/PC.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip Register"
                        figIndex="4"
                        img={PCtest}
                        src={PCtest}
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
    );
}

export default Lab3;