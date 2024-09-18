// import React , {useState} from 'react';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { addUser } from '../service/api';
// import { useNavigate } from 'react-router-dom';


import { Button,FormControl, FormGroup, InputLabel,Input, styled, Typography, FormControlLabel, Radio, FormLabel, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';
import { Axios } from 'axios';

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

const  SignUp = () =>{

  const url = "http://127.0.0.1:8080/SignUpUser";
  const initialState={
    username:'',
    password:'',
    city:'',
    contactno:'',
    gender:''
};

  const [data, setData] = useState(initialState);

    const[errors,setErrors]=useState({});
   
    // const navigate=useNavigate();

    const validate = () => {
      const errors = {};
      if (!data.username) errors.username = 'Username is required';
      if (!data.password) errors.password = 'Password is required';
      if (!data.city) errors.city = 'City is required';
      if (!data.contactno) errors.contactno = 'Contact No is required';
      if (!data.gender) errors.gender = 'Gender is required';
      return errors;
    };

    function submit(e){
      e.preventDefault();
      Axios.post(url,{
        username:data.username ,
        password:data.password ,
        city:data.city,
        contactno:data.contactno,
        gender: data.gender
      })
      .then(res =>{
        console.log(res.data);
        setData(initialState);
      })
     
    }

    function handle(e){
        // const newdata={...data}
        // newdata[e.target.id] = e.target.value
        // setData(newdata)
        // console.log(newdata);

        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }



//   const validateForm=(data)=>{
//     const errors={};

//     if (!data.username.trim()){
//         errors.username="Username is required";
//     }
    
//     if(!data.password.trim()){
//         errors.password="Password is required";
//     }else if (!"^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$".test(data.password)){
//         errors.password="Password is Invalid"
//     }
    
//     if(!data.city.trim()){
//         errors.city="City is required";
//     }
    
//     if(!data.contact.trim()){
//         errors.contact="Contact no  is required";
//     }else if (!/^\d{10}$/.test(data.contact)){
//         errors.contact="Conatct number must be 10 digits"
//     }
//     if(!data.gender.trim()){}
//     return errors;
        
// };



  return (
    <div>
    <Container sx={{marginBottom:'30px'}}>

    <Typography variant='h4'>Sign Up</Typography>
 
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => handle(e)} name='username' value={data.username}/>
            {errors.username && <span className='error-message' style={{color:'red'}}>{errors.username}</span>}
        </FormControl>
        <FormControl>
            <InputLabel>Password</InputLabel>
            <Input onChange={(e) => handle(e)} name='password' value={data.password}/>
            {errors.password && <span className='error-message' style={{color:'red'}}>{errors.password}</span>}
        </FormControl>
         
        <FormControl>
            <InputLabel>City</InputLabel>
            <Input onChange={(e) => handle(e)} name='city' value={data.city}/>
            {errors.city && <span className='error-message' style={{color:'red'}} >{errors.city}</span>}
        </FormControl>

        <FormControl>
            <InputLabel>Contact No</InputLabel>
            <Input onChange={(e) => handle(e)} name='contactno' value={data.contactno}/>
            {errors.contactno && <span className='error-message' style={{color:'red'}} >{errors.contactno}</span>}
        </FormControl>
        <FormControl sx={{marginTop: 2, marginLeft:2}}>
                 {/* <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'blue', fontSize:20}}>Gender</FormLabel> */}
                   <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="gender" value={data.gender} onChange={(e) => handle(e)}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    {errors.gender && <span className='error-message' style={{color:'red'}} >{errors.gender}</span>}
              </FormControl>

        <Button variant="contained" type='submit' >Submit</Button>
    </Container>
</div>
    // <ThemeProvider theme={defaultTheme}>
    //   <Container component="main" maxWidth="xs" sx={{marginBottom:'20px'}}>
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 4,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //         backgroundColor:'rgb(178, 190, 181)',
    //         paddingLeft:5,
    //         paddingRight:5,
    //         pb:3,
    //         borderRadius:3,
    //       }}
    //     >
    //       {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //         <LockOutlinedIcon />
    //       </Avatar> */}
    //       <Typography component="h1" variant="h4" sx={{marginTop:'3px'}}>
    //         Sign up
    //       </Typography>
    //       <Box component="form" noValidate onChange={(e)=>onValueChange(e)} sx={{ mt: 3 }}>
    //         <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="username"
    //               label="Username"
    //               name="username"
    //               autoComplete="username" 
    //               value={user.username}
    //             />
    //             {errors.username && <span className='error-message' style={{color:'red'}}>{errors.username}</span>}
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="new-password"
    //               value={user.password}
    //             />
    //             {errors.password && <span className='error-message' style={{color:'red'}}>{errors.password}</span>}
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               autoComplete="given-name"
    //               name="contact"
    //               required
    //               fullWidth
    //               id="contact"
    //               label="Contact"
    //               autoFocus
    //               value={user.contact}
    //             />
    //             {errors.contact && <span className='error-message' style={{color:'red'}}>{errors.contact}</span>}
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="city"
    //               label="City"
    //               name="city"
    //               autoComplete="city"
    //               value={user.city}
                  
    //             />
    //             {errors.city && <span className='error-message' style={{color:'red'}}>{errors.city}</span>}
    //           </Grid>
    //           <FormControl sx={{
    //               marginTop: 2,
    //               marginLeft:2
    //         }}>
    //              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'blue', fontSize:20}}>Gender</FormLabel>
    //                 <RadioGroup
    //                     row
    //                     aria-labelledby="demo-row-radio-buttons-group-label"
    //                     name="row-radio-buttons-group"
    //                 >
    //                     <FormControlLabel value="female" control={<Radio />} label="Female" />
    //                     <FormControlLabel value="male" control={<Radio />} label="Male" />
    //                     <FormControlLabel value="other" control={<Radio />} label="Other" />
    //                 </RadioGroup>
    //           </FormControl>
              
    //           {/* <Grid item xs={12}>
    //             <FormControlLabel
    //               control={<Checkbox value="allowExtraEmails" color="primary" />}
    //               label="I want to receive inspiration, marketing promotions and updates via email."
    //             />
    //           </Grid> */}
    //         </Grid>
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //           onClick={addUserDetails}
    //         >
    //           Sign Up
    //         </Button>
    //         <Grid container justifyContent="flex-end">
    //           <Grid item>
    //             <Link href="#" variant="body2">
    //               Already have an account? Sign in
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //   </Container>
    // </ThemeProvider>
  );
}
export default SignUp