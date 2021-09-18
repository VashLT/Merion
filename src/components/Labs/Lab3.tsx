import React from 'react';
import labs from '../../data/labs';

import Section from '../Section';
import LabAnswer from './LabAnswer';
import CodeBlock from '../CodeBlock';
import Figure from '../Figure';
import GateSection from '../Other/GateSection';
import DownloadFilesButton from './DownloadFilesButton';
import Lab from './Lab';

import { CDN_DOMAIN } from '../../utils/constants';

// project 2
import HALFADDER from '../../static/images/lab3/diagrams/HALFADDER.svg';
import FULLADDER from '../../static/images/lab3/diagrams/FULLADDER.svg';
import ADD16 from '../../static/images/lab3/diagrams/ADD16.svg';
import INC16 from '../../static/images/lab3/diagrams/INC16.svg';
import INC16_2 from '../../static/images/lab3/diagrams/INC16_2.svg';
import ALU from '../../static/images/lab3/diagrams/ALU.svg';
import BIT from '../../static/images/lab3/diagrams/BIT.svg';
import PC from '../../static/images/lab3/diagrams/PC.svg';


import getUserOS from '../../utils/os';

const FILES_PATH = `/files/lab3/chips`;
const STATIC_PATH = `${CDN_DOMAIN}/files/lab3`;
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
            srcName: "Noam N., Shimon S. (2005, Junio). Capítulo 2 y 3, The Elements of Computing Systems: Building a Modern Computer from First Principles. [Libro]",
            srcLink: "https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_1801b5682e4d4a67bd05e14235665d8b.pdf",
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
                    <p>Para este tercer laboratorio, desarrollaremos el <a href="https://www.nand2tetris.org/project02" title="ir al proyecto">proyecto 2</a> y <a href="https://www.nand2tetris.org/project03" title="ir al proyecto">proyecto 3</a> llamado "Aritmetica booleana" y "Lógica secuencial" respectivamente. En el proyecto de "Aritmética booleana" el objetivo primordial es aprender sobre el funcionamiento de las operaciones aritméticas, con ayuda de las compuertas lógicas construidas en el proyecto anterior, para finalmente llegar a construir una Unidad Aritmética Lógica (ALU).</p>
                    <p>
                        Para el desarrollo de esta actividad empezamos con una consulta del reglamento básico de la suma binaria luego desarrollamos una primera tabla de verdad que tenía en cuenta  la suma de dos números y el resultado de esta suma con su <strong>carry</strong>, para obtener el circuito correspondiente a esta tabla utilizamos un método llamado <strong>mapa de karnaugh</strong> y ya con el circuito procedemos  hacer el diseño en HDL. Para el sumador completo, que tiene en cuenta aparte de las suma de dos números la suma del carry, unimos dos <a href="#half-adder" title="Ir al chip">Half Adder</a>. Posteriormente, para el sumador de 16 bits se utilizó un sumador <a href="#half-adder" title="Ir al chip">Half Adder</a> seguido de 15 <a href="#full-adder" title="Ir al chip">Full Adder</a>.conectados en secuencia para que el bit de carry se conecte a una entrada del siguiente sumador.
                    </p>
                    <p>Por otro lado, para el <a href="#inc16" title="Ir al chip">16-bit Incrementer</a> utilizamos 16 <a href="#half-adder" title="Ir al chip">Half Adder</a> en secuencia y en la primera entrada <em>b</em> le asignamos el valor de <em>true</em> como un incremento de una unidad. Por último, para la realización del <a href="#ALU" title="Ir al chip">ALU</a> se toma de <a href="https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_89c60703ebfc4bf39acef13bdc050f5d.pdf" title="Descargar guía">guía</a> la tabla que nos proporciona el curso nand2tetris, y con base en esta y a los chips anteriormente realizados construimos nuestro chip ALU.

                    </p>

                    <p>
                        En el proyecto tres el objetivo es construir gradualmente unidades de almacenamiento como la RAM (Random Access Memory) e introducirnos con la construcción de chips secuenciales (dependientes de los ciclos del reloj). Para esto, tenemos que repasar conceptos de lógica secuencial y  aprender sobre el funcionamiento de los flip-flps y cómo por medio de ellos podemos construir chips que nos permiten almacenar bits de manera persistente a lo largo del tiempo. Abriendo lo anterior nuevas posibilidades, y a su vez nuevos retos como, por ejemplo, implementar mecanismos para localizar (“direccionar”) el registro de memoria en el que deseamos operar.
                    </p>
                </LabAnswer>
            </Section>

            <Section id="chips" title="2. Chips">
                <p>Cada una de los chips programados para el laboratorio fueron testeadas con un <a href={`${CDN_DOMAIN}/files/HardwareSimulator.` + (getUserOS() === "windows" ? "bat" : "sh")}>Simulador de Hardware</a>. De esta manera, se garantizó el correcto funcionamiento de los mismos.</p>

                <GateSection className="section__gate" title="HalfAdder" id="half-adder">
                    <p>Para construir el “half adder” se hace uso de dos compuertas, una compuerta XOR que recibe dos entradas (<em>A</em> y <em>B</em>) y tiene como salida la suma <em>S</em>, y una compuerta AND que recibe estas mismas dos entradas pero como salida tiene el bit de carga <em>C</em>. </p>
                    <Figure
                        title='Esquema de referencia para el chip "Half Adder"'
                        figIndex="1"
                        img={`${STATIC_PATH}/HALFADDER.svg`}
                        imgStyle={{ height: "160px" }}
                        src="https://es.m.wikipedia.org/wiki/Archivo:Half_Adder.svg"
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/HalfAdder.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip HalfAdder"
                        figIndex="2"
                        img={`${STATIC_PATH}/tests/HALFADDER.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="FullAdder" id="full-adder">
                    <p>La construcción del sumador completo se hizo a partir de dos medios sumadores (Half adder), a diferencia del anterior el sumador completo tiene una entrada adicional para un acarreo.</p>
                    <Figure
                        title='Esquema de referencia para el chip "Full Adder"'
                        figIndex="3"
                        img={`${STATIC_PATH}/FULLADDER.svg`}
                        imgStyle={{ height: "120px" }}
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/FullAdder.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip FullAdder"
                        figIndex="4"
                        img={`${STATIC_PATH}/tests/FULLADDER.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="16-bit Adder" id="add16">
                    <p>El Add 16 se construyó con:</p>
                    <ul>
                        <li>1 medio sumador</li>
                        <li>15 sumadores completos</li>
                    </ul>
                    <p>Su solución se basó en que la suma de los dos primeros bits no tiene acarreo por esto se usa 1 medio sumador y partir de aquí se obtiene un acarreo por lo tanto se implementaron los 15 sumadores completos.</p>
                    <Figure
                        title='Esquema de referencia para el chip "16-bit Add"'
                        figIndex="5"
                        img={`${STATIC_PATH}/ADD16.svg`}
                        imgStyle={{ height: "300px" }}
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Add16.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="6"
                        img={`${STATIC_PATH}/tests/ADD16.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="16-bit incrementer" id="inc16">
                    <p>Para este chip se desarrollaron 2 soluciones:</p>
                    <h5>Solución 1</h5>
                    <p>La primera solución se dio basándose en el diagrama, donde se usaron 16 <a href="#half-adder" title="Ir a la compuerta">HALF-ADDER</a> donde la entrada <em>b</em> del primer sumador se pone en <em>True</em>.</p>
                    <Figure
                        title='Esquema de referencia para el chip "16-bit incrementer" (Método 1)'
                        figIndex="7"
                        img={`${STATIC_PATH}/INC16.svg`}
                        imgStyle={{ height: "320px" }}
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Inc16_1.hdl`} />
                    <p>Al testear el chip este pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para el chip Inc16 (solución 1)"
                        figIndex="8"
                        img={`${STATIC_PATH}/tests/INC16_1.png`}
                        imgClass="img__test"
                    />
                    <h5>Solución 2</h5>
                    <p>En esta solución simplemente se usó un <a href="#add16" title="Ir a la compuerta">ADD16</a> el cual se implementó anteriormente y en la entrada <em>b</em> en el primer bit se puso en <em>True</em>.</p>
                    <Figure
                        title='Esquema de referencia para el chip "16-bit incrementer" (Método 2)'
                        figIndex="9"
                        img={`${STATIC_PATH}/INC16_2.svg`}
                        imgStyle={{ height: "70px" }}
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Inc16_2.hdl`} />
                    <p>Al testear el chip este pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para el chip Inc16 (solución 2)"
                        figIndex="10"
                        img={`${STATIC_PATH}/tests/INC16_2.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="ALU sin estados" id="ALU-nostat">
                    <p>Este chip se dice que es "sin estados" debido a que no se manejan los estados de la salida de la ALU. En lo que respecta a la implementacion, en primera instancia se cuenta con <em>X</em> y <em>Y</em> que son las dos entradas de 16 bits del chip. <em>zx</em> nos indica si debe poner el 0 o no la entrada <em>x</em>, y a partir de esta  se obtiene una primera salida llamada <em>x1</em>. Posteriormente, lo que se hace es negar <em>x1</em>, para que más adelante y con base en <em>nx</em>, se obtenga la primera salida de 16 bits de la entrada <em>X</em>, estos pasos se repiten con la entrada <em>Y</em>. </p>

                    <p>Una vez hecho lo anterior, se realizan las operaciones <em>x+y</em> con un <a href="#add16">ADD16</a> y la operación <em>y*x</em> con un <a href="/labs/1/#and16">AND16</a>, con estos resultados se utiliza un <a href="/labs/2/#mux16">MUX16</a> para seleccionar a partir de <em>f</em> cuál de estas 2 operaciones se llevará a la salida <em>o1</em>. </p>

                    <p>Finalmente se niega la salida o1 y a partir de no, se determina si el o1 debe ser negado o con su valor inicial.</p>
                    <CodeBlock filePath={`${FILES_PATH}/ALU-nostat.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta ALU sin estados"
                        figIndex="11"
                        img={`${STATIC_PATH}/tests/ALU-NOSTAT.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="ALU (Unidad Aritmética Lógica)" id="ALU">
                    <p>Este chip juega un papel fundamental para el calculo de operaciones en un procesador. A grandes rasgos, la ALU se encarga de aplicar operaciones aritméticas sobre sus entradas (<em>X</em> y <em>Y</em>). Cada una de las operaciones que se pueden aplicar se controlan mediante las entradas <em>zx</em> (volver cero todos los bits de <em>x</em>), <em>nx</em> (negar el input <em>x</em>), <em>zy</em> (volver cero todos los bits de <em>y</em>), <em>ny</em> (negar el input <em>y</em>), <em>f</em> (puede aplicar la operación suma o la operación AND a las entradas) y <em>no</em> (niega la salida de la ALU).</p>

                    <p>En lo que respecta al implementación, en primera instancia se cuenta con <em>X</em> y <em>Y</em> que son las dos entradas de 16 bits del chip. Primero, de acuerdo a <em>zx</em>, nos indica si debe poner el 0 o no la entrada, y a partir de esta  se obtiene una primera salida llamada <em>x1</em>. Posteriormente, lo que se hace es negar <em>x1</em>, para que más adelante y con base en <em>nx</em>, se obtenga la primera salida de 16 bits de la entrada <em>X</em>, estos pasos se repiten con la entrada <em>Y</em>. </p>

                    <p>Una vez hecho lo anterior, se realizan las operaciones <em>x+y</em> con un <a href="#add16">ADD16</a> y la operación <em>y*x</em> con un <a href="/labs/1/#and16">AND16</a>, con estos resultados se utiliza un <a href="/labs/2/#mux16">MUX16</a> para seleccionar a partir de <em>f</em> cuál de estas 2 operaciones se llevará a la salida <em>out</em>. </p>

                    <p>Finalmente se niega la salida <em>out</em> y a partir de <em>no</em> se determina si el <em>out</em> debe ir negado o con su valor inicial y con este último resultado se realizan las operaciones para determinar el <em>zr</em>, si <em>out</em> es igual 0 retornará 1, en caso contrario 0 y el <em>ng</em>, si <em>out</em> es menor 0 retornará 1, en caso contrario 0 </p>
                    <Figure
                        title='Esquema de referencia para el chip "ALU"'
                        figIndex="12"
                        img={`${STATIC_PATH}/ALU.svg`}
                        imgStyle={{ height: "820px" }}
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/ALU.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para compuerta NOT"
                        figIndex="13"
                        img={`${STATIC_PATH}/tests/ALU.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Bit" id="bit">
                    <p>Este chip es la puerta de entrada para almacenar bits, permite almacenar (load) o leer (read). Lo anterior se controla mediante la entrada <em>load</em> (1 para sobreescribir o 0 para leer).Se parte de la condición de, si <em>load == 1</em> entonces la salida es la entrada <em>in</em>, en caso contrario la salida es la de la operación DFF (Data Flip-Flop). </p>
                    <Figure
                        title='Esquema de referencia para el chip "Bit"'
                        figIndex="14"
                        img={`${STATIC_PATH}/BIT.svg`}
                        imgStyle={{ height: "150px" }}
                        src="#"
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Bit.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip Bit"
                        figIndex="15"
                        img={`${STATIC_PATH}/tests/BIT.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="16-bit Register" id="register">
                    <p>Es una extensión del chip <a href="#bit" title="Ir al chip">BIT</a>, haciendolo práctico el hecho de que puede almacenar hasta 16-bits,permitiendo también la lectura/sobreescritura del valor almacenado. Este chip se implementa utilizando 16 <a href="#bit" title="Ir al chip">BIT</a> en cadena para cada uno bits de la entrada.</p>
                    <Figure
                        title='Esquema de referencia para el chip "Register"'
                        figIndex="16"
                        img={`${STATIC_PATH}/BIT.svg`}
                        imgStyle={{ height: "150px" }}
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Register.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip Register"
                        figIndex="17"
                        img={`${STATIC_PATH}/tests/REGISTER.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="8-bit RAM" id="ram8">
                    <p>Este chip trabaja con tres entradas y una única salida.</p>
                    <ul>
                        <li>Entradas: in[16], load, address[3]</li>
                        <li>Salidas: out[16]</li>
                    </ul>
                    <p>Es un chip con 8 campos para el registro. Su lógica de acceso a datos se logra con un <a href="/labs/2#dmux8way" title="Ir al chip">DMUX8WAY</a> y un <a href="/labs/2#mux8way16" title="Ir al chip">MUX8WAY16</a>, dichos chips permiten mapear cada uno de los registros a un valor de <em>address</em>. Si el valor de <em>load</em> es 0 se realizará una lectura y con 1 escritura. Por otro lado, sus direcciones (<em>address</em>) están compuestas por 3 bits.</p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/RAM8.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para 8-bit RAM"
                        figIndex="18"
                        img={`${STATIC_PATH}/tests/RAM8.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="64-bit RAM" id="ram64">
                    <p>Este chip trabaja con tres entradas y una única salida.</p>
                    <ul>
                        <li>Entradas: in[16], load, address[6]</li>
                        <li>Salidas: out[16]</li>
                    </ul>
                    <p>Es un chip que consta con hasta 64 campos para el registro de datos. Sus palabras tienen 16 bits de ancho, su arquitectura consta de ocho memorias <a href="#ram8" title="Ir al chip">RAM8</a>. Su lógica de acceso está dada por <a href="/labs/2#dmux8way" title="Ir al chip">DMUX8WAY</a> y un <a href="/labs/2#mux8way16" title="Ir al chip">MUX8WAY16</a>. El bit <em>load</em> será 0 si las operaciones son de lectura y 1 si son de escritura, y sus direcciones (<em>address</em>) están compuestas por 6 bits.</p>
                    <CodeBlock filePath={`${FILES_PATH}/RAM64.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para 64-bit RAM"
                        figIndex="19"
                        img={`${STATIC_PATH}/tests/RAM64.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="512-bit RAM" id="ram512">
                    <p>Este chip trabaja con tres entradas y una única salida.</p>
                    <ul>
                        <li>Entradas: in[16], load, address[9]</li>
                        <li>Salidas: out[16]</li>
                    </ul>
                    <p>Es un chip que consta con hasta 512 campos para el registro de datos. Su arquitectura consta de ocho memorias <a href="#ram64" title="Ir al chip">RAM64</a>. Su lógica de acceso está dada por <a href="/labs/2#dmux8way" title="Ir al chip">DMUX8WAY</a> y un <a href="/labs/2#mux8way16" title="Ir al chip">MUX8WAY16</a>. El bit <em>load</em> será 0 si las operaciones son de lectura y 1 si son de escritura, y sus direcciones (<em>address</em>) están compuestas por 9 bits.</p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/RAM512.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para 512-bit RAM"
                        figIndex="20"
                        img={`${STATIC_PATH}/tests/RAM512.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="4K-bit RAM" id="ram4k">
                    <p>Este chip trabaja con tres entradas y una única salida.</p>
                    <ul>
                        <li>Entradas: in[16], load, address[12]</li>
                        <li>Salidas: out[16]</li>
                    </ul>
                    <p>Es un chip que consta con hasta 4096 campos para el registro de datos. Su arquitectura consta de ocho memorias <a href="#ram512" title="Ir al chip">RAM512</a>. Su lógica de acceso está dada por <a href="/labs/2#dmux8way" title="Ir al chip">DMUX8WAY</a> y un <a href="/labs/2#mux8way16" title="Ir al chip">MUX8WAY16</a>. Sus direcciones (<em>address</em>) están compuestas por 12 bits.</p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/RAM4K.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para 4K-bit RAM"
                        figIndex="21"
                        img={`${STATIC_PATH}/tests/RAM4K.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="16K-bit RAM" id="ram16k">
                    <p>Este chip trabaja con tres entradas y una única salida.</p>
                    <ul>
                        <li>Entradas: in[16], load, address[15]</li>
                        <li>Salidas: out[16]</li>
                    </ul>
                    <p>Es un chip que consta con hasta 16000 campos para el registro de datos. Su arquitectura consta de ocho memorias <a href="#ram4k" title="Ir al chip">RAM4K</a>. Sus direcciones (<em>address</em>) están compuestas por 16 bits.</p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/RAM16K.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para 16K-bit RAM"
                        figIndex="22"
                        img={`${STATIC_PATH}/tests/RAM16K.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="PC (contador de programa)" id="pc">
                    <p>Para el “program counter” se emplearon los chips:</p>
                    <ul>
                        <li><a href="#inc16" title="Ir al chip">INC16</a></li>
                        <li><a href="#mux16" title="Ir al chip">MUX16</a></li>
                        <li><a href="#register" title="Ir al chip">REGISTER</a></li>
                    </ul>

                    <p>Este chip se encarga de incrementar, resetear y/o actualizar su salida dependiendo de los valores de <em>load</em>, <em>inc</em> y <em>reset</em>. Se emplearon las <a href="#mux16" title="Ir al chip">MUX16</a> como condicionales para determinar la aplicación de la operación o no.</p>

                    <p>La operación <strong>reset</strong> se colocó al final para asegurar que la salida iba a ser un binario lleno de 0s. Por otro lado, debido a que el contador depende de su estado anterior, se empleó un <a href="#register" title="Ir al chip">Registro</a> para almacenar su estado y a su vez para obtener el valor que se debe incrementar, dicho valor se pasa como entrada a <a href="#inc16" title="ver sección">INC16</a>. </p>
                    <Figure
                        title='Esquema de referencia para el chip "PC"'
                        figIndex="23"
                        img={`${STATIC_PATH}/PC.svg`}
                        imgStyle={{ height: "500px" }}
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/PC.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip PC"
                        figIndex="24"
                        img={`${STATIC_PATH}/tests/PC.png`}
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