import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        About Aliza's Kitchen
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Aliza's Kitchen, where we bring you the best homemade dishes with love and care.
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to provide delicious and nutritious meals that warm your heart and satisfy your taste buds.
      </Typography>
    </Container>
  );
};

export default About;
