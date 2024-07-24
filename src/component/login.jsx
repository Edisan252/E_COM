import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUsername }) => {
    const [username, setUsernameLocal] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'username' && password === '1234') {
            setUsername(username);
            navigate('/welcome');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className='login-container'>
            <div className='form-group'>
            <h2>Login Page</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsernameLocal(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            /> <br/><br/>
            <button onClick={handleLogin} className='submit-button'>Login</button>
        </div>
        </div>
    );
};

export default Login;
