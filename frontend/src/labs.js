import React from "react";
import Lab1 from './components/Lab1';
import Lab2 from './components/Lab2';

const staticRoot = "../../static/files";

var labIndex = 0;

let labs = [
    {
        id: 1,
        header: "Laboratorio 1",
        title: "Familiarizándose con las prácticas",
        raw_questions: [
            "1. ¿Qué es lo más trascendental para usted en esta charla?",
            '2. ¿Qué situaciones "cotidianas" encuentra hoy en día en las máquinas de cómputo que prevalecen desde los primeros días de esas primeras máquinas de computación?',
            "3. Compare las principales características de su teléfono celular o del PC que tiene junto a usted al momento de hacer este informe (capacidad de memoria, almacenamiento, consumo energético, capacidad de procesamiento e incluso complejidad), con las de esas máquinas pioneras. ¿Cuales han sido los cambios más dramáticos?.",
            "4. Hoy en día se habla mucho de la cuarta revolución industrial y la transformación digital. ¿Qué es cada una de ellas? . Suponiendo que se gradúa mañana ¿Tiene claro (o no) como hacer parte de esas transformaciones?",
            "5. En este momento hay una discusión entre expertos que afirman que actualmente la pandemia aceleró esa transformación digital y otros que dicen que ha sido todo lo contrario. Como grupo, ¿Cuál es su punto de vista?.",
            "6. Al ver el recorrido histórico de la arquitectura y organización de computadores (ver las diapositivas respectivas y la bibliografía) ¿Cual creen, para ustedes como grupo, que ha sido el aporte más significante que ha influido en la computación actual?"
        ],
        content: <Lab1 />,
        date: "16 de Abril del 2021",
    },
    {
        id: 2,
        header: "Laboratorio 2",
        title: "Conociendo Nand2Tetris",
        raw_questions: [
            "¿Cuál es el objetivo de ese proyecto con sus palabras y describa que debe hacer para desarrollarlo?",
            "Another one"
        ],
        content: <Lab2 />,
        date: "30 de Abril del 2021",
        files: [
            `${staticRoot}/lab2/Not.hdl`,
            `${staticRoot}/lab2/And.hdl`,
            `${staticRoot}/lab2/Or.hdl`,
            `${staticRoot}/lab2/Xor.hdl`,
            `${staticRoot}/lab2/Mux.hdl`,
            `${staticRoot}/lab2/Dmux.hdl`,
            `${staticRoot}/lab2/Not16.hdl`,
            `${staticRoot}/lab2/And16.hdl`,
            `${staticRoot}/lab2/Or16.hdl`,
            `${staticRoot}/lab2/Mux16.hdl`,
            `${staticRoot}/lab2/Or8Way.hdl`,
            `${staticRoot}/lab2/Mux4Way16.hdl`,
            `${staticRoot}/lab2/Mux8Way16.hdl`,
            `${staticRoot}/lab2/DMux4Way.hdl`,
            `${staticRoot}/lab2/DMux8Way.hdl`
        ],
        zip: `${staticRoot}/lab2/Grupo4_lab2.rar`
    }
];

// assign:
//          questions: React component
for (const lab of labs) {
    lab.questions = () => {
        const prefix = "/labs/" + (labIndex++); // increases labIndex before concatenate
        return (
            <div className="card card-body darky">
                <ul className="list-group list-group-flush">
                    <ul className="list-group list-group-flush">
                        {lab.raw_questions.map((question, index) => formatQuestion(question, index + 1, prefix))}
                    </ul>
                </ul>
            </div>
        );
    }
}

function formatQuestion(question, index, prefix = "/labs/1") {
    return (
        <a className="list-group-item darky text-left" href={prefix + `#Qt${index}`} >
            {question}
        </a>
    );
}

export default labs;