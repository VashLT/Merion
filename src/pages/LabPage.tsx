import React, { useEffect } from 'react';
import labs from '../data/labs';
import { useParams } from "react-router-dom";

import Lab1 from '../components/Labs/Lab1';
import Lab2 from '../components/Labs/Lab2';

const labExists = (id: number) => {
    for (let i = 0; i < labs.length; i++) {
        if (labs[i].id === id) {
            return true;
        }
    }
    return false;
}

export const LabPage: React.FC = () => {
    const params: IlabUrlParams = useParams();

    const labId = parseInt(params.labId);

    useEffect(() => {
        // no id in url
        if (!window.location.href.includes('#')) return;

        const targetId = window.location.href.split('#').slice(-1)[0];
        const target = document.getElementById(targetId) as HTMLElement;

        if (!target) return;

        target.scrollIntoView();

    });

    if (!labExists(labId)) return <LabNotFound />;

    var Lab;

    switch (labId) {
        case 1:
            Lab = Lab1;
            break;
        case 2:
            Lab = Lab2;
            break;
        default:
            Lab = Lab1;
    }

    return (
        <div className="lab" id="labSheet">
            <Lab />
        </div>
    );
}

const LabNotFound: React.FC = () => {
    return (
        <div className="lab center-full" id="labPage">
            <div id="labSheet" style={{ maxWidth: "50%" }}>
                <div className="lab-header">
                    <h3>Oops ...</h3>
                    <div className="hbar"></div>
                </div>
                <div className="lab-content">
                    <h4 id="error">Pagina de error</h4>
                    <div className="hbar"></div>
                    <p className="mb-5">
                        El laboratorio que buscas todavía no está disponible, recuerda que se
                        trabajarán 6 laboratorios :).
                    </p>
                    <a className="btn btn-primary" href="/labs/" style={{ color: "white" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                        &nbsp; Labs
                    </a>
                </div>
            </div>
        </div>
    )
}


export default LabPage;