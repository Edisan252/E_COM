import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

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

  return (
    <div className="App">
      <div>
              <h2>React Google Login</h2>
              <br />
              <br />
              {profile ? (
                  <div>
                      <img src={profile.picture} alt="" />
                      <h3>User Logged in</h3>
                      <p>Name: {profile.name}</p>
                      <p>Email Address: {profile.email}</p>
                      <br />
                      <br />
                      <button onClick={logOut}>Log out</button>
                  </div>
              ) : (
                  <button onClick={login_go}>Sign in with Google 🚀 </button>
              )}
          </div>
      </div>
    );
  }
  
  export default Login;