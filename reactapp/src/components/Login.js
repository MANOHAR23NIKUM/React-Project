import { Button, FormControl, FormGroup, InputLabel, Input, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {allUser } from '../service/api';
import { Link, useNavigate } from 'react-router-dom';

const Container=styled(FormGroup)`
width:40%;
margin:0 auto;
margin-bottom:5%;
margin-top:5%;
background-color:white;
padding:2%;
border-radius:2%;
box-shadow:0 1px 9px rgb(184, 168, 168);
& >div{
margin-top:10px;

}
& >Button{
    margin-top:10px;

}
`

const initialValue = {
  username: '',
  password:''
};


const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [userList , setUserList] = useState([]);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await allUser();
    console.log(response);
    setUserList(response.data);
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username?.trim()) {
      errors.username = "Username is required";
    }
    if(!data.password?.trim()){
        errors.password="Password is required";
    }else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/.test(data.password)){
        errors.password="Password is Invalid"
    }

    return errors;
  };

  const userExists = (data) => {
    return userList.some(user => 
      user.username === data.username &&
      user.password === data.password
    );
  };

  const addUserDetails = async () => {
    const newErrors = validateForm(user);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (userExists(user)) {
        alert("Login Successful");
        navigate('/home');
      } else {
        alert("Your data is not valid. Please sign up first.");
      }
    } else {
      alert("Form submission failed due to validation errors");
    }
  };

  return (
    <div>
      <Container>
        <Typography variant='h4'>User Login</Typography>
        <FormControl>
          <InputLabel>Username:</InputLabel>
          <Input onChange={onValueChange} name='username' value={user.username} />
          {errors.username && <span className='error-message' style={{ color: 'red'}}>{errors.username}</span>}
        </FormControl>
        <FormControl>
          <InputLabel>Password:</InputLabel>
          <Input onChange={onValueChange} name='password' value={user.password} />
          {errors.password && <span className='error-message' style={{ color: 'red'}}>{errors.password}</span>}
        </FormControl>

        <Button variant="contained" onClick={addUserDetails}>Login</Button>
        <p style={{textAlign:'right'}}>If you don't have account , Please <Link to="/signUp">SignUp</Link> </p>
      </Container>
    </div>
  );
}

export default AddUser;










