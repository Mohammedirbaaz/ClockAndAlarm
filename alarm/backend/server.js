const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const axios =require('axios');

var app=express();
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  })

app.get('/',(req,res)=>{
    axios.get('http://api.timezonedb.com/v2.1/list-time-zone?key=B3BUCD3Y2W9M&format=json').then(ress=>{
        // console.log(ress.data)
        res.send(JSON.stringify(ress.data));
    }).then(er=>{
        // res.send(er);
        console.log(er)
    })
})

app.listen(port,()=>{
    console.log("server running on "+port);
})