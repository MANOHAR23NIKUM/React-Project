import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

function About() {
  const [imageList, setImageList] = useState([]);
  const URL_API = 'http://127.0.0.1:8080/users';

  const importFromJson = async () => {
    try {
      const response = await axios.get(URL_API);
      console.log('image data', response.data[0].photos);
      setImageList(response.data[0].photos);
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  };

  useEffect(() => {
    importFromJson();
  }, []);

  return (
    <>
    
    <Container maxWidth="lg" className="about-container" sx={{ mt: 8 }}>
      <Grid container spacing={3} alignItems="center">
        {imageList.map((img, index) => (
          <Grid
            container
            key={index}
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
            alignItems="center"
            spacing={2}
            style={{ marginBottom: '20px' }}
          >
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ borderRadius: '10px', overflow: 'hidden' }}>
                <Box
                  component="img"
                  src={img.url}
                  alt={img.title}
                  sx={{
                    width: '100%',
                    height: { xs: '300px', md: '400px' },
                    objectFit: 'cover',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="officepara" p={3}>
                <Typography variant="h4" id="header">
                  {img.header}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {img.caption}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>

 
    </Container>

    </>
  );
}

export default About;
