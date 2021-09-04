import React from 'react';

export const Figure: React.FC<FigureProps> = ({ img, src, title, figIndex, imgClass, imgStyle }) => {
    return (
        <figure className="c-diagram">
            <img
                src={img}
                alt={title}
                className={imgClass ? imgClass : ""}
                style={imgStyle ? imgStyle : {}}
            />
            <p><strong>Fig. {figIndex}. </strong>&nbsp;{title}.
                {src ?
                    <a href={src} title="Fuente de la figura">Fuente</a>
                    : ""
                }
            </p>
        </figure>
    );
}

export default Figure;