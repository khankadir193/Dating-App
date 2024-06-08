import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.js';
import ProfileCard from './Components/ProfileCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import firstImage from './Images/first.jpg';
import secondImage from './Images/kadir.jpg';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const App = () => {
  const [profiles, setProfiles] = useState([]);

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
        name: 'Abdul Kadir Khan',
        bio: 'Software Engineer',
        image: secondImage
      }
    ];
    setProfiles(fetchedProfiles);
  }, []);

  //this is dating component
  // return (
  //   <div>
  //     <Navbar />
  //     <Container>
  //       <Grid container spacing={3}>
  //         {profiles.map((profile, index) => (
  //           <Grid item xs={12} sm={6} md={4} key={index}>
  //             <ProfileCard profile={profile} />
  //           </Grid>
  //         ))}
  //       </Grid>
  //     </Container>
  //   </div>
  // );

  return <GoogleLogin
  onSuccess={credentialResponse =>{
    const credentialDecodeResponse = jwtDecode(credentialResponse.credential)
    console.log('credentialDecodeResponse...??',credentialDecodeResponse);
  }}
  onError={()=>{
    console.log('Login has Failed...??');
  }}
  >

  </GoogleLogin>
};

export default App;
