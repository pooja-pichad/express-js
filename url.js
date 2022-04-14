// const express = require("express")
// const app = express()
// app.get("/mainPage/:id",(req,res)=>{
//     res.send("hellow"+req.params.id)
// })
// app.post("/",(req,res)=>{
//     res.send("kjsdhfksgu")
// })
// app.listen(4000)


// const express=require("express")
// const app=express()      //we are crete an object
// app.get("/:id",(req,res)=>{
//     res.send("hello"+req.params.id)
// })
// app.listen(4000)

//22222
// var express = require('express');
// var app = express();

// app.get('/things/:name/:id', function(req, res) {
//    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
// });
// app.listen(3000);

//3333333

// var express=require("express")
// var app=express()
// app.get("/:course_name/course/:id",(req,res)=>{
//     res.send("course name:"+req.params.course_name+"id:"+req.params.id)
// })
// app.listen(8000)


//POST METHODS

// const express=require("express")
// const app=express()
// app.post("/",(req,res)=>{
//     res.send("hii poooja")
// })
// app.listen(4000)




// var express = require('express');
// var app = express();

// app.get('/things/:id([0-9]{5})', function(req, res){
//    res.send('id: ' + req.params.id);
// });

// app.listen(3000);



var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.listen(3000);



// var express = require('express');
// var app = express();

// //Other routes here
// app.get('*', function(req, res){
//    res.send('Sorry, this is an invalid URL.');
// });
// app.listen(3000);
