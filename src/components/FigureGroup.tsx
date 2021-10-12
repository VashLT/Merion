import React from 'react';

export const FigureGroup: React.FC<FigureGroupProps> = ({ title, figIndex, src, id, children }) => {

    return (
        <div className="c-figures" id={id ? id : ""}>
            {children}
            <p><strong>Fig. {figIndex}. </strong>&nbsp;{title}.&nbsp;
                {src ?
                    <a href={src} title="Fuente de la figura">Fuente</a>
                    : ""
                }
            </p>
        </div>
    );
}

export default FigureGroup;