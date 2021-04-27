import React from 'react';

export default function HomePage() {
    const staticRoot = "../../static/images/";

    return (
        <div id="homePage">
            <div className="d-flex flex-column w-80 align-items-center justify-content-center center-full">
                <div className="d-flex flex-column w-80 align-items-center justify-content-center mb-5">
                    <h1 id="main-title">Bienvenido a Merion</h1>
                    <p style={{ fontSize: "20px", textAlign: "justify" }}>
                        <strong style={{ color: "#4f6c9bff" }}>Merion</strong> es una pagina web que contiene los laboratorios correspondientes a la asignatura
                        de Arquitectura de Computadores. El nombre proviene de la unión entre Merlin y Orion
                    </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <h2 style={{ color: "#ecca24ff", marginBottom: "30px" }}>Contribuidores</h2>
                    <div className="d-flex flex-row justify-content-center w-100 mw-100">
                        <div className="card home-img-c">
                            <img className="card-img-top home-img" src={staticRoot + "member_jose.jpg"} alt="Card image cap" onClick={() => { document.getElementById('jose').click() }} />
                            <div className="card-body card-transparent">
                                <h5 className="card-title">Jose Silva<a id="jose" href="/members/"></a></h5>
                            </div>
                        </div>
                        <div className="card home-img-c">
                            <img className="card-img-top home-img" src={staticRoot + "member_javier.jpg"} alt="Card image cap" onClick={() => { document.getElementById('javier').click() }} />
                            <div className="card-body card-transparent">
                                <h5 className="card-title">Javier Tarazona<a id="javier" href="/members/"></a></h5>
                            </div>
                        </div>
                        <div className="card home-img-c">
                            <img className="card-img-top home-img" src={staticRoot + "member_gabriel.jpg"} alt="Card image cap" onClick={() => { document.getElementById('gabriel').click() }} />
                            <div className="card-body card-transparent">
                                <h5 className="card-title">Gabriel Vega<a id="gabriel" href="/members/"></a></h5>
                            </div>
                        </div>
                        <div className="card home-img-c">
                            <img className="card-img-top home-img" src={staticRoot + "member_cristian.jpg"} alt="Card image cap" onClick={() => { document.getElementById('cristian').click() }} />
                            <div className="card-body card-transparent">
                                <h5 className="card-title">Cristian Rojas<a id="cristian" href="/members/"></a></h5>
                            </div>
                        </div>
                        <div className="card home-img-c">
                            <img className="card-img-top home-img" src={staticRoot + "member_nicolas.jpg"} alt="Card image cap" onClick={() => { document.getElementById('nicolas').click() }} />
                            <div className="card-body card-transparent">
                                <h5 className="card-title">Nicolas Velasquez<a id="nicolas" href="/members/"></a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}