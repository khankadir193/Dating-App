import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.js';
import ProfileCard from './Components/ProfileCard.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const App = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles from an API or database
    const fetchedProfiles = [
      {
        name: 'John Doe',
        bio: 'Software Developer',
        image: 'https://via.placeholder.com/140'
      },
      {
        name: 'Jane Smith',
        bio: 'Graphic Designer',
        image: 'https://via.placeholder.com/140'
      }
    ];
    setProfiles(fetchedProfiles);
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          {profiles.map((profile, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProfileCard profile={profile} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
