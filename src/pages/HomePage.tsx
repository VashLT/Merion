import React from 'react';

import joseImg from '../static/images/member_jose.jpg';
import javierImg from '../static/images/member_javier.jpg';
import gabrielImg from '../static/images/member_gabriel.jpg';
import cristianImg from '../static/images/member_cristian.jpg';
import nicolasImg from '../static/images/member_nicolas.jpg';

const members: ImemberCard[] = [
    {
        srcImg: joseImg,
        displayName: "Jose Silva"
    },
    {
        srcImg: javierImg,
        displayName: "Javier Tarazona"
    },
    {
        srcImg: gabrielImg,
        displayName: "Gabriel Vega"
    },
    {
        srcImg: cristianImg,
        displayName: "Cristian Rojas"
    },
    {
        srcImg: nicolasImg,
        displayName: "Nicolas Velasquez"
    }
]

export const HomePage: React.FC = () => {
    return (
        <div id="homePage">
            <div className="c-home" style={{ width: "60%" }}>
                <div className="d-flex flex-column w-80 align-items-center justify-content-center mb-5">
                    <h1 className="typo-h1--merion">Bienvenido a Merion</h1>
                    <p className="typo-p--merion" style={{ textAlign: "justify" }}>
                        <strong style={{ color: "#4f6c9bff" }}>Merion</strong> es una pagina web que contiene los laboratorios correspondientes a la asignatura
                        de Arquitectura de Computadores. El nombre proviene de la unión entre Merlin y Orion
                    </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <h2 style={{ color: "#ecca24ff", marginBottom: "30px" }}>Contribuidores</h2>
                    <div className="d-flex flex-row justify-content-center w-100 mw-100">
                        {members.map(member => <MemberCard {...member} redirectUrl="/members/" />)}
                    </div>
                </div>
            </div>
        </div >
    );
}

const MemberCard: React.FC<MemberCardProps> = ({ redirectUrl, displayName, srcImg }) => {
    return (
        <div className="card home-img-c" onClick={() => window.location.href = redirectUrl}>
            <img className="card-img-top home-img" src={srcImg} alt="Card cap" />
            <div className="card-body card-transparent">
                <h5 className="card-title">{displayName}</h5>
            </div>
        </div>
    )
}

export default HomePage;