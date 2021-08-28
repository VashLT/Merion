import React from 'react';

export const GateSection: React.FC<GateSectionProps> = ({ title, children, className, id }) => {
    return (
        <section className={className ? className : ""} id={id ? id : ""}>
            <h4>{title}</h4>
            {children}
        </section>
    )
}

export default GateSection;