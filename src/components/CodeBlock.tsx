import React, { useCallback, useState, useLayoutEffect } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock: React.FC<CodeBlockProps> = ({ filePath }) => {
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

    return (
        <SyntaxHighlighter
            language="javascript"
            style={atomOneLight}
            showLineNumbers={true}

        >
            {fileContent ? fileContent : ''}
        </SyntaxHighlighter>
    );
}

export default CodeBlock;