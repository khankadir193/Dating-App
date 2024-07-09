import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GoogleLoginButton from './Components/GoogleLoginButton.js';
import Navbar from './Components/Navbar.js';
import ProfileCard from './Components/ProfileCard.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import firstImage from './Images/first.jpg';
import secondImage from './Images/kadir.jpg';
import thirdImage from './Images/second.jpg';
import SwipeableViews from 'react-swipeable-views';
import styled from '@emotion/styled/macro';
import Account from './Components/Account.js';
import BackendIntegration from './Components/BackendIntegration.js';
import UserComponent from './Components/UserComponent.js';

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: 'lightblue',
  padding: '20px',
}));

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [user, setUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLoginSuccess = (decodedToken) => {
    console.log('Login Success:', decodedToken.data);
    setUser(decodedToken.data);
  };

  const handleLoginFailure = (errorResponse) => {
    console.error('Login Failed:', errorResponse);
  };

  useEffect(() => {
    // Fetch profiles from an API or database
    // const fetchedProfiles = [
    //   { name: 'Abdullah Khan', bio: 'Software Developer', image: firstImage },
    //   { name: 'Iqra Khan', bio: 'Graphic Designer', image: secondImage },
    //   { name: 'Abdul Jabir Khan', bio: 'Architect', image: thirdImage },
    // ];
    // setProfiles(fetchedProfiles);
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  const handleAction = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <Router>
      <div>
        {user && <Navbar user={user} onLogout={handleLogout} />}
        {user && <UserComponent userData={user} setProfiles={setProfiles}/>}
        <Container>
          <Grid container spacing={3}>
            <Routes>
              <Route
                path="/"
                element={
                  user ? (
                    <SwipeableViews
                      axis="y"
                      animateHeight
                      style={{ marginTop: '30px', width: '100%' }}
                      index={currentIndex}
                      onChangeIndex={setCurrentIndex}
                    >
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
                  )
                }
              />
              <Route path="/profile" element={<Account />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Grid>
        </Container>
      </div>
    </Router>
  );
};

const ProfilePage = () => (
  <div>
    <h2>Profile Page</h2>
    <Link to="/">Go to Home</Link>
  </div>
);

const AboutPage = () => (
  <div>
    <h2>About Page</h2>
    <Link to="/">Go to Home</Link>
  </div>
);

const ContactPage = () => (
  <div>
    <h2>Contact Page</h2>
    <Link to="/">Go to Home</Link>
  </div>
);

const NotFound = () => (
  <div>
    <h2>404 Not Found</h2>
    <Link to="/">Go to Home</Link>
  </div>
);

export default App;
