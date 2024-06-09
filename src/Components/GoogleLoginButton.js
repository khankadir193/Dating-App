// src/components/GoogleLoginButton.js
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import axios from 'axios';

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
    <Button variant="contained" color="primary" onClick={() => login()}>
      Sign in with Google 🚀
    </Button>
  );
};

export default GoogleLoginButton;

