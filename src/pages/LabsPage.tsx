import React, { useCallback, useRef } from 'react';

import labs from '../data/labs';

export const LabsPage: React.FC = () => {
    return (
        <div id="labsPage">
            <div id="labsList">
                <div className="w-100" id="accordion">
                    {labs.map((lab, index) => <LabPreview {...lab} index={index} />)}
                </div>
            </div>
        </div>
    );
}

const LabPreview: React.FC<LabPreviewProps> = ({ header, title, index, id, raw_questions }) => {
    const readBtnRef = useRef(null);
    const onClick = useCallback((e: React.MouseEvent) => {
        if (e.target === readBtnRef.current) return;

        (e.currentTarget.querySelector('.card-header h5') as HTMLElement).click();
    }, [readBtnRef]);

    return (
        <div className="card lab-item" onClick={onClick}>
            <div
                className="card-header d-flex flex-row justify-content-between clicky align-items-center"
                id={'h' + index}
            >
                <h5
                    style={{ textAlign: "left" }} id={'t' + index}
                    data-toggle="collapse" data-target={"#c" + index}
                    aria-controls={"c" + index}
                >
                    {header}: {title}
                </h5>
                <a
                    className="btn btn-primary"
                    href={'/labs/' + id}
                    ref={readBtnRef}
                    role="button"
                >
                    READ
                </a>
            </div>
            <div id={"c" + index} className="collapse" aria-labelledby={'h' + index} data-parent="#accordion">
                <div className="card card-body darky">
                    <ul className="list-group list-group-flush">
                        <QuestionPreview questions={raw_questions} index={index} />
                    </ul>
                </div>
            </div>
        </div>
    );
}

const QuestionPreview: React.FC<QuestionPreviewProps> = ({ questions, index }) => {
    const prefix = "/labs/" + (index + 1); // increases labIndex before concatenate
    return (
        <ul className="list-group list-group-flush">
            {questions.map(question => {
                return (
                    <a className="list-group-item darky text-left lab-qt__preview" href={prefix + `#Qt${index}`} >
                        {question}
                    </a>
                );
            })
            }
        </ul>
    );
}

export default LabsPage;