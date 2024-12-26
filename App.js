import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import TaskManager from './TodoList';  // Assuming TaskManager is the To-Do list page component
import Signup from './Signup';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/todo" element={<TaskManager />} />
            </Routes>
        </Router>
    );
}

export default App;
