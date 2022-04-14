// const express=require("express")
// var products=require('./routes/products')
// var app=express();

// app.use('/products',products)
// // app.use('/users',users);
// app.listen(4000,()=>{
//     console.log("listing")
// })


var express = require('express');
var app = express();
const rout = require("./routes/middleware")
//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End');
});

app.listen(3000);
