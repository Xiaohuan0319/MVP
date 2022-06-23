require("dotenv").config();
const controller= require('./controller');
const axios=require('axios');
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static('client/dist'));
app.listen(3000);

app.post('/addLike', controller.post);
app.delete('/removeLike', controller.delete);
app.get('/getLike', controller.get);



// const options = {
//   headers: {
//     'X-RapidAPI-Key':process.env.key,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// app.get('/exercise',(req, res)=>{
//   console.log('test1');
//   axios.get('https://exercisedb.p.rapidapi.com/exercises', options)
//   .then ((response)=>{

//     res.status(200).send(response);
//   })
//   .catch( (err)=>{
//     res.status(400).send(err);
//   })
//   }
// )

// app.get('/bodyPart', (req, res)=> {
//   console.log('test2');
//   axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
//   .then ( (response)=> {
//     res.status(200).send(response);
//   })
//   .catch( (err)=> {
//     console.log(err);
//     res.status(400).send(err);
//   })
// })

