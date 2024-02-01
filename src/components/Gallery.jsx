import React from 'react';
import { Container, Typography } from '@mui/material';

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Aliza's Kitchen Gallery
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our gallery to see mouth-watering dishes prepared with love and passion.
      </Typography>
      {/* Add your gallery components here */}
    </Container>
  );
};

export default Gallery;
