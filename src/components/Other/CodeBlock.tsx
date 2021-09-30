import React, { useCallback, useState, useLayoutEffect } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock: React.FC<CodeBlockProps> = ({ filePath, lang, id, showLineNumbers }) => {
    const [fileContent, setFileContent] = useState<string | null>(null);

    const loadFile = useCallback(async () => {

        const rawFileContent = await fetch(filePath)
            .then(response => response.text());

        rawFileContent.split(/\r?\n/).forEach((line, index) => console.log(`line: ${index}, content: ${line}`));

        setFileContent(rawFileContent);

    }, [setFileContent, filePath]);


    useLayoutEffect(() => {
        if (fileContent) return;
        loadFile();

    }, [fileContent, filePath, loadFile])

    fetch(filePath)
        .then(response => response.text());

    var codeStyle;

    switch (lang) {
        case "python":
            codeStyle = atomOneLight;
            break;
        default:
            codeStyle = docco;
    }

    return (
        <SyntaxHighlighter
            language={lang ? lang : "c"}
            style={codeStyle}
            showLineNumbers={showLineNumbers ? showLineNumbers : false}
            id={id ? id : ""}
        >
            {fileContent ? fileContent : ''}
        </SyntaxHighlighter>
    );
}

export default CodeBlock;