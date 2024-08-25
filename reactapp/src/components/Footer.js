import { Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import '../style/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Muigridfooter = () => {
  return (
    <>
      <div style={{backgroundColor:'black', color:'white'}}>
        <Container>
        <Grid container spcing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Typography variant="h4" sx={{ margin: "15px"  }} className="logoimg">
                <img src='http://hematitecorp.com/assets/images/logo.png' />
            </Typography>
            <Typography variant="h3" sx={{ margin: "15px"}}>
              {" "} 
              Educational Website
            </Typography>
          
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="" sx={{ margin: "15px"  }}>
               <p>
               Our motto is to create sustainable and self supportive communities. We facilitate people to 
                 identify their community issues and act upon to resolve those issues. We raise the consciousness 
                 level of the people and establish community based organization. The formation of these community 
                based organizations help communities to come up with solutions for the identified issues.
               </p>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "30px" }}>
               Get In Touch
            </Typography>
            <Typography variant="h6" sx={{ margin: "30px" }}>
              {" "}
              <Link color="inherit" target="_blank" href="https://wa.me/+919763858978">
                         <WhatsAppIcon className='styleicon' fontSize="large" />
                 </Link>
                 <Link color="inherit" target="_blank" href="https:www.instagram.com/instagram/">
                         <InstagramIcon  className='styleicon' fontSize="large"></InstagramIcon>
                 </Link>
                 <Link color="inherit" target="_blank" href="https:www.facebook.com/<username>">
                     <FacebookIcon  className='styleicon' fontSize="large"></FacebookIcon>
                 </Link>
                 <Link color="inherit" target="_blank" href="https:twitter.com/<username>">
                     <TwitterIcon  className='styleicon' fontSize="large"></TwitterIcon>
                 </Link>
                        
                <Link color="inherit" target="_blank" href="https://www.pinterest.com/<username>/">
                    <PinterestIcon  className='styleicon' fontSize="large"></PinterestIcon>
                </Link>

                <Link color="inherit" target="_blank" href="https://www.youtube.com">
                    <YouTubeIcon className='styleicon' fontSize="large"></YouTubeIcon>
                </Link>
            </Typography>
          
          </Grid>



        </Grid>
        </Container>
      </div>
    </>
  );
};

export default Muigridfooter;