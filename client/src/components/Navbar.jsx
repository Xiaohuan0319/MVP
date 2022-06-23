import React from 'react';
import {Link} from 'react-router-dom';
import { Stack} from '@mui/material';


 const Navbar=()=>{
   return (
     <Stack direction='row' justifyContent='space-around' sx={{gap:{sm:'122px', xs:'40px'}, ml:{sm:'100px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}} px='20px'>
       <Link to='/'>
         <img src='https://cdn2.iconfinder.com/data/icons/heart-story-2/160/heart-exercise-512.png' alt='logo' style={{
           width:'80px', height:'80px', margin:'0 20px'}} />
       </Link>
       <Stack direction='row' gap='40px' fontSize='24ox' alignItems='center'>
         <Link to='/' style={{textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625',fontWeight:'bold'}}> Home</Link>
         <a href='#exercises' style={{textDecoration:'none', color:'#3A1212',fontWeight:'bold'}} >Exercises</a>
       </Stack>
     </Stack>

   )
 }

 export default Navbar