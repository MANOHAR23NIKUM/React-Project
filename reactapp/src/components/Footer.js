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
      <div style={{backgroundColor:'rgb(66, 65, 65)', color:'white'}}>
        <Container>
        <Grid container spcing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Typography variant="h4" sx={{ margin: "15px"  }} className="logoimg">
                <img src='https://a2zithub.org/assets/165710745335077275.png' alt="Logoimg" />
            </Typography>
            <Typography variant="h5" sx={{ margin: "15px"}}>
              {" "} 
              Educational Website
            </Typography>
          
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Typography variant="h4" sx={{ margin: "15px"  }} >
                  Pages
            </Typography>
            <Typography variant="h6" sx={{fontSize:'17px', margin: "15px"}} className="pageslink">
              {" "} 
              <Link color="inherit" href="/home">
                    Home
              </Link>
            </Typography>
            <Typography variant="h6" sx={{fontSize:'17px', margin: "15px"}} className="pageslink">
              {" "} 
              <Link color="inherit" href="/about">
                    About
              </Link>
            </Typography>
            <Typography variant="h6" sx={{fontSize:'17px', margin: "15px"}} className="pageslink">
              {" "} 
              <Link color="inherit" href="/service">
                    Services
              </Link>
            </Typography>
            <Typography variant="h6" sx={{fontSize:'17px', margin: "15px"}} className="pageslink">
              {" "} 
              <Link color="inherit" href="/contact">
                    Contact
              </Link>
            </Typography>
          
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="" sx={{   margin: "15px" }}>
               <p style={{textAlign:'justify'}}>
               Our motto is to create sustainable and self supportive communities. We facilitate people to 
                 identify their community issues and act upon to resolve       those issues. We raise the consciousness 
                 level of the people and establish community based organization. The formation of these community 
                based organizations help communities to come up with solutions for the identified issues.
               </p>
            </Typography>
          </Grid>
        </Grid>
         <Grid item xs={12} sm={6} md={4} lg={3} sx={{ textAlign:'center'}} >
            <Typography variant="h4" >
               Get In Touch
            </Typography>
            <Typography  sx={{ margin:'15px',textAlign:'center' }}>
              {" "}
                 <Link color="inherit" target="_blank" href="https://wa.me/+919763858978">
                         <WhatsAppIcon className='styleicon' fontSize="large" sx={{color:'white', backgroundColor:'green',borderRadius:'50%',padding:'4px'}} />
                 </Link>
                 <Link color="inherit" target="_blank" href="https:www.instagram.com/instagram/">
                         <InstagramIcon  className='styleicon' fontSize="large" sx={{borderRadius:'50%',padding:'4px', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'}}></InstagramIcon>
                 </Link>
                 <Link color="inherit" target="_blank" href="https:www.facebook.com/<username>">
                     <FacebookIcon  className='styleicon' fontSize="large" sx={{color:'white',background:'rgb(32, 32, 131)',padding:'6px',borderRadius:'50%'}}></FacebookIcon>
                 </Link>
                 <Link color="inherit" target="_blank" href="https:twitter.com/<username>">
                     <TwitterIcon  className='styleicon' fontSize="large" sx={{color:'white',background:' rgb(63, 223, 215)',borderRadius:'50%',padding:'5px'}}></TwitterIcon>
                 </Link>
                        
                <Link color="inherit" target="_blank" href="https://www.pinterest.com/<username>/">
                    <PinterestIcon  className='styleicon' fontSize="large" sx={{color:'white' ,background:'orangered', padding:'4px',borderRadius:'5px'}}></PinterestIcon>
                </Link>

                <Link color="inherit" target="_blank" href="https://www.youtube.com">
                    <YouTubeIcon className='styleicon' fontSize="large" sx={{color:'white' ,background:'red',padding:'4px',borderRadius:'5px'}}></YouTubeIcon>
                </Link>
                
            </Typography>
          
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Muigridfooter;