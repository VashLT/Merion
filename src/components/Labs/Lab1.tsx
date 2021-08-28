import React from 'react';
import labs from '../../data/labs';

import Lab from "./Lab";

const LAB = labs[0];

const sections: ITOFItem[] = [
    {
        targetId: "questions",
        displayName: "1. Preguntas",
        subSections: LAB.raw_questions.map((question, index) => {
            return { targetId: `qt${index + 1}`, displayName: question }
        }
        )
    },
    {
        targetId: "video",
        displayName: "2. Vídeo"
    },
    {
        targetId: "biblio",
        displayName: "3. Bibliografía"
    }
]

const biblio: Ibiblio = {
    title: "",
    items: [
        {
            srcName: `BBC NEWS. (2016, 12 octubre),Valeria Perasso.BBC Mundo. Qué es la cuarta
                        revolución industrial (y por qué debería preocuparnos).`,
            srcLink: "https://www.bbc.com/mundo/noticias-37631834",
            srcLinkName: "Fuente"
        },
        {
            srcName: `LATAM UNIVERSITY, Business, Transformacion digital. ¿Qué es la
                        transformación digital?.`,
            srcLink: "https://latam.university/que-es-la-transformacion-digital/?gclid=Cj0KCQjw6-SDBhCMARIsAGbI7UiOPyNkGOSmJLqw19s25GkkhaL0oj0x0Xxgf5oXBf8b3QZ142XCK1MaAjuTEALw_wcB",
            srcLinkName: "Libro"
        },
        {
            srcName: `UNESCO. (2020, 10 27). Investment in education for recovery. Education is not a cost, it’s investment for recovery`,
            srcLink: "https://en.unesco.org/news/education-not-cost-its-investment-recovery",
            srcLinkName: "Fuente"
        },
        {
            srcName: `PDP-11 de Digital Equipment Corp. (2010, 29 noviembre). Historia de la Informática.`,
            srcLink: "https://histinf.blogs.upv.es/2010/11/29/pdp-11-de-digital-equipment-corp/",
            srcLinkName: "Fuente"
        },
        {
            srcName: `Jaimes, C. (s. f.). Computer History. Wiki Supercomputación y Cálculo Científico. Recuperado 16 de abril de 2021`,
            srcLink: "http://wiki.sc3.uis.edu.co/images/d/dd/CompHist1-16.pdf",
            srcLinkName: "Fuente"
        },
    ]
}

