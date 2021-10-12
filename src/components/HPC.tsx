import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const HPC: React.FC = () => {
    return (
        <div>

        </div>
    );
}

export const Component: React.FC<HPCComponentProps> = ({ style, title, desc, cant, img, src, ...props }) => {
    return (
        <Card className="mb-2" style={style ? style : {}}>
            <Card.Img variant="top" src={img} style={"imgStyle" in props ? props.imgStyle : {}} />
            <Card.Body>
                <Card.Title><strong>{title}</strong></Card.Title>
                <Card.Text>
                    <p>{desc}</p> {cant ? <p><strong>Cantidad:</strong> {cant}</p> : <></>}
                </Card.Text>
                {
                    src ? <Button variant="primary" onClick={() => window.open(src, "_blank", 'noopener')}>Especificaciones</Button>
                        : <></>
                }
            </Card.Body>
        </Card>
    )
}

export default HPC;