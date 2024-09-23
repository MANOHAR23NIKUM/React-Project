import { Button,FormControl, FormGroup, InputLabel,Input, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'

const Container=styled(FormGroup)`
width:50%;
margin:5% 0 0 25%;
& >div{
margin-top:20px;
}
& >Button{
    margin-top:10px;

}
`
const initialValue={
    username:'',
    password:'',
    email:'',
    city:'',
    phone:'',
};

const AddUser = () => {
    const [user,setUser]=useState(initialValue);

    // const [formData,setFormData]=useState(initialValue);
    const[errors,setErrors]=useState({});
   
    const navigate=useNavigate();

    const onValueChange=(e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
   
    } 


const validateForm=(data)=>{
    const errors={};

    if (!data.username.trim()){
        errors.username="Username is required";
    }
    
    if(!data.password.trim()){
            errors.password="Password is required";
        }else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/.test(data.password)){
            errors.password="Password is Invalid"
        }

    if(!data.email.trim()){
        errors.email="Email is required";
    }else if (!/^\S+@\S+\.\S+$/.test(data.email)){
        errors.email="Email is Invalid"
    }
    
    if(!data.city.trim()){
        errors.city="City is required";
    }
    
    if(!data.phone.trim()){
        errors.phone="Contact no  is required";
    }else if (!/^\d{10}$/.test(data.phone)){
        errors.phone="Conatct number must be 10 digits"
    }

    return errors;
        
};


const addUserDetails=async()=>{
   
    // api call
    const newErrors=validateForm(user);
    setErrors(newErrors);
    
    // Check if there is no errors
    if (Object.keys(newErrors).length === 0){
        await addUser(user);
        alert("Form Submitted Successfully");
        navigate('/all')
    }else{
        alert("form Submission Failed due to valiadtion errors");
    }
   
}


return (
    <div>
        <Container sx={{marginBottom:'30px'}}>

        <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Username:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='username' value={user.username}/>
                {errors.username && <span className='error-message' style={{color:'red'}}>{errors.username}</span>}
            </FormControl>
            <FormControl>
                <InputLabel>Password:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='password' value={user.password}/>
                {errors.password && <span className='error-message' style={{color:'red'}}>{errors.password}</span>}
            </FormControl>

            <FormControl>
                <InputLabel>Email:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={user.email}/>
                {errors.email && <span className='error-message' style={{color:'red'}}>{errors.email}</span>}
            </FormControl>

            <FormControl>
                <InputLabel>City:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='city' value={user.city}/>
                {errors.city && <span className='error-message' style={{color:'red'}} >{errors.city}</span>}
            </FormControl>

            <FormControl>
                <InputLabel>Contact No:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone}/>
                {errors.phone && <span className='error-message' style={{color:'red'}} >{errors.phone}</span>}
            </FormControl>

            <Button variant="contained" onClick={addUserDetails}>Submit</Button>
        </Container>
    </div>
  )
}

export default AddUser





// import React, { useState } from 'react';
// import Axios from 'axios';
// import { Container, Typography, FormControl, InputLabel, Input, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import '../style/SignUp.css';
// const SignUp = () => {
//   const url = "http://127.0.0.1:8080/SignUpUser";
//   const initialState = {
//     username: '',
//     password: '',
//     city: '',
//     contactno: '',
//     gender: ''
//   };

//   const [data, setData] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [submissionMessage, setSubmissionMessage] = useState('');

//   const validate=(data)=>{
//         const errors={};
    
//         if (!data.username.trim()){
//             errors.username="Username is required";
//         }
        
//         if(!data.password.trim()){
//             errors.password="Password is required";
//         }else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/.test(data.password)){
//             errors.password="Password is Invalid"
//         }
        
//         if(!data.city.trim()){
//             errors.city="City is required";
//         }
        
//         if(!data.contactno.trim()){
//             errors.contactno="Contact no  is required";
//         }else if (!/^\d{10}$/.test(data.contactno)){
//             errors.contactno="Conatct number must be 10 digits"
//         }
//         if(!data.gender.trim()){
//           errors.gender="Gender is Required"
//         }
//         return errors;
            
//     };
    

//   const submit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate(data);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       Axios.post(url, data)
//         .then(res => {
//           setSubmissionMessage('User signed up successfully!');
//           setData(initialState);
//           setErrors({});
//         })
//         .catch(err => {
//           setSubmissionMessage('Error signing up: ' + err.message);
//         });
//     }
//   };

//   const handle = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//     setErrors({ ...errors, [name]: '' }); // Clear error for the field being edited
//   };

//   return (
//     <div className='signupform'>
//       <Container>
//         <Typography variant='h4' sx={{marginBottom:'2%'}}>Sign Up</Typography>
//         <form onSubmit={submit} >
//           <FormControl fullWidth sx={{ marginBottom: 1 }}>
//             <InputLabel>Username</InputLabel>
//             <Input onChange={handle} name='username' value={data.username} />
//             {errors.username && <span className='error-message' style={{ color: 'red' }}>{errors.username}</span>}
//           </FormControl>

//           <FormControl fullWidth sx={{ marginBottom: 1 }}>
//             <InputLabel>Password</InputLabel>
//             <Input type="password" onChange={handle} name='password' value={data.password} />
//             {errors.password && <span className='error-message' style={{ color: 'red' }}>{errors.password}</span>}
//           </FormControl>

//           <FormControl fullWidth sx={{ marginBottom: 1 }}>
//             <InputLabel>City</InputLabel>
//             <Input onChange={handle} name='city' value={data.city} />
//             {errors.city && <span className='error-message' style={{ color: 'red' }}>{errors.city}</span>}
//           </FormControl>

//           <FormControl fullWidth sx={{ marginBottom: 1 }}>
//             <InputLabel>Contact No</InputLabel>
//             <Input onChange={handle} name='contactno' value={data.contactno} />
//             {errors.contactno && <span className='error-message' style={{ color: 'red' }}>{errors.contactno}</span>}
//           </FormControl>

//           <FormControl sx={{ marginTop: 2, marginLeft: 2 }}>
//             <RadioGroup row name="gender" value={data.gender} onChange={handle}>
//               <FormControlLabel value="female" control={<Radio />} label="Female" />
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
//               <FormControlLabel value="other" control={<Radio />} label="Other" />
//             </RadioGroup>
//             {errors.gender && <span className='error-message' style={{ color: 'red' }}>{errors.gender}</span>}
//           </FormControl><br/><br/>

//           <Button variant="contained" type="submit">Submit</Button>
//         </form>

//         {submissionMessage && <div style={{ color: 'green', marginTop: '20px' }}>{submissionMessage}</div>}
//       </Container>
//     </div>
//   );
// };

// export default SignUp;


