import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './TodoList.css';
import taskImage from './todo-image.png'; // Replace with your To-Do list image path
import schoolLogo from './college-logo.png'; // Replace with your college logo path

function TaskManager() {
    const [newTask, setNewTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);  // State to track dark mode

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask) {
            setTaskList([...taskList, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (taskToDelete) => {
        setTaskList(taskList.filter(t => t !== taskToDelete));
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
    };

    // Handle logout and navigate to login page
    const handleLogout = () => {
        alert('Logging out...');
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="task-manager-container">
            <div className="task-form-container">
                {/* Header Section */}
                <div className="task-header-section">
                    {/* Task Manager Header */}
                    <div className="task-header-item">
                        <img src={taskImage} alt="To-Do List" />
                        <h2>Task Manager</h2>
                    </div>

                    {/* College Logo Section */}
                    <div className="task-header-item">
                        <img src={schoolLogo} className="school-logo" alt="College Logo" />
                        <span>Welcome to Your Task Manager</span>
                    </div>
                </div>

                {/* Task Form */}
                <form onSubmit={handleAddTask} className="task-form">
                    <label htmlFor="new-task">New Task:</label>
                    <input
                        type="text"
                        id="new-task"
                        placeholder="Enter a new task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        required
                    />
                    <button type="submit">Add Task</button>
                </form>

                {/* Task List */}
                <div className="task-list">
                    {taskList.length === 0 ? (
                        <p>No tasks added yet!</p>
                    ) : (
                        taskList.map((task, index) => (
                            <div key={index} className="task-item">
                                <span>{task}</span>
                                <button onClick={() => handleDeleteTask(task)}>Delete</button>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Dark Mode and Logout Buttons */}
            <div className="button-container">
                <button className="mode-toggle-button" onClick={toggleDarkMode}>
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </button>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default TaskManager;
