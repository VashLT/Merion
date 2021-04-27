import React from "react";
import labs from "../labs"

function LabsPage() {

    return (
        <div id="labsPage">
            <div id="labsList">
                <div className="w-100" id="accordion">
                    {labs.map((lab, index) => getLabPreviewHTML(lab, index))}
                </div>
            </div>
        </div>
    );
}

function getLabPreviewHTML(lab, index) {
    const loadQuestion = (question, index) => {
        return <li className="list-group-item darky text-left">{question}</li>
    }

    return (
        <div className="card" id="labItem">
            <div className="card-header d-flex flex-row justify-content-between clicky align-items-center" id={'h' + index} onClick={() => document.getElementById('t' + index).click()}>
                <h5 style={{ textAlign: "left" }} id={'t' + index} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {lab.title}
                </h5>
                <a className="btn btn-primary" href={'/labs/' + lab.id} role="button" target="_blank">READ</a>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby={'h' + index} data-parent="#accordion">
                <div className="card card-body darky">
                    <ul className="list-group list-group-flush">
                        {<lab.questions />}
                        {/* {lab.questions.map((lab, index) => loadQuestion(lab, index))} */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LabsPage;