import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom';
import { getSingleUser ,editUser , deleteUser } from '../service/api';


const Container = styled(FormGroup)`
width:50%;
margin:5% 0 0 25%;
&>div{
    margin-top:20px;
}
&>button{
    margin-top:15px;
}
`
const initialValue = {
    username:'',
    email:'',
    city:'',
    phone:'',
}
const EditUser = () => {
    const [user,setUser]=useState(initialValue);
    const [errors,setErrors]=useState({});
    const navigate = useNavigate();
    const {id} = useParams();
    

    useEffect(()=>{
      getSingleUserData();
    },[]);

 const getSingleUserData=async()=>{
  let response = await getSingleUser(id);
  setUser(response.data);
 }

    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);    
    }

    const updateUserDetails = async() =>{

        const newErrors=validateForm(user);
        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0){
            await editUser(user,id);
            alert("Form Submitted Successfully");
            navigate('/all');
        }else{
            alert("Form submission failed due to validation error");
        }
    }

    const validateForm=(data)=>{
        const errors={};

        if(!data.username.trim()){
             errors.username ="Username is required";
        }

        if(!data.email.trim()){
            errors.email ="Email is required";
       }else if(!/^\S+@\S+\.\S+$/.test(data.email)){
            errors.email ="Email is Invalid";
        }

        if(!data.city.trim()){
            errors.city="City is required";
        }

        if(!data.phone.trim()){
            errors.phone="Contact number is required";
        }else if(!/^\d{10}$/.test(data.phone)){
            errors.phone = "Contact number must be 10 digits"
        }  
        return errors;     
};

  return (
    <>
      <div> 
          <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='username' value={user.username}/>
                {errors.username && <span className='error-message' style={{ color:'red' }}>{errors.username}</span>}

            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={user.email}/>
                {errors.email && <span className='error-message' style={{ color:'red' }}>{errors.email}</span>}

            </FormControl>

            <FormControl>
                <InputLabel>City</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='city' value={user.city}/>
                {errors.city && <span className='error-message' style={{ color:'red' }}>{errors.city}</span>}

            </FormControl>

            <FormControl>
                <InputLabel>Contact No.</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone}/>
                {errors.phone && <span className='error-message' style={{ color:'red' }}>{errors.phone}</span>}

            </FormControl>

            <Button variant='contained' onClick={updateUserDetails}>Submit</Button>
          </Container>
      </div>
      
    </>
    
  )
}

export default EditUser
