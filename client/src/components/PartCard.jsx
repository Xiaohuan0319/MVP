import React from 'react';
import {Stack, Typography} from '@mui/material';
import {shadows} from '@mui/material';
import {IoMdFitness, IoIosFitness} from "react-icons/io";

const PartCard=({part, setBodyPart, bodyPart})=>{
var groupOne=['back', 'chest','lower legs', 'shoulders', 'upper legs'];
  return (
    <Stack type='button' alignItems='center' justifyContent='center' sx={ {
      mt:{ms:'50px'},
      ml:{sm:'50px'},
      mr:{sm:'50px'},
      borderTop: part===bodyPart? '3px solid #FF4500':'',
      background:'white',
      width:'180px',
      height:'200px',
      cursor:'pointer',
      gap:'30px',
      ":hover":{
        fontSize:'1.5em'
      }}}
      onClick={()=>{setBodyPart(part)}}>
     <Typography color='red' fontSize='2em'>
      {groupOne.includes(part)? <IoMdFitness />:<IoIosFitness/> }
     </Typography>
      <Typography fontWeight='bold'>
        {part}
      </Typography>

    </Stack>
  )
}

export default PartCard;