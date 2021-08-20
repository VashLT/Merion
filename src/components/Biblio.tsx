import React from 'react';
import Section from './Section';

const mapItem = (item: IbibItem, index: number) => {
    const linkName = "srcLinkName" in item ? item.srcLinkName : "Fuente";
    return (
        <p className="mb-1"><strong>{index}.</strong>&nbsp;
            {item.srcName}&nbsp;
            <a target="_blank" rel="noreferrer" href={"srcLink" in item ? item.srcLink : "#biblio"} title={linkName}>
                {linkName}
            </a>
            .
        </p>
    );
}

export const Biblio: React.FC<BiblioProps> = ({ items, title }) => {
    return (
        <Section id="biblio" title={title ? title : "Bibliografía"}>
            {items.map((item, index) => mapItem(item, index + 1))}
        </Section>
    );
}

export default Biblio;