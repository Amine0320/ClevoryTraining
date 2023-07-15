const express = require("express")
const router = express.Router()
const Data = require('../models/data')
const multer = require('multer')
const { redirect } = require("react-router-dom")
filename = ""

const mystorage = multer.diskStorage({
  destination: './uploads',
  filename:(req,file,redirect)=>{
    let date = Date.now()
    let fl = date + '.' + file.mimetype.split('/')[1]
    redirect(null,fl)
    filename = fl
  }
})
const upload = multer({storage : mystorage})

router.post('/data',upload.any('image') ,async (req,res)=>{
  try{
    const tok = req.cookies.token;
    User.findOne({token:tok})
    .then((user)=>{
      if(user){
        if(user.admin==1){
          data = req.body
          Prd = new Data(data)
          Prd.image = filename
          savedprod =  Prd.save()
          filename = ''
          res.status(200).send("article enregistré")
       }
        else{
          res.status(200).send("tu n'est pas un admin")
        }
      }
      else{
        res.status(200).send("chalek bik")
      }
    })
  } catch (err){
    res.status(400).send(err)
  }
})

router.get("/getall" , async(req,res)=>{
  const tok = req.cookies.token;
  const result = []
  User.findOne({token:tok})
  .then((user)=>{
    result = user
  })
  if(result){
    if(result.admin==1){
      users = await Data.find()
      console.log(users)
      res.send(users)
    }
    else {
      res.send("tu n'est pas admin")
  }
  }
  else {
    res.send("tu n'est pas admin")
}


})
module.exports = router