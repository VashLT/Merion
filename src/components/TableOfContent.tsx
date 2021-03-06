import React from 'react';

const mapSection = (section: ITOFItem, index: number) => {
    return (
        <>
            <Section
                {...section}
                key={'s' + index}
                className="list-group-item list-group-item-action tof-item"
            />
            {"subSections" in section
                ? section.subSections!.map(
                    (subSection, index) => {
                        return (
                            <Section
                                {...subSection}
                                key={'ss' + index}
                                className="list-group-item list-group-item-action tof-item__subsection"
                            />
                        )
                    })
                : ""
            }
        </>
    )
}

export const TableOfContent: React.FC<TOFContentProps> = ({ sections }) => {
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

const goToElementById = (id: string) => {
    const element = document.getElementById(id) as HTMLElement;
    if (!element) {
        console.log(`element with id: ${id} is not in the document. `);
        return;
    }
    element.scrollIntoView();
}

const Section: React.FC<TOFSectionProps> = ({ targetId, displayName, key, className }) => {

    return (
        <a
            key={key ? key : `tofS${targetId}`}
            href={`#${targetId}`}
            className={className ? className : ""}
            onClick={() => goToElementById(targetId)}
        >
            {displayName}
        </a>
    )
}

export default TableOfContent;