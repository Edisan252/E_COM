import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login_go = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  const [username, setUsernameLocal] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            toast.success(username+ ' loggedin successfully');
        } else {
            toast.error('Invalid username or password');
        }
    };

  return (
    <>
  <div className='contain'>
            <div className='login-container'>
            <div className='form-group'><br/>
            <h2>Login Page</h2>
            <label>Username</label>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsernameLocal(e.target.value)} 
            /><br/><br/>
             <label>Password</label>
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            /> <br/><br/>
            <button onClick={handleLogin} className='submit-button'>Login</button>
            <ToastContainer />
        </div>
        </div><br/>
    <div className="app1">
      <div>
        {profile ? (
          <div className='login'>
            <img src={profile.picture} alt="user" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={login_go} style={{marginRight:'200px',marginBottom:'500px'}}><img src={require('../assets/gmail.png')} alt=""height={50} width={50}/> Sign in with Google</button>
        )}
      </div>
    </div><br /><br/><br/>
    </div>
    </>
  );
}
export default Login;
