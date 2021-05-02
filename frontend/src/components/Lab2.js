import React from "react";
import labs from "../labs.js";

function Lab2() {
    const lab = labs[1];
    function mapQuestionToLink(question, index) {
        return <a href={"#Qt" + index} className="list-group-item list-group-item-action tof-item">{question}</a>
    }
    function mapFileToHTML(file) {
        var fileName = file.split("/").slice(-1);
        console.log(fileName);
        return (
            <a class="btn-file dropdown-item" href={file} role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-code" viewBox="0 0 16 16">
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                </svg>
                &nbsp; {fileName}
            </a>
        );
    }
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
                        {lab.raw_questions.map((question, index) => mapQuestionToLink(question, index + 1))}
                        <a href="#video" className="list-group-item list-group-item-action tof-item" >Video del grupo</a>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h4 id="Qt2">
                        {lab.raw_questions[1]}
                    </h4>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </section>

                <section id="video">
                    <h4>Video</h4>
                    <div className="hbar"></div>
                    <div className="embed-responsive embed-responsive-16by9 mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QN6vZLFRKYo" title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </section>

                <section id="files">
                    <h4>Archivos</h4>
                    <div className="hbar"></div>

                    <p className="mb-3">
                        A continuación se adjunta el codigo en HDL (Hardware Descriptive Language)
                        en el que se programaron los chips.
                    </p>

                    <div className="c-files">
                        <div class="btn-group">
                            <a class="btn btn-merion btn-lg" type="button" href={lab.zip}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                                    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                                </svg>
                                &nbsp; Archivos
                            </a>
                            <button type="button" class="btn btn-lg btn-merion dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                {lab.files.map((file) => mapFileToHTML(file))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="biblio">
                    <h4>Bibliografia</h4>
                    <div className="hbar"></div>
                    <p className="mb-1"><strong>1.</strong>&nbsp;
                            Nand2tetris
                            <a target="_blank" href="https://google.com" >
                            Libro
                            </a>
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Lab2;