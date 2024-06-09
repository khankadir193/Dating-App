// src/App.js

import React, { useState,useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from './Components/GoogleLoginButton';
import Navbar from './Components/Navbar.js';
import ProfileCard from './Components/ProfileCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const App = () => {
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([]);

  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // Fetch user details using the response code if necessary
    setUser(response);
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    // Fetch profiles from an API or database
    const fetchedProfiles = [
      {
        name: 'John Doe',
        bio: 'Software Developer',
        image: 'https://via.placeholder.com/140',
      },
      {
        name: 'Jane Smith',
        bio: 'Graphic Designer',
        image: 'https://via.placeholder.com/140',
      },
    ];
    setProfiles(fetchedProfiles);
  }, []);

  return (
    <GoogleOAuthProvider clientId="406249226819-c4ecih3kkeguitipdk6jeor53ma6qmsj.apps.googleusercontent.com">
      <Navbar user={user} onLogout={handleLogout} />
      <Container>
        <Grid container spacing={3}>
          {user ? (
            <div>
              <h2>Welcome, {user.profileObj?.name}</h2>
              <img src={user.profileObj?.imageUrl} alt="profile" />
            </div>
          ) : (
            <GoogleLoginButton onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />
          )}
          {profiles.map((profile, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProfileCard profile={profile} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default App;
