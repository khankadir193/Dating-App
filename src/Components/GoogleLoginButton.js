// src/components/GoogleLoginButton.js

import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button'; // Importing Material-UI Button for styling

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      onSuccess(codeResponse);
    },
    onFailure: (error) => {
      console.error('Login failed:', error);
      onFailure(error);
    },
    flow: 'auth-code',
  });

  return (
    <Button variant="contained" color="primary" onClick={() => login()}>
      Sign in with Google 🚀
    </Button>
  );
};

export default GoogleLoginButton;
