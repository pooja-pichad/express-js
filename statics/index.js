var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/images"));
// app.use("/myimages",express.static(path.join(__dirname, 'images')));
app.use(express.static(__dirname+"/styles"));
console.log(__dirname);
app.get("/mydata", function(req,res){

   res.send('mydata is called');
})

app.listen(3000);
