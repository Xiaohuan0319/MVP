import React from 'react';
import {Box, Button, Typography, Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { FcLikePlaceholder, FcLike} from "react-icons/fc";
import {IconContext} from 'react-icons';
import axios from 'axios';


const Favorite=({exercise, setExercise})=>{
//console.log('check favorite list',exercise);
const [color, setColor]=useState('red');

// useEffect ( ()=> {
//   console.log('favoriteincard',color)
// })

const handleClick=(event, exercise) =>{
  event.preventDefault();
  axios.delete('/removeLike', {data:exercise})
  .then ( (response)=>{
    axios.get('./getLike')
    .then ( (response)=>{
      setExercise(response.data);
    })
    //console.log('deleted');
  })
  .catch((err)=>{
    aler(err)
  })

}


// add toggle
  // const handleClick =(event, exercise) =>{
  //   event.preventDefault();
  //   console.log('postingggg',color);
  //   if(color==='pink') {
  //     axios.post('/addLike',exercise )
  //     .then ( (response)=>{
  //       //console.log('added to favorite');
  //     })
  //     .catch( (err)=>{
  //       alert(err);
  //     })
  //   }else {
  //     axios.delete('/removeLike', {data:exercise})
  //     .then ( (response)=>{
  //       //console.log('deleted');
  //     })
  //     .catch((err)=>{
  //       aler(err)
  //     })
  //   }

  // }
  //console.log('colorrr',color);
 //console.log('new testttt', exercise, color);
  return (
    <Box  style= { { textDecoration: 'none' }}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Button  variant='outlined' sx={{ml:'21px', color:'black', bgcolor:'#FFA500', fontSize:'12px', borderRadius:'20px', textTransform:'capitalize',
        ":hover":{
        fontSize:'0.9em'
        }}}>
        {exercise.bodyPart}
        </Button>
        <Button  variant='outlined' sx={{ml:'21px', color:'black', bgcolor:'pink', fontSize:'12px', borderRadius:'20px', textTransform:'capitalize',
        ":hover":{
        fontSize:'0.9em'
        }}}>
        {exercise.target||exercise.targetE}
        </Button >
        {/* <Button onClick={async (event)=>{ console.log('colorA', color) ; color==='pink'? await setColor('red'):await setColor('pink'); console.log('colorB', color); handleClick(event, exercise) }}>
          {color==='red'?<FcLike/>:<FcLikePlaceholder />}
        </Button> */}
        <Button onClick={ (event)=> {handleClick(event, exercise)}} >
        <FcLike/>
        </Button>
      </Stack>
      <Typography mb='10px' mt='20px' ml='21px' color='black' fontWeight='bold' textTransform='capitalize' >
        {exercise.name||exercise.nameE}
      </Typography>


    </Box >

  )
}

export default Favorite;