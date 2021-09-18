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
                displayName: "Memoría"
            },
            {
                targetId: "cpu",
                displayName: "Unidad Central de Proceso (CPU)"
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
        },
        {
            srcName: "Evaluación de Rendimiento de Sistemas Computacionales. (2020, noviembre). [Artículo]",
            srcLink: "https://archourlives.blogspot.com/2020/11/evaluacion-de-rendimiento-de-sistemas.html",
        }
    ]
}

export const Lab4: React.FC = () => {
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
                    <p>Para este cuarto laboratorio, desarrollaremos el <a href="https://www.nand2tetris.org/project04" title="ir al proyecto">proyecto 4</a> y <a href="https://www.nand2tetris.org/project05" title="ir al proyecto">proyecto 5</a> llamado "Programación en Lenguaje de Máquina" y "Arquitectura de Computador" respectivamente. Para el proyecto 4 el objetivo es que el estudiante se familiarice con los lenguajes de bajo nivel y mediante la ayuda de la herramienta assembler aprecie la traducción que se hace desde el lenguaje simbólico (entendible por humanos) al lenguaje de máquina (código binario entendible por maquinas). Adicionalmente, se tiene una herramienta para visualizar el almacenamiento en memoria llamada "CPU emulator" donde se visualiza la manera en que son almacenados los datos.</p>

                    <p>
                        Para el proyecto 5 el objetivo general es emplear lo aprendido en el proyecto anterior y construir una computadora llamada "Hack". Para lo anterior se requiere un buen entendimiento de como funcionan las computadoras a bajo nivel (lenguaje de máquina y el hardware subyacente) para poder ensamblar dicho computador con lo que se ha programado hasta este punto. Además, se utilizarán los chips que se implementaron en proyectos anteriores como (AND, OR, NOT,  MUX, ALU y demás) para programar los componentes faltantes (CPU y MEMORY). Dicha computadora tendrá la capacidad de ejecutar los programas escritos en lenguaje de máquina e inclusive dibujar rectangulos en pantalla.
                    </p>

                </LabAnswer>
            </Section>

            <Section id="chips" title="2. Lenguaje de Máquina">
                <p>Tanto el programa de multiplicación como el de llenado mediante teclado fueron testeados utilizando un <a href={`${CDN_DOMAIN}/files/CPUSimulator.` + (getUserOS() === "windows" ? "bat" : "sh")}>Simulador de CPU</a>. De esta manera, se garantizó el correcto funcionamiento de los mismos.</p>

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
                <p>Cada una de los chips programados para el proyecto 5 de nand2tetris fueron testeados con un <a href={`${CDN_DOMAIN}/files/HardwareSimulator.` + (getUserOS() === "windows" ? "bat" : "sh")}>Simulador de Hardware</a>. De esta manera, se garantizó el correcto funcionamiento de los mismos.</p>

                <GateSection className="section__gate" title="Memoría" id="memory">
                    <p>El chip de memoria es utilizado por la <a href="#CPU" title="ir al chip">CPU</a> para poder almacenar, acceder y procesar los datos del computador. Para objetivos del proyecto, se utilizarán dos memorias, una para almacenar los datos y la otra memoria almacenará tanto datos como instrucciones.</p>

                    <p>Este chip requiere dos piezas de información: los datos y el destino. El destino de los datos puede ser la RAM o la pantalla, por lo que se emplea un <a href="/labs/2#dmux4way" title="Ir al chip">DMUX4WAY</a> para procesarlo.</p>
                    <Figure
                        title='Componentes con acceso a la memoría'
                        figIndex="5"
                        img={`/files/lab4/MEMORY.png`}
                        imgStyle={{ height: "300px" }}
                        src="https://drive.google.com/file/d/1nEptWuRpFF9zmqlKYq6s1UfDB_dd16vx/view"
                    />
                    <p>La memoria funciona de la siguiente manera: </p>
                    <ol>
                        <li>si <em>load = 1</em>, <em>in[16]</em> es guardado en la dirección definida por <em>address[15]</em> y la salida muestra dicho valor.</li>
                        <li>si <em>load = 0</em>, solo se muestra como salida el valor que se almacene en el registro que se encuentra en la dirección definida por <em>address[15]</em>.</li>
                    </ol>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Memory.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip HalfAdder"
                        figIndex="6"
                        img={`/files/lab4/tests/MEMORY.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Unidad Central de Proceso (CPU)" id="cpu">
                    <p>Esta pieza es fundamental en la arquitectura de una computadora, es la encargada de controlar la ejecución de las operaciones. Para que una CPU tenga la capacidad de poder llevar acabo  sus operaciones, esta se basa en tres dispositivos de hardware: </p>
                    <ul>
                        <li><a href="/labs/3#ALU" title="ir al chip">Unidad Aritmética Lógica (ALU)</a></li>
                        <li><a href="/labs/3#register" title="ir al chip">Registros</a></li>
                        <li>Unidad de Control</li>
                    </ul>
                    <p>En cuanto a la implementación, con base en el diagrama de la <strong>Fig. 7.</strong> se implementó una CPU de 16-bit. Esta consta de dos módulos de memoria, uno que será usado para los datos y el faltante será usado para las instrucciones --la memoria de instrucciones será solo de lectura (ROM). además, para el correcto funcionamiento interno de esta, se cuenta con tres registros D,A Y PC.</p>
                    <Figure
                        title='Esquema de referencia para el CPU'
                        figIndex="7"
                        img={`/files/lab4/CPU.jpeg`}
                        imgStyle={{ height: "500px" }}
                        src="https://drive.google.com/file/d/1nEptWuRpFF9zmqlKYq6s1UfDB_dd16vx/view"
                    />
                    <p>El registro D solo almacenará datos; El registro A será el encargado de almacenar datos y direcciones de los dos módulos de memoria. Las operaciones que la CPU va a realizar son de dos tipos, para poder acceder a palabras en cualquiera de las dos memorias o una operación lógica llevada a finalidad por la <a href="/labs/3#ALU" title="ir al chip">ALU</a>. Estas instrucciones tendrán una cantidad de bits reservados para la condición de salto, la cual es opcional, y determinará la siguiente instrucción que se debe ejecutar. Si un salto se realiza en el registro, PC toma el valor de dirección señalado en el registro A, de lo contrario PC se incrementa en uno.</p>
                    <p>El código para el chip se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/CPU.hdl`} />
                    <p>Utilizando el simulador de Hardware, se testeó el chip y pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test para chip CPU"
                        figIndex="8"
                        img={`/files/lab4/tests/CPU.png`}
                        imgClass="img__test"
                    />
                </GateSection>

                <GateSection className="section__gate" title="Computador" id="computer">
                    <p>El computador se desarrolló utilizando una <a href="#CPU" title="ir al chip">CPU</a>, una memoria de datos y una memoria de instrucciones  llamada ROM32k, tal y como se muestra en <strong>Fig. 9.</strong>. Por un lado, el chip ROM32k (nativo de nand2tetris) recibe como entrada <em>address</em> (dirección), y devuelve una <em>instruction</em> (instrucción) la cual hará parte de una de las entradas de la CPU. Esta ultima tiene como entradas <em>instruction</em>, <em>inM</em> ( la salida de la memoría) y <em>reset</em>, y sus salidas corresponden a <em>writeM</em>, <em>outM</em>, <em>addressM</em>, <em>pc</em> la cual sirve de entrada para la ROM32K. </p>

                    <p>Por otro lado, el chip <a href="#memory" title="ir al chip">MEMORY</a> recibe como entradas <em>outCPU</em>, <em>writeM</em> (si debe cargar o sobreescribir), <em>addressM</em> (dirección en memoria) y su salida es inM, la cual es una entrada de la CPU.</p>
                    <Figure
                        title='Esquema de referencia para el chip "Half Adder"'
                        figIndex="9"
                        img={`/files/lab4/COMPUTER.png`}
                        imgStyle={{ height: "350px" }}
                        src="https://drive.google.com/file/d/1nEptWuRpFF9zmqlKYq6s1UfDB_dd16vx/view"
                    />

                    <p>Con todo lo anterior, se tiene una computadora de 16-bit funcional capaz de: Almacenar valores en memoría (<a href="#memory" title="ir al chip">MEMORY</a>); Cargar instrucciones de una memoria de solo lectura (ROM32K); Realizar operaciones lógicas y aritméticas, recibir entradas del teclado e incluso manipular las intensidades de los pixeles en pantalla (<a href="#CPU" title="ir al chip">CPU</a>).</p>

                    <p>El código para el computador se presenta a continuación: </p>
                    <CodeBlock filePath={`${FILES_PATH}/Computer.hdl`} />
                    <p>Utilizando el simulador de Hardware, se realizaron tres tests para el computador, un test realizando la operación de adición, otro para la operación <strong>max</strong> y un último de dibujado de un rectangulo en pantalla. En todos los casos, el computador pasó las pruebas sin ningún problema. </p>
                    <Figure
                        title="Test de adición para el computador"
                        figIndex="10"
                        img={`/files/lab4/tests/COMPUTER_ADD.png`}
                        imgClass="img__test"
                    />
                    <Figure
                        title="Test de operación max para el computador"
                        figIndex="11"
                        img={`/files/lab4/tests/COMPUTER_MAX.png`}
                        imgClass="img__test"
                    />
                    <Figure
                        title="Test de dibujado en pantalla para el computador"
                        figIndex="12"
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

export default Lab4;