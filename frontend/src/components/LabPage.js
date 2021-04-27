import React from "react";
import labs from "../labs";

function LabPage(props) {
    console.log(props);

    if (!("id" in props)) {
        return (
            <div className="lab" id="labPage">
                <h1>Id not valid</h1>;
            </div>
        );
    }
    if (!labExists(props.id)) {
        return (
            <div className="lab" id="labPage">
                <h1>No lab with given id</h1>;
            </div>
        );
    }
    return (
        <div id="labPage">
            {getRenderedComponent(props.id)}
        </div>
    );
}

function getRenderedComponent(id) {
    var content;
    console.log(labs);
    for (let i = 0; i < labs.length; i++) {
        if (labs[i].id === id) {
            content = labs[i].content;
            break;
        }
    }
    return content;

}

function labExists(id) {
    for (let i = 0; i < labs.length; i++) {
        if (labs[i].id === id) {
            return true;
        }
    }
    return false;
}

export default LabPage;