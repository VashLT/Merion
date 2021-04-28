import React from "react";
import labs from "../labs.js";

function Lab2() {
    const lab = labs[1];
    return (
        <div className="lab" id="labSheet">
            <div className="d-flex flex-row justify-content-start mb-4">
                <h3 className="text-center">{lab.header}: <br /> {lab.title}</h3>
            </div>
        </div>
    )
}

export default Lab2;