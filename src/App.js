// src/App.js
import React, { useState, useEffect } from 'react';
import GoogleLoginButton from './Components/GoogleLoginButton.js';
import Navbar from './Components/Navbar.js';
import ProfileCard from './Components/ProfileCard.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import firstImage from './Images/first.jpg';
import secondImage from './Images/kadir.jpg';
import thirdImage from './Images/second.jpg';
import SwipeableComp from './Components/SwipeableComp.js';
import SwipeableViews from 'react-swipeable-views';
import styled from '@emotion/styled/macro';
// import 

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: 'lightblue',
  padding: '20px',
}));
const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [user, setUser] = useState(null);
  const [currentIndex,setCurrentIndex] = useState(0);

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
      },
      {
        name: 'Abdul Jabir Khan',
        bio: 'Architect',
        image: thirdImage
      }
    ];
    setProfiles(fetchedProfiles);
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  const handleAction = ()=>{
    setCurrentIndex((prevIndx)=> (prevIndx+1) % profiles.length)
  }

  return (
    <div>
      {user && <Navbar user={user} onLogout={handleLogout} />}
      <Container>
        <Grid container spacing={3}>
          {user ? (
            <SwipeableViews axis='y' animateHeight style={{marginTop:'30px',width:'100%'}}
            index={currentIndex} onChangeIndex={setCurrentIndex}>
              {profiles.map((profile, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProfileCard profile={profile} onAction={handleAction} />
                </Grid>
              ))}
            </SwipeableViews>

          ) : (
            <Grid item xs={12}>
              <GoogleLoginButton onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />
            </Grid>
          )}
        </Grid>

        {/* <SwipeableComp /> */}
      </Container>
    </div>
  );
};

export default App;
