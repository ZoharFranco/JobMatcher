import React, {useEffect, useRef, useState} from 'react';
import {EditorState} from '@codemirror/state';
import {EditorView, keymap} from '@codemirror/view';
import {javascript} from '@codemirror/lang-javascript';
import {autocompletion} from '@codemirror/autocomplete';
import {oneDark} from '@codemirror/theme-one-dark'; // Or another theme
import '../../styles/editors/CodeEditor.css'
import {defaultKeymap} from "@codemirror/commands";

const CodeEditor: React.FC = () => {
    const editorRef = useRef<HTMLDivElement | null>(null); // Ref to hold the editor
    const [code] = useState('// Write your JavaScript code here');

    useEffect(() => {
        // Initialize CodeMirror editor when the component mounts
        const state = EditorState.create({
            doc: code,
            extensions: [
                javascript(),
                autocompletion(),
                oneDark,
                keymap.of([...defaultKeymap]), // Add default keymap with Enter handlin
            ],
        });

        const view = new EditorView({
            state,
            parent: editorRef.current!,
        });

        // Cleanup editor view when the component unmounts
        return () => {
            view.destroy();
        };
    }, [code]); // Reinitialize editor when `code` changes

    return (
        <div className="code-editor-container">
            <div ref={editorRef} className="code-editor"/>
            <div className="footer">
                <button className="run-button">Run</button>
            </div>
        </div>
    );
};

export default CodeEditor;
