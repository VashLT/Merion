import React from 'react';

const mapSection = (section: Isection, index: number) => {
    return (
        <>
            <a
                key={'s' + index}
                href={section.href}
                className="list-group-item list-group-item-action tof-item" >
                {section.displayName}
            </a>
            {"subSections" in section
                ? section.subSections!.map(
                    (subSection, index) => {
                        return (
                            <a
                                key={'ss' + index}
                                href={subSection.href}
                                className="list-group-item list-group-item-action tof-item__subsection"
                            >
                                {subSection.displayName}
                            </a>
                        )
                    })
                : ""
            }
        </>
    )
}

export const TableOfContent: React.FC<TableOfContentProps> = ({ sections }) => {
    return (
        <section id="TOC">
            <h4>Contenido del laboratorio</h4>
            <div className="hbar"></div>
            <div className="list-group list-group-flush mb-4">
                {sections.map((section, index) => mapSection(section, index + 1))}
            </div>

        </section>
    );
}

export default TableOfContent;