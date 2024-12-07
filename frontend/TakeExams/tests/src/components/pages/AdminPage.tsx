import React, {useState} from "react";
import "../../styles/pages/AdminPage.css";

const AdminPage: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");

    const handleCreateTask = () => {
        console.log("Task Created:", taskTitle);
        setTaskTitle("");
    };

    return (
        <div className="admin-page">
            <h2>Admin Panel</h2>
            <div className="create-task">
                <input
                    type="text"
                    value={taskTitle}
                    placeholder="Task Title"
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <button onClick={handleCreateTask}>Create Task</button>
            </div>
        </div>
    );
};

export default AdminPage;
