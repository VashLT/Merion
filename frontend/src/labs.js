import React from "react";
import Lab1 from './components/Lab1';

let labs = [
    {
        id: 1,
        lab: "Laboratorio 1",
        title: "Familiarizándose con las prácticas",
        questions: () => {
            const prefix = "/labs/1";
            return (
                <div className="card card-body darky">
                    <ul className="list-group list-group-flush">
                        <a className="list-group-item darky text-left" href={prefix + "#Qt1"} target="_blank">
                            1. ¿Qué es lo más trascendental para usted en esta charla? (Responda en menos de 12 lineas, tamaño de letra 12 ptx)
                        </a>
                        <a className="list-group-item darky text-left" href={prefix + "#Qt2"} target="_blank">
                            2. ¿Qué situaciones "cotidianas" encuentra hoy en día en las máquinas de cómputo que prevalecen desde los primeros días de esas primeras máquinas de computación?
                        </a>
                        <a className="list-group-item darky text-left" href={prefix + "#Qt3"} target="_blank">
                            3. Compare las principales características de su teléfono celular o del PC que tiene junto a usted al momento de hacer este informe (capacidad de memoria, almacenamiento, consumo energético, capacidad de procesamiento e incluso complejidad), con las de esas máquinas pioneras. ¿Cuales han sido los cambios más dramáticos?.
                        </a>
                        <a className="list-group-item darky text-left" href={prefix + "#Qt4"} target="_blank">
                            4. Hoy en día se habla mucho de la cuarta revolución industrial y la transformación digital. ¿Qué es cada una de ellas? . Suponiendo que se gradúa mañana ¿Tiene claro (o no) como hacer parte de esas transformaciones? .Justifique su respuesta.
                        </a>
                        <a className="list-group-item darky text-left" href={prefix + "#Qt5"} target="_blank">
                            5. En este momento hay una discusión entre expertos que afirman que actualmente la pandemia aceleró esa transformación digital y otros que dicen que ha sido todo lo contrario. Como grupo, ¿Cuál es su punto de vista?.
                        </a>
                        <a className="list-group-item darky text-left" href={prefix + "#Qt6"} target="_blank">
                            6. Al ver el recorrido histórico de la arquitectura y organización de computadores (ver las diapositivas respectivas y la bibliografía) ¿Cual creen, para ustedes como grupo, que ha sido el aporte más significante que ha influido en la computación actual? Justifique su respuesta.
                        </a>
                    </ul>
                </div>
            );
        },
        content: <Lab1 />,
        date: "16 may 2021",
    }
];

export default labs;