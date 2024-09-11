import React from 'react';
import Database from '../Database/db.json';
import { Grid, Card, CardContent, Typography, CardMedia, CardActionArea, CardActions, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Services = () => {
  const cardImages = Database.Cardsimg.flatMap(card => card.images || []);
  console.log(cardImages);
  

  return (
    <Container style={{ textAlign: 'center' }} maxWidth="lg">
      <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
        Our Services
      </Typography>

      <Grid container spacing={5} style={{ marginTop: "20px" }}>
        {cardImages.map((card, index) => (
          <Grid item xs={12} sm={4} ms={4} key={index}>
            <Card sx={{ maxWidth: 345 }} style={{
              padding: "10px",
              marginBottom: "30px",
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              position: 'relative',
              overflow: 'visible',
              transition: 'border 0.3s ease',
              border: '2px solid transparent',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow='0px 0px 4px black'; // black boxshodow on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow='0px 0px 1px black'; // Remove boxshadow on mouse leave
              }}>

              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.url}
                  alt={card.title}
                  style={{ borderRadius: "5px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography className='service-descrip' variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

                <Link to={`/service-details/${card?.id}`}>
                
                    <Button variant="contained" size="medium" style={{ borderRadius: '0 10px 0 10px' }}>
                      Read more
                    </Button>
                </Link>
                
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services