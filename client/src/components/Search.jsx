import React from 'react';
import {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import axios from 'axios';
import ScrollBar from './ScrollBar.jsx';

const Search=({ setExercise, bodyPart, setBodyPart, setStatus})=>{

const [search, setSearch]=useState('');
const [bodyParts, setBody]=useState([]);

const options = {
  headers: {
    'X-RapidAPI-Key':'388e7b6df4msh603578a4dcca278p11a89ajsn8942c3b9335d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

useEffect ( ()=> {
  axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
  .then( (response)=> {
   setBody(response.data);
  })
  .catch( (err)=> {
    alert('err geting body part');
  })
}, bodyParts);

var handleSearch=(event)=> {
  console.log('searrrr world', search);
  if(search.length>0) {
    axios.get('https://exercisedb.p.rapidapi.com/exercises', options)
   .then( (response)=> {
     var filtered=[];
     response.data.map((excerise) => {
      if(excerise.bodyPart.toLowerCase().includes(search)
      ||excerise.equipment.toLowerCase().includes(search)
      ||excerise.gifUrl.toLowerCase().includes(search)
      ||excerise.name.toLowerCase().includes(search)
      ||excerise.target.toLowerCase().includes(search)
      ) {
       filtered.push(excerise);
      }
    })
      setStatus('pink');
      setExercise(filtered);
  })
   .catch( (err)=>{
     alert('500 geting data')
   })
  }
}
  return (
    <div >
      <Stack alignItems='center' justifyContent='center'  p='20px'>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px', sx:'40px'}, mb:'50px'}} textAlight='center' >
          Great Exercises You Cannot Miss
        </Typography>
        <Box>
          <TextField vale={search} onChange={(event)=>{setSearch(event.target.value.toLowerCase())} } placeholder='search..' type='text' variant='outlined' sx={{width: {lg:'1000px',xs:'350px'}, borderRadius:'40px' }} />
          <Button variant='contained' sx={{ bgcolor:"#FFA500", color:'white', textTransform:'none', width:{lg:'175px', xs:'80px'}, fontSize:{lg:'20px', xs:'14px'}, height:'55px', postion: 'relative', ml:'10px', right:'0'}} onClick={(event)=>{handleSearch(event)}}>
            Search
          </Button>
        </Box>
      </Stack>
      <Box>
      {bodyParts.length>0? <ScrollBar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart}/>:null
      }
      </Box >
    </div>
  )
}

export default Search;