

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/exerciselist');

const workout=new mongoose.Schema( {
  bodyPart :String,
  equipment :String,
  gifUrl :String,
  exerciseId:String,
  nameE:String,
  targetE:String
})


const workouts=mongoose.model("workouts", workout);

module.exports=workouts;
