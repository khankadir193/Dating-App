import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
}));

const ProfileImage = ({ picture }) => {
  return (
    <StyledAvatar alt="Profile Image" src={picture}>
      {!picture && <AccountCircleIcon />}
    </StyledAvatar>
  );
};

export default ProfileImage;
