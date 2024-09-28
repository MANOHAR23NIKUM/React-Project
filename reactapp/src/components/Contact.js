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
  const [errors,setErrors] = useState({});

  function validate(){
    const newErrors = {};
    if(!data.contactuser.trim()) {
      newErrors.contactuser = "Name Is Required.";
    }
    if(!data.useremail){
       newErrors.useremail = "Email is Required.";
    }else if(!/\S+@\S+\.\S+/.test(data.useremail)){
         newErrors.useremail = "Email is inValid.";
    }
    if(!data.contact){
      newErrors.contact = "Contact is Required.";
   }else if(!/^\d{10}$/.test(data.contact)){
        newErrors.contact = "Contact is inValid.";
   }
   if(!data.message){
    newErrors.message = "Message is Required.";
   }
   return newErrors;
  }

    function submit(e){
      e.preventDefault();
      const validationErrors = validate();
      if(Object.keys(validationErrors).length){
        setErrors(validationErrors);
        alert("form Submission Failed due to valiadtion errors")
        return;
      }else{
        alert("Form Submitted Successfully");
      }

      Axios.post(url,{
        contactuser:data.contactuser ,
        useremail:data.useremail ,
        contact:data.contact ,
        message: data.message
      })
      .then(res =>{
        console.log(res.data);
        setData(initialState);
        setErrors({});
      })
      .catch(err =>{
        console.error(err);
      })
     
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata);
        setErrors(prevErrors => ({...prevErrors,[e.target.id]: undefined}));
    }


  return (
    <>
      <h1 style={{margin:'1%',textAlign:'center'}}>Connecting With you</h1>
        <div className='main'>
        <div className='contactform'>
            <form onSubmit={(e)=>submit(e)}>
                <h2>Request a Consultation</h2>
                <input type="text" onChange={(e) => handle(e)} className='inputfield' name='contactuser' id='contactuser'  value={data.contactuser} placeholder='Name'/>
                       {errors.contactuser && <span className='error'>{errors.contactuser}</span>}<br/>
              
                <input type="text" onChange={(e) => handle(e)} className='inputfield' name='useremail'id='useremail'  value={data.useremail} placeholder='Email'/>
                {errors.useremail && <span className='error'>{errors.useremail}</span>} <br/>
               
                <input type="tel" onChange={(e) => handle(e)} className='inputfield' name='contact' id='contact'  value={data.contact} placeholder='Phone Number'/>
                {errors.contact && <span className='error'>{errors.contact}</span>}<br/>

                <textarea onChange={(e) => handle(e)} name='message' id='message'  value={data.message} placeholder='Message'rows="4" cols="50" ></textarea>
                {errors.message && <span className='error'>{errors.message}</span>}<br/>

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
                     <span style={{fontSize:'20px',textDecoration:'none'}}>contacteducation@gmail.com</span>
                  </Link>
                 </div>
                 <div style={{margin:'10px 0'}}>
                      <h2>Address</h2>
                      <LocationOnIcon></LocationOnIcon><span style={{fontSize:'20px'}}>ChandanNagar Shivraj Chowk, Pune</span>
                 </div>
            </div>
        </div>
        <div className='googlemap'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2744768012203!2d73.93148536051855!3d18.
                     56166033246701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c15fa5d003c7%3A0xcd3687c31ff8
                     1bcb!2sShivraj%20Chowk%2C%20Bhaji%20Market%2C%20Chandan%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!
                     5e0!3m2!1sen!2sin!4v1727166189331!5m2!1sen!2sin" 
                     width="100%" height="375"  style={{border:"0"}} allowFullScreen="" loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade" title='GoogleMap'></iframe>
        </div>
        
    </> 
    
  )
}

export default Contact;