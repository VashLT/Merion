import React from 'react';

export const Figure: React.FC<FigureProps> = ({ id, img, src, title, figIndex, imgClass, imgStyle }) => {
    return (
        <figure className="c-diagram" id={id ? id : ""}>
            <img
                src={img}
                alt={title}
                className={imgClass ? imgClass : ""}
                style={imgStyle ? imgStyle : {"width": "90px"}}
            />
            <p><strong>Fig. {figIndex}. </strong>&nbsp;{title}.&nbsp;
                {src ?
                    <a href={src} title="Fuente de la figura">Fuente</a>
                    : ""
                }
            </p>
        </figure>
    );
}

const mapImg = (imgObj: IfiguresImg, index: number) => {
    var imgStyle;

    if (!imgObj.imgStyle) {
        imgStyle = {};
    } else {
        imgStyle = Array.isArray(imgObj.imgStyle) ? imgObj.imgStyle[index] : imgObj.imgStyle;
    }

    return <img
        src={imgObj.img}
        alt={imgObj.title}
        className={imgObj.imgClass ? imgObj.imgClass : ""}
        style={imgStyle}
        key={`img${index}`}
    />
}

export const Figures: React.FC<FiguresProps> = ({ imgs, src, title, figIndex, imgClass, imgStyle }) => {
    return (
        <figure className="c-diagram">
            <div className="c-diagram__row">
                {imgs.map((img, index) => mapImg({ img, title, imgClass, imgStyle }, index))}
            </div>
            <p><strong>Fig. {figIndex}. </strong>&nbsp;{title}.&nbsp;
                {src ?
                    <a href={src} title="Fuente de la figura">Fuente</a>
                    : ""
                }
            </p>
        </figure>
    );
}

export default Figure;