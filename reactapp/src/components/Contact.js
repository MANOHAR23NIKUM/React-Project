import React, { useState } from 'react'
import '../style/Contact.css'
import { Button, Link } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { addUser } from '../service/api';
import Axios from 'axios';


const Contact = () => {
  const url = "http://127.0.0.1:8080/contactus";

  const initialState = {
    contactuser: '',
    useremail: '',
    contact: '',
    message: ''
  };

  const [data, setData] = useState(initialState);

    function submit(e){
      e.preventDefault();
      Axios.post(url,{
        contactuser:data.contactuser ,
        useremail:data.useremail ,
        contact:data.contact ,
        message: data.message
      })
      .then(res =>{
        console.log(res.data);
        setData(initialState);
      })
     
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }


  return (
    <>
      <h1 style={{margin:'1%',textAlign:'center'}}>Connecting With you</h1>
        <div className='main'>
        <div className='contactform'>
            <form onSubmit={(e)=>submit(e)}>
                <h2>Request a Consultation</h2>
                <input type="text" onChange={(e) => handle(e)} name='contactuser' id='contactuser'  value={data.contactuser} placeholder='Name' required/><br/><br/>
              
                <input type="email" onChange={(e) => handle(e)} name='useremail'id='useremail'  value={data.useremail} placeholder='Email' required/><br/><br/>
               
                <input type="tel" onChange={(e) => handle(e)} name='contact' id='contact'  value={data.contact} placeholder='Phone Number' required/><br/><br/>

                <textarea onChange={(e) => handle(e)} name='message' id='message'  value={data.message} placeholder='Message'rows="4" cols="50" required></textarea><br/><br/>

                <Button variant="contained" type='submit'>Send</Button>
            </form>
            </div>
            <div className='contactinfo'>  
            <h2>Get In Touch</h2>  
                 <div style={{margin:'10px 0'}}>  
                <Link href="tel:+1234567890" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                       <PhoneIcon sx={{color:'black'}}></PhoneIcon>
                        <span style={{textDecoration:'none',color:'black',fontSize:'20px'}}>  +1234567890</span>
                  </Link>
                 </div>
                <div style={{margin:'10px 0'}}>
                  <Link href="mailto:contacteducation@gmail.com" >
                     <EmailIcon sx={{color:'rgb(48, 108, 143)'}}></EmailIcon> 
                     <span style={{fontSize:'20px'}}>contacteducation@gmail.com</span>
                  </Link>
                 </div>
                 <div style={{margin:'10px 0'}}>
                      <h2>Address</h2>
                      <LocationOnIcon></LocationOnIcon><span style={{fontSize:'20px'}}>ChandanNagar Shivraj Chowk, Pune</span>
                 </div>
            </div>
        </div>
        
    </> 
    
  )
}

export default Contact;