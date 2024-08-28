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
contactuser:'',
useremail:'',
contact:'',
message:''
}

const Contact = () => {
   
  const [contactus,setContactUs]=useState(initialValue);
  
  const onValueChange=(e)=>{
      
      setContactUs({...contactus,[e.target.name]:e.target.value});
      console.log(contactus);
  }


  const onSubmit = async(e)=>{
    e.preventDefault();
    try{
        await addUser(contactus);
        alert('Details Submitted Successfully');
        setContactUs(initialValue); 
    }catch(error){
        console.log('Error adding user :' ,error);
    }
     
  }


  return (
    <>
      <h1>Connecting With you</h1>
        <div className='main'>
            <div className='contactform'>
            <form onSubmit={onSubmit}>
                <h2>Request a Consultation</h2>
                <input type="text" onChange={onValueChange} name='contactuser'   value={contactus.contactuser} placeholder='Name' required/><br/><br/>
              
                <input type="email" onChange={onValueChange} name='useremail'  value={contactus.useremail} placeholder='Email' required/><br/><br/>
               
                <input type="tel" onChange={onValueChange} name='contact'   value={contactus.contact} placeholder='Phone Number' required/><br/><br/>

                <textarea onChange={onValueChange} name='message'   value={contactus.message} placeholder='Message'rows="4" cols="50" required></textarea><br/><br/>

                <Button variant="contained" type='submit'>Send</Button>
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