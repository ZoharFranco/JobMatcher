import React from 'react';
import {FaCode} from 'react-icons/fa';
import '../../styles/general/TaskCard.css';

interface TaskCardProps {
    title: string;
    description: string;
    onClick?: () => void; // Optional click handler
}

const TaskCard: React.FC<TaskCardProps> = ({title, description, onClick}) => {
    return (
        <div className="task-card" onClick={onClick}>

            <div className="task-content">
                <h3 className="task-title">{title}</h3>
                <p className="task-description">{description}</p>
            </div>
            <div className="task-icon">
                <FaCode/>
            </div>
        </div>
    );
};

export default TaskCard;
