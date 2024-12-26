import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Signup.css';
import todoImage from './todo-image.png';  // Replace with your To-Do list image path
import collegeLogo from './college-logo.png';  // Replace with your college logo path

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [darkMode, setDarkMode] = useState(false);  // State to track dark mode

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Handle signup logic here (e.g., sending data to a server)

        // On successful signup, navigate to the To-Do page
        console.log('Signup successful');
        navigate('/todo'); // Navigate to /todo route after sign-up
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', darkMode);
    };

    return (
        <div className="user-signup-container">
            <div className="user-signup-form">
                {/* Header Section */}
                <div className="user-signup-header">
                    {/* To-Do List Section */}
                    <div className="user-signup-header-item">
                        <img src={todoImage} alt="To-Do List" />
                        <h2>To-Do List</h2>
                    </div>

                    {/* Sign Up Section */}
                    <div className="user-signup-header-item">
                        <img src={collegeLogo} className="user-signup-college-logo" alt="College Logo" />
                        <span>Sign Up</span>
                    </div>
                </div>

                {/* Sign-up Form */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
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
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        placeholder="Confirm your password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <p className="user-signup-register-link">Already have an account? <a href="/login">Login</a></p>
            </div>
            
            {/* Dark Mode Toggle Button */}
            <button className="user-signup-dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
}

export default Signup;
