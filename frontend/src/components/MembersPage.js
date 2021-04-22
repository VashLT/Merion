import React from "react";
import members from "../members";

function MembersPage() {
    return (
        <div id="membersPage">
            <div id="membersList">
                <div className="list-group align-items-center">
                    {members.map((element, index) => getMemberHTML(element, index))}
                </div>
            </div>
        </div >
    );
}

function getMemberHTML(element, index) {
    return (
        <div className="c-member" style={{ marginBottom: "20px" }} key={index}>
            <div className="member-image">
                <img src={element.image} />
            </div>
            <div className="member-content">
                <div className="header">
                    <p>{element.name}</p>
                </div>
                <div className="bio">
                    <p className="text-left">{element.content}</p>
                    <a className="btn btn-primary" href={element.github} target="_blank" role="button">Github</a>
                </div>
            </div>
        </div>
    );
}

export default MembersPage;