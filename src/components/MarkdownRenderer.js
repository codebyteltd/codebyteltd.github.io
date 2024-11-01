import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

const MarkdownRenderer = ({ filePath }) => {
    const [content, setContent] = useState('');
    useEffect(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(text => setContent(text))
            .catch(error => console.error('Error loading markdown file:', error));
    }, [filePath]);

    return (
        <div className="markdown-container">
            <Markdown className="markdown-content" >{content}</Markdown>
        </div>);

};


export default MarkdownRenderer;
