// import { Button,FormControl, FormGroup, InputLabel,Input, styled, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { editUser, getSingleUser } from '../service/api'

// const Container=styled(FormGroup)`
// width:50%;
// margin:5% 0 0 25%;
// & >div{
// margin-top:20px;
// }
// `
// const initialValue={
//     username:'',
//     email:'',
//     city:'',
//     phone:'',
// }
// const EditUser = () => {
//     const [user,setUser]=useState(initialValue);
   
//     const navigate=useNavigate();

//     const {id}=useParams();

//     useEffect(()=>{
//       getSingleUserData();
//     },[]);

//     const getSingleUserData=async()=>{
//       let response=await getSingleUser(id);
//       // console.log(response);
//       setUser(response.data)
//     }
//     const onValueChange=(e)=>{
//         e.preventDefault();
//         setUser({...user,[e.target.username]:e.target.value});
//         console.log(user);
//     } 

// const addUserDetails=async()=>{
//     // api call
//     // await addUser(user);
//     await editUser(user,id);
//     navigate('/all')
// }
//   return (
//     <div>
//         <Container>

//         <Typography variant='h4'>Edit User</Typography>
//             <FormControl>
//                 <InputLabel>Name:</InputLabel>
//                 <Input onChange={(e)=>onValueChange(e)} name='username' value={user.username}/>
//             </FormControl>

//             <FormControl>
//                 <InputLabel>Email:</InputLabel>
//                 <Input onChange={(e)=>onValueChange(e)} name='email' value={user.email}/>
//             </FormControl>

//             <FormControl>
//                 <InputLabel>City:</InputLabel>
//                 <Input onChange={(e)=>onValueChange(e)} name='city' value={user.city}/>
//             </FormControl>

//             <FormControl>
//                 <InputLabel>Contact No:</InputLabel>
//                 <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone}/>
//             </FormControl>

//             <Button variant="contained" onClick={addUserDetails}>Submit</Button>
//         </Container>
//     </div>
//   )
// }

// export default EditUser



import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { addUser } from '../service/api'
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
    const navigate = useNavigate();
    const {id}=useParams();
    const [errors,setErrors]=useState({});

    useEffect(()=>{
      getSingleUserData();
    },[]);

 const getSingleUserData=async()=>{
  let response=await getSingleUser(id);
  // console.log(response);
  setUser(response.data);
 }

    const onValueChange=(e)=>{
        e.preventDefault();
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user)
    }

    const addUserDetails=async()=>{
        //api call

        // await addUser(user);
        // await editUser(user,id);
        await deleteUser(user,id);
        // navigate('/all');

        const newErrors=validateForm(user);
        setErrors(newErrors);

        //  proceed only if here are no validation errors
        if(Object.keys(newErrors).length === 0){
            await editUser(user);
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
      {/* <div>AddUser</div> */}
      <div> 
          <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={user.username}/>
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
                <InputLabel>ContactNo.</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone}/>
                {errors.phone && <span className='error-message' style={{ color:'red' }}>{errors.phone}</span>}

            </FormControl>

            <Button variant='contained' onClick={addUserDetails}>Submit</Button>
          </Container>
      </div>
      
    </>
    
  )
}

export default EditUser
