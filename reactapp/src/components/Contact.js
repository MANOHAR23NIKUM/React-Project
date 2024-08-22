import React from 'react'
import '../style/Contact.css'
import { Button } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Contact = () => {
  return (
    <>
      <h1>Connecting With you</h1>
        <div className='main'>
            <div className='contactform'>
            <form>
                <h2>Request a Consultation</h2>
                <input type="text" placeholder='Name'/><br/><br/>
              
                <input type="email" placeholder='Email'/><br/><br/>
               
                <input type="text" placeholder='Phone Number'/><br/><br/>

                <textarea placeholder='Message'rows="4" cols="50"  maxlength="1000"></textarea><br/><br/>

                <Button variant="contained">Send</Button>
            </form>
            </div>
            <div className='contactinfo'>    
                 <div>
                  <h2>Get In Touch</h2>
                   Phone : 283493809<br/>
                   Fax : 82932098<br/>
                   contacteducation@gmail.com
                 </div>
                 <div>
                      <h2>Hours</h2>
                      <p>ChandanNagar Shivraj Chowk, Pune</p>
                 </div>
                 <div className='socialmediaicons'>
                    <h3>Follow Us</h3>
                    
                    <InstagramIcon className='styleicons'></InstagramIcon>
                    <FacebookIcon className='styleicons'></FacebookIcon>
                    <TwitterIcon className='styleicons'></TwitterIcon>
                    <PinterestIcon className='styleicons'></PinterestIcon>
                    <WhatsAppIcon className='styleicons'></WhatsAppIcon>
                    <YouTubeIcon className='styleicons'></YouTubeIcon>
                 </div>
            </div>
        </div>
        
    </> 
    
  )
}

export default Contact