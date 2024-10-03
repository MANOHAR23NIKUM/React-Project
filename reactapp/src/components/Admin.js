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
      const response = await fetch('http://127.0.0.1:8080/admin'); // Update the path as necessary
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

























// import { Button, FormControl, FormGroup, InputLabel, Input, styled, Typography } from '@mui/material';
// import React, { useState } from 'react';
// // import { addUser } from '../service/api';
// import { useNavigate } from 'react-router-dom';

// const Container=styled(FormGroup)`
// width:40%;
// margin:0 auto;
// margin-bottom:5%;
// margin-top:5%;
// background-color:white;
// padding:2%;
// border-radius:2%;
// box-shadow:0 1px 9px rgb(184, 168, 168);
// & >div{
// margin-top:10px;

// }
// & >Button{
//     margin-top:10px;

// }
// `

// const initialValue = {
//   username: '',
//   password:''
// };

// // Example valid users data (this would typically come from your database)
// const validUsers = [
//   { username: 'admin', password:'admin#123'  },
//   { username: 'user1', password:'user1#12' },
// ];

// const AddUser = () => {
//   const [user, setUser] = useState(initialValue);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const onValueChange = (e) => {
//     e.preventDefault();
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const validateForm = (data) => {
//     const errors = {};

//     if (!data.username?.trim()) {
//       errors.username = "Username is required";
//     }
//     if(!data.password?.trim()){
//         errors.password="Password is required";
//     }else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/.test(data.password)){
//         errors.password="Password is Invalid";
//     }

//     return errors;
//   };

//   const userExists = (data) => {
//     return validUsers.some(user => 
//       user.username === data.username &&
//       user.password === data.password
//     );
//   };

//   const addUserDetails = async () => {
//     const newErrors = validateForm(user);
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       if (userExists(user)) {
//         alert("Login Successful");
//         navigate('/home');
//       } else {
//         alert("Your data is not valid. Please sign up first.");
//       }
//     } else {
//       alert("Form submission failed due to validation errors");
//     }
//   };

//   return (
//     <div>
//       <Container>
//         <Typography variant='h4'>Admin Login</Typography>
//         <FormControl>
//           <InputLabel>Username:</InputLabel>
//           <Input onChange={onValueChange} name='username' value={user.username} />
//           {errors.username && <span className='error-message' style={{ color: 'red'}}>{errors.username}</span>}
//         </FormControl>
//         <FormControl>
//           <InputLabel>Password:</InputLabel>
//           <Input onChange={onValueChange} name='password' value={user.password} />
//           {errors.password && <span className='error-message' style={{ color: 'red'}}>{errors.password}</span>}
//         </FormControl>

//         <Button variant="contained" onClick={addUserDetails}>Login</Button>
//         {/* <p style={{textAlign:'right'}}>If you don't have account , Please <Link to="/signUp">SignUp</Link> </p> */}
//       </Container>
//     </div>
//   );
// }

// export default AddUser;


