import React from "react";
import {useNavigate} from "react-router-dom";
import "../../styles/pages/Questions.css";
import TaskCard from "../general/TaskCard.tsx";

const Questions: React.FC = () => {
    const navigate = useNavigate();

    const tasks = [
        {id: 1, title: "Array Manipulation Task"},
        {id: 2, title: "Dynamic Programming Task"},
        {id: 3, title: "API Integration Task"},
        {id: 4, title: "API Integration Task"},
        {id: 5, title: "API Integration Task"},
        {id: 6, title: "API Integration Task"},
        {id: 7, title: "API Integration Task"},
        {id: 8, title: "API Integration Task"},
    ];

    return (
        <div className="questions">
            <div className="tasks">
                {tasks.map((task) => (
                    <TaskCard
                        title={task.title}
                        description={task.title}
                        key={task.id}
                        onClick={() => navigate(`/coding/${task.id}`)}
                    />

                ))}
            </div>
        </div>
    );
};

export default Questions;
