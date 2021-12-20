const express = require('express');

const mongoose = require("mongoose");

const request = require("request");

const nodemailer = require('nodemailer');


require('dotenv').config();


// const portfolioViewer = require('./model/portfolioViewer.js');

const fs = require('fs');

const path = require('path');


const app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

mongoose.connect("mongodb://localhost:27017/portfolioViewerdb",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("MONGOODB IS connected and ready to save data...")}).catch((err)=>{console.log(err)});

const port = process.env.PORT || 4541;


app.get('/',(req,res)=>{
  console.log("Website is live!");

  res.send("index.html");

});

app.get('/contactpage',(req,res)=>{
  res.sendFile(fs.readFile("index.html"));
});

app.post('/',(req,res)=>{
  console.log(req.body.email);
  console.log(req.body.message);
});


app.get('/elements',(req,res)=>{
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


//NodeMailer Send Emails from Contact Form
//   var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   smtp:"smtp.gmail.com",
//   host:587,
//   auth: {
//     user: 'timtudosa6',
//     pass: 'Cobrasnake150!!'//<-//You were here last time you signed in 
//   }
// });

// var mailOptions = {
//   from: 'timtudosa6@gmail.com',
//   to: 'timtudosa7@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }