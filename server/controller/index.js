
const db=require('../db');

module.exports={
  get: function (req,res) {
    db.find({})
    .exec()
    .then( (response)=>{
      res.status(200).send(response);
    })
    .catch( (err)=>{
      res.status(400).send(err);
    })
  },
  post: function (req, res) {
   var data=req.body;
   var dataUpdate={};
   dataUpdate.bodyPart=data.bodyPart;
   dataUpdate.equipment=data.equipment;
   dataUpdate.gifUrl=data.gifUrl;
   dataUpdate.exerciseId=data.id;
   dataUpdate.nameE=data.name;
   dataUpdate.targetE=data.target;

    db.create( dataUpdate)
    .then ( (response)=>{
      res.status(200).send('created');
    })
    .catch( (err)=>{
      res.status(500).send(err);
    })
  },
  delete: function (req, res) {
   console.log("delete", req.body)
    var name=req.body.nameE;

    var param={nameE:name};
    db.deleteOne(param)
    .exec()
    .then( (response)=>{
      res.status(202).send('delete');
    })
    .catch( (err)=>{
      res.status(500).send(err);
    })
  }
}