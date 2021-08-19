import React from 'react';

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section id={id}>
            <h4>{title}</h4>
            <div className="hbar"></div>
            {children}
        </section>
    );
}

export default Section;