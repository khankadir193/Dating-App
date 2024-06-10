// src/App.js
import React, { useState, useEffect } from 'react';
import GoogleLoginButton from './Components/GoogleLoginButton.js';
import Navbar from './Components/Navbar.js';
import ProfileCard from './Components/ProfileCard.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import firstImage from './Images/first.jpg';
import secondImage from './Images/kadir.jpg';
import SwipeableComp from './Components/SwipeableComp.js';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (decodedToken) => {
    console.log('Login Success:', decodedToken.data);
    setUser(decodedToken.data);
  };

  const handleLoginFailure = (errorResponse) => {
    console.error('Login Failed:', errorResponse);
  };

  useEffect(() => {
    // Fetch profiles from an API or database
    const fetchedProfiles = [
      {
        name: 'John Doe',
        bio: 'Software Developer',
        image: firstImage
      },
      {
        name: 'Jane Smith',
        bio: 'Graphic Designer',
        image: secondImage
      }
    ];
    setProfiles(fetchedProfiles);
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user && <Navbar user={user} onLogout={handleLogout} />}
      <Container>
        <Grid container spacing={3}>
          {user ? (
            profiles.map((profile, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProfileCard profile={profile} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <GoogleLoginButton onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />
            </Grid>
          )}
        </Grid>

        <SwipeableComp />
      </Container>
    </div>
  );
};

export default App;
