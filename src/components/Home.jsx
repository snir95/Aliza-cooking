import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import mockMenuData from '../data/mockData';
import './Home.css'
const Home = () => {
  const menuItems = mockMenuData;

  return (
    <Container>
      <Typography sx={{ marginTop: 2, marginBottom: 2 }} variant="h4" align="center" gutterBottom>
        הבישולים של עליזה
      </Typography>
      <Grid container spacing={3}>
        {menuItems.map((menuItem) => (
          <Grid key={menuItem.id} item xs={12} sm={6} md={4}>
            <Card className="menu-card">
              <CardMedia component="img" height="200" image={menuItem.image} alt={menuItem.name} className="menu-card-img"/>
              <CardContent>
                <Typography variant="h6" align="center">
                  {menuItem.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {menuItem.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
