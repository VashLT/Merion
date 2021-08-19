import React from 'react';

const mapQuestion = (question: string, index: number) => {
    return (
        <a
            key={'q' + index}
            href={"#Qt" + index}
            className="list-group-item list-group-item-action tof-item">
            {question}
        </a>
    )
}

const mapSection = (section: Isection, index: number) => {
    return (
        <a
            key={'s' + index}
            href={section.href}
            className="list-group-item list-group-item-action tof-item" >
            {section.displayName}
        </a>
    )
}

export const TableOfContent: React.FC<TableOfContentProps> = ({ questions, sections }) => {
    return (
        <section id="TOC">
            <h4>Contenido del laboratorio</h4>
            <div className="hbar"></div>
            <div className="list-group list-group-flush mb-4">
                {questions.map((question, index) => mapQuestion(question, index + 1))}
                {sections.map((section, index) => mapSection(section, index + 1))}
            </div>

        </section>
    );
}

export default TableOfContent;