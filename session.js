const express=require("express")
const body_parsar=require("body-parser")
const cookie=require("cookie-parser")
const session=require("express-session")
const app=express()


app.use(session({secret:"pooja123"}))

// app.get('/',(res,req)=>{
//     res.session("welcome to home page").send("pooja pichad")

app.get('/pooja',(req,res)=>{
        if(req.session.count){
            req.session.count++;
            res.send("count"+ req.session.count)
        }else{
            req.session.count=1
            res.send("frist time count . Count :")
        }
    })

app.listen(4000)



// var express = require('express');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');

// var app = express();

// app.use(cookieParser());
// app.use(session({secret: "Shh, its a secret!"}));

// app.get('/', function(req, res){
//    if(req.session.page_views){
//       req.session.page_views++;
//       res.send("You visited this page " + req.session.page_views + " times");
//    } else {
//       req.session.page_views = 1;
//       res.send("Welcome to this page for the first time!");
//    }
// });

// 
// app.listen(3000);
