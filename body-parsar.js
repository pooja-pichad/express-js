// var express = require('express')
// var bodyParser = require('body-parser')

// var app = express()

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })


// const express=require('express');
//     const app=express();
    
//     const bodyParser=require('body-parser'); 
//     // parse application/json 
//     app.use(bodyParser.json());  
    
//     app.post('/post',(req,res)=>{
//         // console.log(req.body);
//         res.send(req.body)
//         res.json(req.body);
//     });
//     app.listen(3000)



var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})


app.listen(3000)
