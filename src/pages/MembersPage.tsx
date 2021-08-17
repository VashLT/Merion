import React from 'react';
import members from '../data/members';

import { ReactComponent as GithubLogo } from '../static/images/github_logo.svg';

export const MembersPage: React.FC = () => {
    return (
        <div id="membersPage">
            <div id="membersList">
                <div className="list-group align-items-center">
                    {members.map((member, index) => <Member {...member} index={index} />)}
                </div>
            </div>
        </div >
    );
}

const Member: React.FC<MemberProps> = ({ name, content, image, github, index }) => {
    return (
        <div className="c-member" style={{ marginBottom: "20px" }} key={'m' + index}>
            <div className="member-image">
                <img src={image} alt={name} />
            </div>
            <div className="member-content">
                <div className="header">
                    <p className="typo-h1--members">{name}</p>
                </div>
                <div className="bio">
                    <p className="typo-p--merion text-justify pb-4">{content}</p>
                    <a className="btn-github" rel="noreferrer" href={github} title={`${name}'s github`} target="_blank" role="button">
                        <GithubLogo />
                        Github profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MembersPage;