import React from "react";
import {useParams} from "react-router-dom";
import CodeEditor from "../editors/CodeEditor";
import "../../styles/pages/CodingPage.css";

const CodingPage: React.FC = () => {
    const {taskId} = useParams();


    return (
        <div className="coding-page">
            <h2>Task #{taskId}</h2>
            <p>Here is the description of the coding task...</p>
            <CodeEditor/>
        </div>
    );
};

export default CodingPage;
