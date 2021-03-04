const express = require('express');

const fs = require('fs');

const path = require('path');

const app = express();

const router = express.Router();

app.use(express.static(path.join(__dirname,"public")));

const port = 4541;

router.get('/',(req,res)=>{
  res.sendFile(fs.readFileSync("index.html"));
});

router.get('/contactpage',(req,res)=>{
  res.sendFile(fs.readFileSync("generic.html"));
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

