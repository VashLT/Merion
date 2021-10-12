import React from 'react';

import TableOfContent from '../TableOfContent';
import Biblio from '../Biblio';

export const FinalProject: React.FC<LabProps> = ({ tableOfContent, biblio, data, children }) => {
    return (
        <>
            <div className="lab-header mt-4">
                <h3>{data.header} <br /><br /> {data.title}</h3>
            </div>
            <div className="lab-content">
                <TableOfContent sections={tableOfContent} />
                {children}
                <Biblio {...biblio} />
            </div >
        </>
    );
}

export default FinalProject;