export const Lab1: React.FC = () => {
    return (
        <Lab
            data={LAB}
            tableOfContent={sections}
            biblio={biblio}
        >
            <section id="questions">

                <h4>Preguntas</h4>
                <div className="hbar"></div>

                <h4 id="qt1">
                    {LAB.raw_questions[0]}
                </h4>
                <p className="mb-4">
                    Lo más trascendental que se pudo notar de la charla es la capacidad de
                    invención del ser humano y como el trabajar con otras personas que tienen
                    el mismo objetivo se pueden lograr cosas increíbles, como fue el nacimiento
                    de las primeras computadoras, que para las personas de hoy en día lo consideran
                    simplemente un dispositivo electrónico más. También rescatar el impacto que
                    tiene hoy en día estas máquinas, que fueron propuesta ya hace varios años y
                    que al día de hoy no podemos imaginar nuestras vidas sin ellas, las cuales son
                    puertas para conectarnos con el mundo.
                </p>
                <h4 id="qt2">
                    {LAB.raw_questions[1]}
                </h4>
                <p>
                    Más que una situación cotidiana el paralelismo entre las computadoras antiguas y
                    las actuales se da en la lógica funcional de ambas, a pesar del cambio y el
                    avance en sus componentes la aritmética y la lógica binaria sigue siendo la base
                    para el funcionamiento interno de estas. Por otro lado, las funciones que sus
                    componentes desempeñan siguen siendo las mismas, como las de las unidades de
                    almacenamiento y procesamiento de datos.
                </p>

                <p className="mb-4">
                    Como situación cotidiana que poseen los computadores actuales y antiguos es que
                    para su correcto funcionamiento se tiene que ser demasiado específico y si bien
                    en la actualidad los avances tecnológicos permiten una comunicación más fluida
                    entre  usuario ordenador aún no se llega al punto donde el ordenador acate y
                    resuelva correctamente todas las instrucciones que se le impongan
                </p>

                <h4 id="qt3" className="mb-2">
                    {LAB.raw_questions[2]}
                </h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Máquinas pioneras</th>
                            <th scope="col">Máquina actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Memoria</th>
                            <td>8 KBytes</td>
                            <td>16 Gb</td>
                        </tr>
                        <tr>
                            <th scope="row">Almacenamiento</th>
                            <td>64 KB - 10 MB</td>
                            <td>1 TB - 256 GB</td>
                        </tr>
                        <tr>
                            <th scope="row">Consumo Energetico</th>
                            <td></td>
                            <td>25 W</td>
                        </tr>
                        <tr>
                            <th scope="row">Capacidad de procesamiento</th>
                            <td>4.77 MHz Clock <br /> Mononucleo <br /> Arquitectura x16</td>
                            <td>2.19 GHz Clock <br /> 4 núcleos <br /> Arquitectura x64</td>
                        </tr>
                        <tr>
                            <th scope="row">Complejidad</th>
                            <td>Se necesitan decenas de personas para su construcción y programación</td>
                            <td>Los procesos de fabricación están automatizados y su programación
                                se hace en equipos más reducidos
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="mb-4">
                    Dentro de los cambios más relevantes entre los modelos iniciales de la computación y con
                    los que contamos actualmente, en primera medida nos encontramos con el más evidente: el
                    tamaño, desde las primeras computadoras que ocupaban una habitación entera, pasando por
                    los primeros ordenadores domésticos no existe un punto de comparación con el tamaño
                    actual de los mismos, así mismo, la capacidad de procesamiento que ha aumentado en el
                    orden de 10^10 veces, así cómo la capacidad de almacenamiento y la memoria volátil, siendo
                    cada vez más compacta, más eficiente en términos de escritura y lectura, y de mayor
                    capacidad
                </p>

                <h4 id="qt4">
                    {LAB.raw_questions[3]}
                </h4>
                <p>
                    La transformación digital es un proceso que conlleva a la aplicación e integración de tecnologías
                    digitales en todas las áreas y departamentos de una empresa.(LATAM UNIVERSITY).
                    Se habla de la cuarta revolución industrial a la convergencia de tecnologías digitales, físicas
                    y biológicas, la automatización mediante sistemas ciber-físicos parcial de las empresas/fábricas,
                    Muchas fábricas van a llevar su producción a una total independencia de la mano de obra humana. (BBC NEWS).
                </p>

                <p className="mb-4">
                    Partiendo de esto, en mi caso tengo que decir que sé como debo ser parte de esta nueva revolución, el
                    conocimiento sobre IoT, artificial intelligence, biotecnología va a ser trascendental, la preparación
                    en estos campos va a ser crucial para un buen establecimiento y desenvolvimiento dentro de la nueva
                    revolución industrial.
                </p>

                <h4 id="qt5">
                    {LAB.raw_questions[4]}
                </h4>
                <p>
                    Concordamos con que la pandemia COVID-19 ha acelerado la transformación
                    digital, y es sin duda un evento sin precedentes, no tan solo por la
                    cantidad de personas contagiadas y los meses que hemos estado en pandemia,
                    sino por la época en la que tuvo lugar, una época con un creciente desarrollo
                    tecnológico en donde todos estábamos empezando a experienciar el potencial de
                    la tecnología y el cómo esta puede mejorar nuestras vidas.
                </p>

                <p className="mb-4">
                    Muchas empresas y gobiernos, debido a la crisis por la pandemia,
                    invirtieron en infraestructura digital (computadores, software, redes, etc.)
                    para trabajar remotamente, en el sector educativo, por ejemplo,
                    los gobiernos de todo el planeta han invertido 91 billones en paquetes de
                    recursos e infraestructura, (UNESCO, 2020). Todo lo anterior condujo a la
                    aceleración de la transformación digital.
                </p>

                <h4 id="qt6">
                    {LAB.raw_questions[5]}
                </h4>
                <p>
                    La invención del transistor es sin duda un aporte que ha influido en el
                    desarrollo de la computación actual, ya en su época (hacia mitades del
                    siglo XX), el transistor permitió reemplazar los tubos de vacío,
                    los cuales eran bastante ineficientes energéticamente y no muy confiables.
                    A su vez, el transistor dio paso a la creación del circuito integrado hacia
                    1958, el cual permitió la reducción del tamaño y el tiempo de respuesta de
                    los computadores.
                </p>

                <p className="mb-4">
                    En la actualidad, todos los componentes electrónicos
                    como dispositivos domésticos, celulares, computadores,
                    etc. están construidos a base de chips. Adicionalmente,
                    la velocidad de los computadores ha ido evolucionando a la
                    par con la optimización de cuántos transistores pueden integrarse en un
                    chip siguiendo la ley de Moore, viéndose limitado únicamente cuando el
                    tamaño de los transistores se acerca al nivel molecular.
                </p>

            </section>

            <section id="video">
                <h4>Video</h4>
                <div className="hbar"></div>
                <div className="embed-responsive embed-responsive-16by9 mb-4">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QN6vZLFRKYo" title="YouTube video player"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </section>
        </Lab>
    )
}

export default Lab1;