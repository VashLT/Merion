import React from "react";
import labs from "../labs"

function LabPage(props) {
    if (!("id" in props)) {
        return <h1>id not valid</h1>;
    }
    if (labs['id'] !== props.id) {
        return <h1>No lab with given id ()</h1>;
    }
    return (
        <div className="lab" id="labPage">
            {getRenderedComponent(props.id)}
        </div>
    )
}

function getRenderedComponent(id) {
    var content;
    for (i = 0; i < labs.length; i++) {
        if (labs[i].id === id) {
            content = labs[i].content;
        }
    }
    return content;

}

export default LabPage;