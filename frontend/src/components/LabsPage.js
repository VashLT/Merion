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
    index++; // makes index starts at 1
    return (
        <div className="card lab-item">
            <div className="card-header d-flex flex-row justify-content-between clicky align-items-center" id={'h' + index} onClick={() => document.getElementById('t' + index).click()}>
                <h5 style={{ textAlign: "left" }} id={'t' + index} data-toggle="collapse" data-target={"#c" + index} aria-expanded="true" aria-controls={"c" + index} >
                    {lab.header}: {lab.title}
                </h5>
                <a className="btn btn-primary" href={'/labs/' + lab.id} role="button">READ</a>
            </div>
            <div id={"c" + index} className="collapse" aria-labelledby={'h' + index} data-parent="#accordion">
                <div className="card card-body darky">
                    <ul className="list-group list-group-flush">
                        {<lab.questions />}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LabsPage;