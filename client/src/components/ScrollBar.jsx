import React from 'react';
import {Box} from '@mui/material';
import Card from './PartCard.jsx';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {useContext} from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


const ScrollBar=({data, setBodyPart, bodyPart})=>{

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

    return (
      <div disabled={isFirstItemVisible} onClick={() => scrollPrev()} display='flex' top='50%' position='absolute'>
      <AiOutlineArrowLeft />
      </div>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

    return (
      <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
       <AiOutlineArrowRight/>
      </div>
    );
  }


  return (
    <Box sx={{ml:{sm:'100px'}, mr:{sm:'100px'}, mt:{sm:'50px'}}}>
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow} sx={{mb:{sm:'50px'}}}>

    {data.map ((part, index)=>(
      <Card key={index} part={part} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      )
    )}

   </ScrollMenu>
   </Box>
  )
}

export default ScrollBar;