import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const ProfileCard = ({ profile,onAction }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={profile.picture}
        alt={profile.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onAction}>SKIP</Button>
        <Button size="small" onClick={onAction}>LIKE</Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
