import React from 'react';
import Pagination from '@mui/material/Pagination';
import {useEffect, useState} from 'react';
import {Box,Button, Stack, Typography} from '@mui/material' ;
import ExerciseCard from './ExerciseCard.jsx';
import Favorite from './Favorite.jsx';
import axios from 'axios';

const Exercise=({setExercise, bodyPart,exercises, status, setStatus})=>{
  console.log('exercessss', status);
  const[currentPage, setCurrentPage]=useState(1);
  var exercisePerPage=6;
  var colorFirst=0;
  const indexOfLast=currentPage*exercisePerPage;
  const indexOfFirst=indexOfLast-exercisePerPage;
  const currentExercises=exercises.slice(indexOfFirst, indexOfLast);

  const paginate=(event, value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1200,behavior:'smooth'});

  }

  const options = {
    headers: {
      'X-RapidAPI-Key':'388e7b6df4msh603578a4dcca278p11a89ajsn8942c3b9335d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  useEffect( ()=> {
    if(bodyPart!=='empty') {
      axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options)
      .then( (response)=> {
        console.log('getttt',response.data);
      setExercise(response.data);
      setStatus('pink');
      })
      .catch( (err)=> {
        alert('err geting body part');
      })
    }else {
      axios.get('https://exercisedb.p.rapidapi.com/exercises', options)
     .then( (response)=> {
       var samples=response.data.slice(0,6);
       console.log('sample', samples)
       setExercise(samples);
       setStatus('pink');
    })
    .catch( (err)=>{
      alert('err getting initial exercises')
    })
    }
  }, [bodyPart]);


  return (
  <Box id='exercises' sx={{mt:{lg:'50px', xs:'30px'}, ml:{sm:'50px'}, mr:{sm:'50px'}}} p='20px'>

  <Stack direction='row' sx={ {gap:{lg:'110px', xs: '50px'}}} justifyContent='center' flexWrap='wrap' >
    {status==='pink'?currentExercises.map ( (exercise, index)=> (

        <ExerciseCard key={index} exercise={exercise}  />
    ) ): currentExercises.map ( (exercise, index)=>(
      <Favorite key={index} exercise={exercise} setExercise={setExercise} />
    ))
    }
  </Stack>
  <Stack mt='100px' alignItems='center'>
    {exercises.length>4 &&(
      <Pagination color='standard' count={Math.ceil(exercises.length/exercisePerPage)} page={currentPage} onChange={paginate} />
    )
    }

  </Stack>
  </Box>
  )
}

export default Exercise;
