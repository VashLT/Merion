import React from 'react';

export const LabAnswer: React.FC<LabAnswerProps> = ({ question, text, children, id }) => {
    return (
        <>
            <h4 id={id ? id : ''}>
                {question}
            </h4>
            {text
                ? text.map((paragraph, i) => <p key={i} className="mb-4">{paragraph}</p>)
                : ''
            }
            {children}
        </>
    );
}

export default LabAnswer;