import React from "react";
import "../../styles/panels/QuestionPanel.css";

const QuestionPanel: React.FC = () => {
    const questions = [
        "What are the time complexities of common sorting algorithms?",
        "Explain the difference between var, let, and const in JavaScript.",
    ];

    return (
        <div className="question-panel">
            <h3>Questions</h3>
            <ul>
                {questions.map((q, index) => (
                    <li key={index}>{q}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionPanel;
