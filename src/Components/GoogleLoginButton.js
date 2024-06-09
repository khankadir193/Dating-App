// src/components/GoogleLoginButton.js
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Button from '@mui/material/Button';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      const decodedToken = jwtDecode(tokenResponse.credential);
      console.log('Decoded Token:', decodedToken);
      onSuccess(decodedToken);
    },
    onError: errorResponse => {
      console.error('Login Failed:', errorResponse);
      onFailure(errorResponse);
    }
  });

  return (
    <Button variant="contained" color="primary" onClick={() => login()}>
      Sign in with Google 🚀
    </Button>
  );
};

export default GoogleLoginButton;
