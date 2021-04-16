const express = require('express');

const mongoose = require("mongoose");

const nodemailer = require('nodemailer');

require('dotenv').config();

const fs = require('fs');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.json());

const router = express.Router();

app.use(express.static(path.join(__dirname,"public")));

mongoose.connect("mongodb://localhost:27017/portfolioViewerdb",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("MONGOODB IS connected and ready to save data...")}).catch((err)=>{console.log(err)});

const port = 4541;

const PortfolioViewerSchema = new mongoose.Schema({
  email:{type:String},companyName:{type:String},message:{type:String}
});

const PortfolioViewer = mongoose.model('portfolioviewer',PortfolioViewerSchema);


router.get('/',(req,res)=>{
  var transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'timtudosa6@gmail.com',
      pass: process.env.password
    }
  });

  var mailOptions = {
    from:"ovidiutudosa72@yahoo.com",
    to:"timtudosa18@yahoo.com",
    subject:"Portfolio Submitted Form",
    text:"Hello there"
  }
  
  transporter.sendMail(mailOptions,(err)=>{
    if(err) {
      console.log("There was an error submitting the form.");
    }
  });
  

  res.sendFile(fs.readFileSync("index.html"));
});

router.get('/contactpage',(req,res)=>{

  res.sendFile(fs.readFileSync("elements.html"));
});

app.post('/contactpage',(req,res)=>{
   var email = req.body.email;
   var companyName = req.body.companyName;
   var message = req.body.message;

   if(email.length > 0 || companyName.length > 0 || message.length > 0) {
      inputsNotEntered = false;
       console.log(email);
       console.log(companyName);
       console.log(message);
       newPortfolioViewer = new PortfolioViewer({email:email,companyName:companyName,message:message},()=>{
             newPortfolioViewer.save().then(()=>{console.log(newPortfolioViewer)});
             res.redirect("/contactpage");
       });
     }
     else {
       res.redirect('/contactpage');
       console.log("Could not get form");
     }
  
     
     res.sendFile("C:/Users/timtu/Desktop/MyPortfolio/public/elements.html");
 });

router.get('/elements',(req,res)=>{
  res.sendFile(fs.readFileSync("elements.html"));
});


app.listen(port,(req,res)=>{
  try {
    console.log(`Server listening on port ${port}`);
  }

  catch(e) {
    console.log(e);
  }
});

