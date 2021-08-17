import React from 'react';
import labs from '../../data/labs';

const mapQuestion = (question: string, index: number) => {
    return (
        <a href={"#Qt" + index} className="list-group-item list-group-item-action tof-item">
            {question}
        </a>
    )
}

export const Lab2: React.FC = () => {
    const lab = labs[1];
    return (
        <div className="lab" id="labSheet">
            <div className="lab-header">
                <h3>{lab.header}: <br /> {lab.title}</h3>
            </div>
            <div className="lab-content">
                <section id="TOC">
                    <h4>Contenido del laboratorio</h4>
                    <div className="hbar"></div>
                    <div className="list-group list-group-flush mb-4">
                        {lab.raw_questions.map((question, index) => mapQuestion(question, index + 1))}
                        <a href="#files" className="list-group-item list-group-item-action tof-item" >Archivos de la practica</a>
                        <a href="#biblio" className="list-group-item list-group-item-action tof-item" >Bibliografia</a>
                    </div>

                </section>

                <section id="Qt">
                    <h4>Preguntas</h4>
                    <div className="hbar"></div>

                    <h4 id="Qt1">
                        {lab.raw_questions[0]}
                    </h4>
                    <p className="mb-4">
                        Para este segundo laboratorio, desarrollaremos el proyecto 1 llamado Lógica Booleana propuesto por Nand to Tetris. Nuestro objetivo en el desarrollo del segundo laboratorio es acercarnos a la construcción de las compuertas lógicas principales descritas en el mismo, el cual nos introduce a la metodología de trabajo del curso y nos permite acceder a los conocimientos necesarios para desarrollar las actividades programadas en este.

                    </p>

                    <p className="mb-4">
                        En primera instancia, debemos revisar los temas de lógica Booleana, síntesis de funciones booleanas, compuertas lógicas y luego enfocarnos en el lenguaje de descripción de hardware (HDL) adentrándonos en su funcionamiento, entorno y características ya que es el lenguaje  con el cual llevaremos a cabo la práctica.

                    </p>

                    <p className="mb-4">
                        Las compuertas, se construyeron gradualmente desde la más sencilla (partiendo de la NAND) hasta la más compleja (DMux8Way) dando como resultado un conjunto de chips básicos, cabe decir que la compuerta principal es la Nand, puesto que con ella se crearon las compuertas básicas (And, Or, Not) que dieron lugar a desarrollar las los chips más complejos.
                    </p>
                    <p className="mb-4">

                        Nuestro principal soporte para desarrollarlas fue basarnos en el diagrama de cada compuerta lógica, no obstante, para el desarrollo de una de las compuertas, se hizo necesario el uso de internet, y a partir de la lógica utilizada en esta, se lograron desarrollar varias compuertas más.

                    </p>

                </section>

                <section id="files">
                    <h4>Archivos</h4>
                    <div className="hbar"></div>

                    <p className="mb-3">
                        A continuación se adjunta el codigo en HDL (Hardware Descriptive Language)
                        en el que se programaron los chips.
                    </p>

                    <div className="c-files">
                        <div className="btn-group">
                            <a className="btn btn-merion btn-lg" type="button" href={lab.zip}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-files" viewBox="0 0 16 16">
                                    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                                </svg>
                                &nbsp; Archivos
                            </a>
                            <button type="button" className="btn btn-lg btn-merion dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">
                                {lab.files!.map((file) => <LabFile src={file} />)}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="biblio">
                    <h4>Bibliografia</h4>
                    <div className="hbar"></div>
                    <p className="mb-1"><strong>1.</strong>&nbsp;
                        Nand2tetris
                        <a target="_blank" rel="noreferrer" href="https://google.com" >
                            Libro
                        </a>
                    </p>
                </section>
            </div >
        </div >
    )
}

const LabFile: React.FC<LabFileProps> = ({ src }) => {
    var fileName = src.split("/").slice(-1);
    console.log(fileName);
    return (
        <a className="btn-file dropdown-item" href={src} role="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-code" viewBox="0 0 16 16">
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
            </svg>
            &nbsp; {fileName}
        </a>
    );
}

export default Lab2;