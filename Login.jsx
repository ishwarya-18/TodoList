import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import todoImage from './todo-image.png';  // Replace with your To-Do list image path
import collegeLogo from './college-logo.png';  // Replace with your college logo path

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login successful');
        // Navigate to the To-Do page after successful login
        navigate('/todo'); // Change '/todo' to the route of your To-Do page
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', darkMode);
    };

    return (
        <div className="login-container">
            <div className="login-form-box">
                {/* Header Section */}
                <div className="login-header-box">
                    {/* To-Do List Section */}
                    <div className="login-header-item-box">
                        <img src={todoImage} alt="To-Do List" />
                        <h2>To-Do List</h2>
                    </div>

                    {/* Sign In Section */}
                    <div className="login-header-item-box">
                        <img src={collegeLogo} className="college-logo" alt="College Logo" />
                        <span>Login</span>
                    </div>
                </div>

                {/* Sign-in Form */}
                <form onSubmit={handleSubmit} className="login-form">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p className="login-register-link">Don't have an account? <a href="/register">Register</a></p>
            </div>
            
            {/* Dark Mode Toggle Button */}
            <button className="dark-mode-togglee-button" onClick={toggleDarkMode}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
}

export default Login;
