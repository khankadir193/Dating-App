// src/components/GoogleLoginButton.js
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import axios from 'axios';
import styled from '@emotion/styled/macro';


const StyledButton = styled(Button)(({ theme }) => ({
  width:"100%",
  height:"100vh",
  backgroundColor: '#4285F4',
  color: '#fff',
  textTransform: 'none',
  fontSize: '16px',
  padding: '10px 20px',
  borderRadius: '5px',
  marginTop:'0',
  boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  '&:hover': {
    backgroundColor: '#357ae8',
  },
}));

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { access_token } = tokenResponse;
        const userInfo = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        console.log('userInfo:', userInfo);
        onSuccess(userInfo);
        // Optionally handle user info here
      } catch (error) {
        console.error('Failed to fetch user info', error);
      }
    },
    onError: (errorResponse) => {
      console.error('Login Failed:', errorResponse);
      onFailure(errorResponse);
    },
  });

  return (
    <StyledButton variant="contained" color="primary" onClick={() => login()}>
      Sign in with Google 🚀
    </StyledButton>
  );
};

export default GoogleLoginButton;

