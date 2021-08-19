import React from 'react';
import labs from '../../data/labs';

import TableOfContent from '../TableOfContent';
import Section from '../Section';
import LabAnswer from './LabAnswer';
import CodeBlock from '../CodeBlock';

import andDiagram from '../../static/images/lab2/AND.png'

const sections: Isection[] = [
    {
        href: "#gates",
        displayName: "Compuertas Lógicas"
    },
    {
        href: "#biblio",
        displayName: "Bibliografia"
    }
]

export const Lab2: React.FC = () => {
    const lab = labs[1];
    return (
        <div className="lab" id="labSheet">
            <div className="lab-header">
                <h3>{lab.header}: <br /> {lab.title}</h3>
            </div>
            <div className="lab-content">
                <TableOfContent
                    questions={lab.raw_questions}
                    sections={sections}
                />

                <Section id="Qt" title="Preguntas">
                    <LabAnswer
                        question={lab.raw_questions[0]}
                        text={[
                            "Para este segundo laboratorio, desarrollaremos el proyecto 1 llamado Lógica Booleana propuesto por Nand to Tetris. Nuestro objetivo en el desarrollo del segundo laboratorio es acercarnos a la construcción de las compuertas lógicas principales descritas en el mismo, el cual nos introduce a la metodología de trabajo del curso y nos permite acceder a los conocimientos necesarios para desarrollar las actividades programadas en este.",
                            "En primera instancia, debemos revisar los temas de lógica Booleana, síntesis de funciones booleanas, compuertas lógicas y luego enfocarnos en el lenguaje de descripción de hardware (HDL) adentrándonos en su funcionamiento, entorno y características ya que es el lenguaje  con el cual llevaremos a cabo la práctica.",
                            "Las compuertas, se construyeron gradualmente desde la más sencilla (partiendo de la NAND) hasta la más compleja (DMux8Way) dando como resultado un conjunto de chips básicos, cabe decir que la compuerta principal es la Nand, puesto que con ella se crearon las compuertas básicas (And, Or, Not) que dieron lugar a desarrollar las los chips más complejos.",
                            "Nuestro principal soporte para desarrollarlas fue basarnos en el diagrama de cada compuerta lógica, no obstante, para el desarrollo de una de las compuertas, se hizo necesario el uso de internet, y a partir de la lógica utilizada en esta, se lograron desarrollar varias compuertas más."
                        ]}
                    />
                </Section>


                <Section id="gates" title="Compuertas Lógicas">
                    <GateSection title="And">
                        <p>La compuerta AND se construyó a partir de 2 compuertas NAND conectadas entre sí.</p>
                        <GateDiagram
                            title="Compuerta AND construida con NANDs"
                            img={andDiagram}
                            src="https://qph.fs.quoracdn.net/main-qimg-6664d9b8e96801605a8c257e64477ded.webp"
                        />
                        <p>El código para la compuerta se presenta a continuación: </p>
                        <CodeBlock filePath="/files/lab2/And.hdl" />
                    </GateSection>
                </Section>

                <Section id="files" title="Archivos">

                    <p className="mb-3">
                        A continuación se adjuntan los archivos HDL (Hardware Descriptive Language) de cada uno de los chips.
                    </p>

                    <div className="c-files">
                        <DownloadFilesButton files={lab.files!} zipSrc={lab.zip!} />
                    </div>
                </Section>

                <Section id="biblio" title="Bibliografia">
                    <p className="mb-1"><strong>1.</strong>&nbsp;
                        Nand2tetris&nbsp;
                        <a target="_blank" rel="noreferrer" href="https://google.com" >
                            Libro
                        </a>
                        .
                    </p>
                </Section>
            </div >
        </div >
    )
}

const LabFile: React.FC<LabFileProps> = ({ src }) => {
    var fileName = src.split("/").slice(-1);

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

const GateSection: React.FC<GateSectionProps> = ({ title, children }) => {
    return (
        <section>
            <h4>{title}</h4>
            {children}
        </section>
    )
}

const GateDiagram: React.FC<GateDiagramProps> = ({ img, src, title }) => {
    return (
        <figure>
            <img src={img} alt={title} />
            <p>{title}. <a href={src} title="Fuente de la imagen">Fuente</a></p>
        </figure>
    );
}


const DownloadFilesButton: React.FC<DownloadFilesButtonProps> = ({ files, zipSrc }) => {
    return (
        <div className="btn-group">
            <a
                className="btn btn-merion btn-lg"
                type="button"
                target="_blank"
                href={zipSrc}
                rel="noopener noreferrer"
                download
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-files" viewBox="0 0 16 16">
                    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                </svg>
                &nbsp; Archivos
            </a>
            <button type="button" className="btn btn-lg btn-merion dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
                {files!.map((file, i) => <LabFile key={i} src={file} />)}
            </div>
        </div>
    );
}

export default Lab2;