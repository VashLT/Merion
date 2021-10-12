import React from 'react';

export const SubFigure: React.FC<SubFigureProps> = ({ id, img, title, imgClass, imgStyle, src }) => {
    var width = "150px";
    if (imgStyle && "width" in imgStyle) {
        width = imgStyle["width"];
    }


    return (
        <figure className="c-diagram" id={id ? id : ""}>
            <img
                src={img}
                alt={title}
                className={imgClass ? imgClass : ""}
                style={imgStyle ? imgStyle : { width }}
            />
            <p style={{ width }}>{title}.&nbsp;
                {src ?
                    <a href={src} title="Fuente de la figura">Fuente</a>
                    : ""
                }
            </p>
        </figure>
    );
}

export default SubFigure;