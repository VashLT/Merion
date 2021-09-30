import React from 'react';

export const Table: React.FC<TableProps> = ({ title, tableIndex, id, className, children }) => {
    return (
        <div className="table-wrapper">
            <table id={id ? id : ""} className={className ? className : ""}>
                {children}
            </table>
            <p><strong>Tabla {tableIndex}. {title}</strong></p>
        </div>
    );
}

export default Table;