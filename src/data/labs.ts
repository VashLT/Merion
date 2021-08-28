const staticRoot = "/files";

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
        date: "16 de Abril del 2021",
    },
    {
        id: 2,
        header: "Laboratorio 2",
        title: "Conociendo Nand2Tetris",
        raw_questions: [
            "¿Cuál es el objetivo de ese proyecto con sus palabras y describa que debe hacer para desarrollarlo?"
        ],
        date: "30 de Abril del 2021",
        files: [
            `${staticRoot}/lab2/gates/Not.hdl`,
            `${staticRoot}/lab2/gates/And.hdl`,
            `${staticRoot}/lab2/gates/Or.hdl`,
            `${staticRoot}/lab2/gates/Xor.hdl`,
            `${staticRoot}/lab2/gates/Mux.hdl`,
            `${staticRoot}/lab2/gates/Dmux.hdl`,
            `${staticRoot}/lab2/gates/Not16.hdl`,
            `${staticRoot}/lab2/gates/And16.hdl`,
            `${staticRoot}/lab2/gates/Or16.hdl`,
            `${staticRoot}/lab2/gates/Mux16.hdl`,
            `${staticRoot}/lab2/gates/Or8Way.hdl`,
            `${staticRoot}/lab2/gates/Mux4Way16.hdl`,
            `${staticRoot}/lab2/gates/Mux8Way16.hdl`,
            `${staticRoot}/lab2/gates/DMux4Way.hdl`,
            `${staticRoot}/lab2/gates/DMux8Way.hdl`
        ],
        zip: `${staticRoot}/lab2/grupo4_lab2.zip`
    },
    {
        id: 3,
        header: "Laboratorio 3",
        title: "Aritmética Booleana Y Lógica Secuencial",
        raw_questions: [
            "¿Cuál es el objetivo de ese proyecto con sus palabras y describa que debe hacer para desarrollarlo?"
        ],
        date: "3 de Septiembre del 2021",
    }
];

export default labs;