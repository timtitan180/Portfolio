const express = require('express');

const mongoose = require("mongoose");

const nodemailer = require('nodemailer');


require('dotenv').config();


const portfolioViewer = require('./model/portfolioViewer.js');

const fs = require('fs');

const path = require('path');


const app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.json());

const router = express.Router();

app.use(express.static(path.join(__dirname,"public")));

mongoose.connect("mongodb://localhost:27017/portfolioViewerdb",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("MONGOODB IS connected and ready to save data...")}).catch((err)=>{console.log(err)});

const port = 4541;


router.get('/',(req,res)=>{
  
  res.sendFile(fs.readFile("index.html"));
});

router.get('/contactpage',(req,res)=>{
  res.sendFile(fs.readFile("index.html"));
});

app.post('/contact_page',(req,res)=>{

  var email = req.body.email;
   var companyName = req.body.companyName;
   var message = req.body.message;


  var transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'timtudosa6@gmail.com',
      pass: process.env.password
    }
  });

  var mailOptions = {
    from:email,
    to:"timtudosa6@gmail.com",
    text:message
  }
  
  transporter.sendMail(mailOptions,(err)=>{
    if(err) {
      console.log("There was an error submitting the form.");
    }
  });

   if(email.length > 0 || companyName.length > 0 || message.length > 0) {
      inputsNotEntered = false;
       console.log(email);
       console.log(companyName);
       console.log(message);
      //  portfolioViewer({email:email,companyName:companyName,message:message},()=>{
      //        portfolioViewer.save().then(()=>{console.log(portfolioViewer)}).catch((err)=>{
      //          console.log("Could not retrieve added data");
      //          console.log(err);
      //        });
      //        console.log(portfolioViewer);
      //        res.redirect("/contactpage");
      //  });
     }
     else {
       res.redirect('/');
       console.log("Could not get form");
     }
  
     
     res.sendFile(fs.readFile("index.html"));
 });

router.get('/elements',(req,res)=>{
  res.sendFile(fs.readFile("index.html"));
});


app.listen(port,(req,res)=>{
  try {
    console.log(`Server listening on port ${port}`);
  }

  catch(e) {
    console.log(e);
  }
});

