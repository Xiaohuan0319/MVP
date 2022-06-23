

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './Home.jsx';
import ExerciseDetail from './ExerciseDetail.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const App=()=>{
  return (

    <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
      <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/excercise/:id' element={<ExerciseDetail/>} />
    </Routes>
    {/* <Footer /> */}
    </Router>
    </Box>
  )
}

export default App;