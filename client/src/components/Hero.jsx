import React from 'react';
import  { Box , Stack, Typography, Button} from '@mui/material';


const Hero=()=>{

  return (

   <Box sx={{ mt:{lg:'120px', xs:'50px'}, ml:{sm:'100px'} }} postition= 'relative' p='20px'>
  <Stack direction='row' spacing={20}>
  <Stack width='300px'>
 <Typography color="#FF6347" frontWeight= '600' fontSize='26px'>
   Fitness Club
 </Typography>
<Typography color='black' frontWeight='700' sx={{ fontSize: {lg:'50px', xs: '40px'} }}>
  EAT SLEEP WORKOUT REPEAT
</Typography>
<Typography fontSize='20px' lineHeight='30px' mb='5px'>
  Check out the most effective excercises
</Typography>
<Button variant="contained" sx={{backgroundColor:'#FFA500'}} color='error' href='#exercises'>Excercise</Button>
<Typography frontWeight={600} color="#ff2625" sx={{ opacity: 0.1, display: {lg:'block', xs:'none'}}} fontSize='200px'>
Excercise
</Typography>
</Stack>

<Stack>
<img src="https://res.cloudinary.com/dzyzvdzj0/image/upload/v1655758943/mainImg_ofikcz.jpg" alt='banner' className='hero' width='800px' display='flex' position='absolute' justifyContent='right'/>
</Stack>
</Stack>
</Box>
  )
}

export default Hero;