import React, { useState } from 'react'
import '../style/Contact.css'
import { Button, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { addUser } from '../service/api';


const initialValue = {
username:'',
email:'',
phone:'',
message:''
}

const Contact = () => {
   
  const [user,setUser]=useState(initialValue);
  
  const onValueChange=(e)=>{
      e.preventDefault();
      setUser({...user,[e.target.name]:e.target.value});
      console.log(user);
  }
  const addUserDetails=async()=>{
     await addUser(user);
  }


  return (
    <>
      <h1>Connecting With you</h1>
        <div className='main'>
            <div className='contactform'>
            <form>
                <h2>Request a Consultation</h2>
                <input type="text" onChange={(e)=>onValueChange(e)} name='username' placeholder='Name' /><br/><br/>
              
                <input type="email" onChange={(e)=>onValueChange(e)} name='email' placeholder='Email'/><br/><br/>
               
                <input type="text" onChange={(e)=>onValueChange(e)} name='phone' placeholder='Phone Number'/><br/><br/>

                <textarea onChange={(e)=>onValueChange(e)} name='message' placeholder='Message'rows="4" cols="50"  maxlength="1000" ></textarea><br/><br/>

                <Button variant="contained" onClick={addUserDetails}>Send</Button>
            </form>
            </div>
            <div className='contactinfo'>    
                 <div>
                  <h2>Get In Touch</h2>
                   Phone:283493809
                   Fax:82932098<br/>
                   contacteducation@gmail.com
                 </div>
                 <div>
                      <h2>Hours</h2>
                      <p>ChandanNagar Shivraj Chowk, Pune</p>
                 </div>
                 <div className='socialmediaicons'>
                    <h3>Follow Us</h3>
                    <Link color="inherit" target="_blank" href="https://wa.me/+919763858978">
                         <WhatsAppIcon className='styleicon'   style={{ fontSize: 33 }} />
                 </Link>
                 <Link color="inherit" target="_blank" href="https:www.instagram.com/instagram/">
                         <InstagramIcon  className='styleicon' style={{ fontSize: 33 }} ></InstagramIcon>
                 </Link>
                 <Link color="inherit" target="_blank" href="https:www.facebook.com/<username>">
                     <FacebookIcon  className='styleicon' style={{ fontSize: 33 }} ></FacebookIcon>
                 </Link>
                 <Link color="inherit" target="_blank" href="https:twitter.com/<username>">
                     <TwitterIcon  className='styleicon' style={{ fontSize: 33 }} ></TwitterIcon>
                 </Link>
                        
                <Link color="inherit" target="_blank" href="https://www.pinterest.com/<username>/">
                    <PinterestIcon  className='styleicon' style={{ fontSize: 33 }} ></PinterestIcon>
                </Link>

                <Link color="inherit" target="_blank" href="https://www.youtube.com">
                    <YouTubeIcon className='styleicon' style={{ fontSize: 33 }} ></YouTubeIcon>
                </Link>
                 </div>
            </div>
        </div>
        
    </> 
    
  )
}

export default Contact;