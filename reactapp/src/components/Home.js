import React from 'react'
import Database from '../Database/db.json';
import Carousel from 'react-material-ui-carousel';
import { Grid, Card,CardContent , Typography ,Paper, Button, CardActions,Box} from '@mui/material';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Home = () => {
  const images = Database.users.flatMap(user => user.images || []); 
  const aboutUsImage = Database.AboutUS[0].url;

  const cardImages = Database.Cardsimg.flatMap(card => card.images || []);
  const cardsBackgroundImage = Database.BackgroundImages?.[0]?.cardsSection;

  return (
    <div>

{/* first sections Carousel image*/}

      <Carousel>
          {images.map((record, index) => (
            <div key={index}>
                <Paper style={{ textAlign: 'center' }}>
                  <img src={record.url} alt={record.title} style={{ width: '100%', height: '800px', objectFit: 'cover' }} />
                  <br/>
                  {/* <h2>{record.title}</h2> */}
                  {/* <p>{record.description}</p> */}
                  {/* <Button variant="contained" color="secondary" style={{ borderRadius: '0 10px 0 10px' }}   >
                    Learn More     
                  </Button> */}
                </Paper>
            </div>
            ))}
      </Carousel>

{/* second section about us */}

<div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            {/* Left Side: Image */}
            <Grid item xs={12} md={6}>
              <img 
                src={aboutUsImage}
                alt="About Us"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Grid>

            {/* Right Side: Content */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" paragraph>
                Our company has been providing exceptional services for over a decade. We specialize in offering top-notch solutions to meet the diverse needs of our clients. Our team of experts is dedicated to delivering innovative and effective strategies to help businesses thrive.
              </Typography>
              <Typography variant="body1" paragraph>
                Whether you're looking for customized solutions or expert guidance, we're here to help you achieve your goals. Our commitment to excellence is evident in everything we do, and we're proud to be a trusted partner to many successful businesses.
              </Typography>
              <Link to="/about">
              <Button 
                variant="contained" 
                color="primary"
                style={{ borderRadius: '8px' }}
              >
                Learn More About Us
              </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>



{/* // Third section Cards   */}
      
    <div   
    
    // style={{
    //       backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${cardsBackgroundImage})`, 
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //       backgroundRepeat: 'no-repeat',
    //       padding: '50px 0',
    //       opacity:1
    //     }}
      >
      
        <Container style={{ textAlign: 'center' }} maxWidth="lg">
            
            <Typography variant='h4' align='center' style={{marginTop:"50px"}}>
                Over services
            </Typography>
              
            <Grid container spacing={5} style={{marginTop:"20px"}}>
                  {cardImages.map((card,index)=>(
                <Grid item xs={12} sm={4} ms={4} key={index}> 
              
          <Card sx={{ maxWidth: 345 }}  style={{padding:"10px",marginBottom:"30px", backgroundColor: 'rgba(255, 255, 255, 0.8)', position: 'relative',
                    overflow: 'visible',
                    transition: 'border 0.3s ease',
                    border: '2px solid transparent',}}

                    onMouseEnter={(e) => {
                      e.currentTarget.style.border = '2px solid red'; // Red border on hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border = '2px solid transparent'; // Remove border on mouse leave
                    }} > 

                    
            <CardActionArea>
                <CardMedia
                  component="img" 
                  height="140" 
                  image={card.url} 
                  alt={card.title}
                  style={{borderRadius:"5px"}}
                /> 
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
              </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Link to="/services" style={{ textDecoration: 'none' }}>
                  <Button  variant="contained" size="medium" style={{ borderRadius: '0 10px 0 10px' }}  >
                      EXPLORE
                  </Button>
                  </Link>
                </Box>
              </CardActions>
            </Card>
              </Grid> 
             ))}
           </Grid>
        </Container>
      </div>
    
    
    </div> 
  )
}

export default Home

