import React from 'react';
import {useState} from 'react';
import {Box, Button} from '@mui/material';
import Hero from './Hero.jsx';
import Search from './Search.jsx';
import Exercise from './Exercise.jsx';
import axios from 'axios';

const Home=()=>{
  const[exercises, setExercise]=useState([]);
  const [bodyPart, setBodyPart]=useState('empty');
  const [status,setStatus]=useState('pink');



  const handleClick=(event) =>{
    event.preventDefault();
    axios.get('./getLike')
    .then( (response)=>{
      console.log('favorite', response.data.length);
      setStatus('red');
      setExercise(response.data);

    })
    .catch( (err)=>{
      alert(err);
    })
  }

  return (
   <Box>
     <Hero />
     <Search setExercise={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart} setStatus={setStatus}/>
     <Button  variant='outlined' sx={{mt:{lg:'100px', xs:'50px'}, ml:'100px', color:'black', bgcolor:'FF7F50', fontSize:'12px', borderRadius:'10px', textTransform:'capitalize',
        ":hover":{
        fontSize:'0.9em'
        }}} onClick={(event)=>{handleClick(event)}}>
      Show Your Favorite
    </Button>
     <Exercise setExercise={setExercise} status={status} setStatus={setStatus} exercises={exercises} bodyPart={bodyPart}/>
   </Box>
  )
}

export default Home