import { Button, FormControl, FormGroup, InputLabel, Input, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { addUser } from '../service/api';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
    margin-top: 20px;
  }
  & > Button {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const initialValue = {
  username: '',
  email: '',
  city: '',
  phone: '',
};

// Example valid users data (this would typically come from your database)
const validUsers = [
  { username: 'admin', password:'admin#123'  },
  { username: 'user1', password:'user1#12' },
];

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onValueChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Username is required";
    }
    if(!data.password.trim()){
        errors.password="Password is required";
    }else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/.test(data.password)){
        errors.password="Password is Invalid"
    }

    return errors;
  };

  const userExists = (data) => {
    return validUsers.some(user => 
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
        <Typography variant='h4'>Admin Login</Typography>
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





