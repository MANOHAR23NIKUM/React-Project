import React from 'react'
import '../style/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Link} from '@mui/material';

const Footer = () => {
  return (
    <>
        <div className='footer'>
             <h1>Educational Website</h1>
             <p>Our motto is to create sustainable and self supportive communities. We facilitate people to 
                identify their community issues and act upon to resolve those issues. We raise the consciousness 
                level of the people and establish community based organization. The formation of these community 
                based organizations help communities to come up with solutions for the identified issues.</p>
             <h1>Get In Touch</h1>
             <div className='icons'>
                {/* <Link to="htttps://wa.me/+919763858978">
                    <IconButton>
                        <WhatsAppIcon  className='styleicon'></WhatsAppIcon>
                    </IconButton>     
                </Link> */}
                <Link color="inherit" target="_blank" href="https://wa.me/+919763858978">
                        <WhatsAppIcon className='styleicon' />
                 </Link>

                {/* <WhatsAppIcon className='styleicon' /> */}
                <Link color="inherit" target="_blank" href="https://www.instagram.com/instagram/">
                        <InstagramIcon  className='styleicon'></InstagramIcon>
                </Link>

                  <Link color="inherit" target="_blank" href="https://www.facebook.com/<username>">
                    <FacebookIcon  className='styleicon'></FacebookIcon>
                </Link>

                <Link color="inherit" target="_blank" href="https://twitter.com/<username>">
                    <TwitterIcon  className='styleicon'></TwitterIcon>
                </Link>

                <Link color="inherit" target="_blank" href="https://www.pinterest.com/<username>/">
                    <PinterestIcon  className='styleicon'></PinterestIcon>
                </Link>

                <Link color="inherit" target="_blank" href="https://www.youtube.com">
                    <YouTubeIcon className='styleicon'></YouTubeIcon>
                </Link>

                {/* <a href="https://wa.me/+919763858978" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <IconButton>
                        <WhatsAppIcon className='styleicon' />
                    </IconButton>
                </a> 

                <a href="https://www.instagram.com/instagram/" target='_blank' rel="noopener noreferrer">
                    <IconButton>
                        <InstagramIcon  className='styleicon'></InstagramIcon>
                    </IconButton>
                </a>

                <a href="https://www.facebook.com/<username>" target='_blank' rel="noopener noreferrer">
                    <IconButton>
                        <FacebookIcon  className='styleicon'></FacebookIcon>
                    </IconButton>
                </a>

                <a href="https://twitter.com/<username>" target='_blank' rel="noopener noreferrer">
                    <IconButton> 
                        <TwitterIcon  className='styleicon'></TwitterIcon>
                    </IconButton>
                </a> 

                <a href="https://www.pinterest.com/<username>/" target='_blank' rel="noopener noreferrer">
                    <IconButton>
                        <PinterestIcon  className='styleicon'></PinterestIcon>
                    </IconButton> 
                </a> 

                <a href="https://www.youtube.com" target='_blank' rel="noopener noreferrer">
                    <IconButton>
                        <YouTubeIcon className='styleicon'></YouTubeIcon>
                    </IconButton>
                </a>      */}
             </div>
             
        </div>
        <div className='copyrightcont'>
                <p>Copyright © 2024 </p>
        </div>
    </>
  )
}

export default Footer