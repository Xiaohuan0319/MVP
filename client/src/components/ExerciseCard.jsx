import React from 'react';
import {Box, Button, Typography, Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { FcLikePlaceholder, FcLike} from "react-icons/fc";
import {IconContext} from 'react-icons';
import axios from 'axios';


const ExerciseCard=({exercise})=>{
 const [color, setColor]=useState('pink');


  console.log('exerciseincard',  status,color);

  const handleClick =(event, exercise) =>{
    event.preventDefault();
    console.log('postingggg',color);
    if(color==='pink') {
      axios.post('/addLike',exercise )
      .then ( (response)=>{
        console.log('added');
      })
      .catch( (err)=>{
        alert(err);
      })
    }else {
      axios.delete('/removeLike', {data:exercise})
      .then( (response)=>{
        console.log('added');
      })
      .catch((err)=>{
        aler(err)
      })
    }

  }

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
        <Button onClick={async (event)=>{ console.log('colorA', color) ; color==='pink'? await setColor('red'):await setColor('pink'); console.log('colorB', color); handleClick(event, exercise) }} fontSize='2em'>
          {color==='red'?<FcLike/>:<FcLikePlaceholder />}
        </Button>
      </Stack>
      <Typography mb='10px' mt='20px' ml='21px' color='black' fontWeight='bold' textTransform='capitalize' >
        {exercise.name||exercise.nameE}
      </Typography>


    </Box >

  )
}

export default ExerciseCard;