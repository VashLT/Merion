import React from 'react';

import TableOfContent from '../TableOfContent';
import Biblio from '../Biblio';

export const Lab: React.FC<LabProps> = ({ tableOfContent, biblio, data, children }) => {
    return (
        <>
            <div className="lab-header">
                <h3>{data.header}: <br /> {data.title}</h3>
            </div>
            <div className="lab-content">
                <TableOfContent sections={tableOfContent} />
                {children}
                <Biblio {...biblio} />
            </div >
        </>
    );
}

export default Lab;