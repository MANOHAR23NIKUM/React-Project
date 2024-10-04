import { Button, FormControl, FormGroup, InputLabel, Input, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 40%;
  margin: 0 auto;
  margin-bottom: 5%;
  margin-top: 5%;
  background-color: white;
  padding: 2%;
  border-radius: 2%;
  box-shadow: 0 1px 9px rgb(184, 168, 168);
  & > div {
    margin-top: 10px;
  }
  & > Button {
    margin-top: 10px;
  }
`;

const initialValue = {
  adminname: '',
  adminpassword: ''
};

const AddUser = () => {
  const [admin, setAdmin] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [adminList, setAdminList] = useState([]);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    e.preventDefault();
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getAdminDetails();
  }, []);

  const getAdminDetails = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/admin'); 
      console.log(response);
      const data = await response.json();
      setAdminList(data);
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.adminname?.trim()) {
      errors.adminname = "Username is required";
    }
    if (!data.adminpassword?.trim()) {
      errors.adminpassword = "Password is required";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/.test(data.adminpassword)) {
      errors.adminpassword = "Password is Invalid";
    }

    return errors;
  };

  const adminExists = (data) => {
    return adminList.some(admin => 
      admin.adminname === data.adminname &&
      admin.adminpassword === data.adminpassword
    );
  };

  const addUserDetails = async () => {
    const newErrors = validateForm(admin);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (adminExists(admin)) {
        alert("Login Successful");
        navigate('/all');
      } else {
        alert("Your data is not valid.");
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
          <Input onChange={onValueChange} name='adminname' value={admin.adminname} />
          {errors.adminname && <span className='error-message' style={{ color: 'red' }}>{errors.adminname}</span>}
        </FormControl>
        <FormControl>
          <InputLabel>Password:</InputLabel>
          <Input onChange={onValueChange} name='adminpassword' value={admin.adminpassword} />
          {errors.adminpassword && <span className='error-message' style={{ color: 'red' }}>{errors.adminpassword}</span>}
        </FormControl>

        <Button variant="contained" onClick={addUserDetails}>Login</Button>
      </Container>
    </div>
  );
};

export default AddUser;

























