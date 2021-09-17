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
import MULT from '../../static/images/lab4/MULT.svg';
import FULLADDER from '../../static/images/lab3/diagrams/FULLADDER.svg';
import ADD16 from '../../static/images/lab3/diagrams/ADD16.svg';
import INC16 from '../../static/images/lab3/diagrams/INC16.svg';
import INC16_2 from '../../static/images/lab3/diagrams/INC16_2.svg';
import ALU from '../../static/images/lab3/diagrams/ALU.svg';
import BIT from '../../static/images/lab3/diagrams/BIT.svg';
import PC from '../../static/images/lab3/diagrams/PC.svg';


import getUserOS from '../../utils/os';

const FILES_PATH = `/files/lab4/chips`;
const STATIC_PATH = `${CDN_DOMAIN}/static/media`;
const LAB = labs[3];

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
        targetId: "machine-lang",
        displayName: "2. Lenguaje de Máquina",
        subSections: [
            {
                targetId: "mult",
                displayName: "Multiplication"
            },
            {
                targetId: "fill",
                displayName: "Llenado con Manejo I/O (Input and Output)"
            },
        ]
    },
    {
        targetId: "chips",
        displayName: "3. Chips",
        subSections: [
            {
                targetId: "memory",
                displayName: "Memoria"
            },
            {
                targetId: "cpu",
                displayName: "Unidad Central de Proeso (CPU)"
            },
            {
                targetId: "computer",
                displayName: "Computador"
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
            <Section id="machine-lang" title="1. Preguntas">
                <LabAnswer
                    id="qt1"
                    question={LAB.raw_questions[0]}
                >
                    <p>Para este cuarto laboratorio, desarrollaremos el <a href="https://www.nand2tetris.org/project04" title="ir al proyecto">proyecto 4</a> y <a href="https://www.nand2tetris.org/project05" title="ir al proyecto">proyecto 5</a> llamado "Programación en Lenguaje de Máquina" y "Arquitectura de Computador" respectivamente. En el proyecto de "Programación en Lenguaje de Máquina" el objetivo primordial es aprender sobre el funcionamiento de las operaciones aritméticas, con ayuda de las compuertas lógicas construidas en el proyecto anterior, para finalmente llegar a construir una Unidad Aritmética Lógica (ALU).</p>
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

            <Section id="chips" title="2. Lenguaje de Máquina">
                <p>Tanto la multiplicación como el programa de manejo de la pantalla (manipulación de pixeles desde el teclado) fueron testeados utilizando un <a href={`${CDN_DOMAIN}/files/CPUSimulator.` + (getUserOS() === "windows" ? "bat" : "sh")}>Simulador de CPU</a>. De esta manera, se garantizó el correcto funcionamiento de los mismos.</p>

                <GateSection className="section__gate" title="Multiplicación" id="mult">
                    <p>Se implementó un programa para multiplar dos números, dicho programa está escrito en el lenguaje <i>Hack</i>. Para realizar la multiplicación se formó el siguiente proceso: </p>
                    <ol>
                        <li>Poner la dirección de memoria del resultado (<em>R2</em>) en 0</li>
                        <li>verificar si los dos números en las direcciones <em>R1</em> y <em>R2</em> no son menores que 0, en caso de que lo sean de va al final del programa y se finaliza, si el valor en <em>R0</em> es 0 se intercambian <em>R1</em> y <em>R0</em> en caso contrario se deja sin modificar</li>
                        <li>se almacena el valor de <em>R0</em> en <em>R3</em> y se inicia un loop que se ejecutará <em>R0</em> veces sumando en cada iteracion el valor de <em>R1</em> a <em>R2</em> y restando 1 de <em>R3</em> para llevar el conteo, este loop se ejecutará mientras <em>R3</em> sea mayor que 0</li>
                    </ol>
                    <p>En el <strong>Fig. 1.</strong> se muestra el flujo lógico del programa. Se destaca también algunas limitaciones del programa, pues en este se asume que los números a multiplicar son mayores que 0, y debido a la arquitectura del computador para el cual va a ser utilizado, el valor máximo de las multiplicaciones es 32 768.
                    </p>
                    <Figure
                        title='Diagrama de flujo del programa de multiplicación'
                        figIndex="1"
                        img={MULT}
                        imgStyle={{ height: "700px" }}
                    />
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Mult.asm`} lang="c" />
                    <p>Utilizando el simulador de CPU, se testeó el programa y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test automático para el programa de Multiplicación"
                        figIndex="2"
                        img={`/files/lab4/tests/MULT.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Llenado con Manejo I/O (Fill I/O Handling)" id="fill">
                    <p>El programa de llenado mediante el manejo de entrada y salida (Fill I/O Handling) realiza un <i>loop</i> infinito en el cual escucha a entradas del teclado y cambia el color de los pixeles en la pantalla. Para realizar lo anterior se sigue el siguiente proceso:
                        <ol>
                            <li>se obtiene el valor del teclado ingresado, se verifica que se haya pulsado una tecla (Sea mayor que 0) si es así se mueve al bloque <em>ON</em>.</li>
                            <li>se pone el valor de dibujo en -1.</li>
                            <li>se pasa al bloque <em>DRAW</em>, donde se genera un ciclo el cual recorrerá todas las posiciones de la pantalla rellenandolas de negro. </li>
                            <li>cuando se deja de presionar una tecla se pondrá el valor de dibujo en 0, por lo que realizará el mismo proceso descrito anteriormente pero poniendo todas las posiciones en blanco.</li>
                        </ol>
                    </p>
                    <p>El código del programa se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Fill.asm`} />
                    <p>Utilizando el simulador de CPU, se realizaron dos tests, uno manual y otro automático, en ambos casos  el programa pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test manual para el programa de llenado por teclado"
                        figIndex="3"
                        img={`/files/lab4/tests/FILL.png`}
                        imgClass="img__test"
                    />

                    <Figure
                        title="Test automático para el programa de llenado por teclado"
                        figIndex="4"
                        img={`/files/lab4/tests/FILL_AUTO.png`}
                        imgClass="img__test"
                    />
                </GateSection>

            </Section>

            <Section id="chips" title="3. Chips">
                <p>Cada una de los chips programados para el laboratorio fueron testeadas con un <a href={`${CDN_DOMAIN}/files/HardwareSimulator.` + (getUserOS() === "windows" ? "bat" : "sh")}>Simulador de Hardware</a>. De esta manera, se garantizó el correcto funcionamiento de los mismos.</p>

                <GateSection className="section__gate" title="Memoría" id="memory">
                    <p>El chip de memoria es utilizado por la CPU para poder almacenar, acceder y procesar los datos del computador. Este chip tiene 3 entradas ( <em>in[16]</em> , <em>load</em>, <em>address[15]</em> ) y 1 salida( <em>out[16]</em> ).</p>

                    <p>En la computadora se encuentran dos memorias, una que va a almacenar los datos y la otra memoria será la encargada de almacenar las instrucciones, estas memorias consisten en 32k registros de 16 bits.</p>
                    {/* <Figure
                        title='Esquema de referencia para el chip "Half Adder"'
                        figIndex="1"
                        img={HALFADDER}
                        imgStyle={{ height: "160px" }}
                        src="https://es.m.wikipedia.org/wiki/Archivo:Half_Adder.svg"
                    /> */}
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Memory.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip HalfAdder"
                        figIndex="2"
                        img={`/files/lab4/tests/MEMORY.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Unidad Central de Proceso (CPU)" id="cpu">
                    <p>Para construir el “half adder” se hace uso de dos compuertas, una compuerta XOR que recibe dos entradas (<em>A</em> y <em>B</em>) y tiene como salida la suma <em>S</em>, y una compuerta AND que recibe estas mismas dos entradas pero como salida tiene el bit de carga <em>C</em>. </p>
                    {/* <Figure
                        title='Esquema de referencia para el chip "Half Adder"'
                        figIndex="1"
                        img={HALFADDER}
                        imgStyle={{ height: "160px" }}
                        src="https://es.m.wikipedia.org/wiki/Archivo:Half_Adder.svg"
                    /> */}
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/CPU.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip CPU"
                        figIndex="2"
                        img={`/files/lab4/tests/CPU.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Computador" id="computer">
                    <p>Para construir el “half adder” se hace uso de dos compuertas, una compuerta XOR que recibe dos entradas (<em>A</em> y <em>B</em>) y tiene como salida la suma <em>S</em>, y una compuerta AND que recibe estas mismas dos entradas pero como salida tiene el bit de carga <em>C</em>. </p>
                    {/* <Figure
                        title='Esquema de referencia para el chip "Half Adder"'
                        figIndex="1"
                        img={HALFADDER}
                        imgStyle={{ height: "160px" }}
                        src="https://es.m.wikipedia.org/wiki/Archivo:Half_Adder.svg"
                    /> */}
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Computer.hdl`} />
                    <p>Utilizando el simulador de Hardware, se realizaron tres tests para el computador, un test realizando la operación de adición, otro para la operación <strong>max</strong> y un último de dibujado de un rectangulo en pantalla. En todos los casos, el computador pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test de adición para el computador"
                        figIndex="2"
                        img={`/files/lab4/tests/COMPUTER_ADD.png`}
                        imgClass="img__test"
                    />
                    <Figure
                        title="Test de operación max para el computador"
                        figIndex="2"
                        img={`/files/lab4/tests/COMPUTER_MAX.png`}
                        imgClass="img__test"
                    />
                    <Figure
                        title="Test de dibujado en pantalla para el computador"
                        figIndex="2"
                        img={`/files/lab4/tests/COMPUTER_RECT.png`}
                        imgClass="img__test"
                    />
                </GateSection>

            </Section>

            <Section id="files" title="4. Archivos">

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

export default Lab3;