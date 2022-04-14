// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });

// app.listen(3000,()=>{
//     console.log("listinig");
// });


// var express = require('express');
// var app = express();

// app.get('/:id', function(req, res){
//    res.send('The id you specified is ' + req.params.id);
// });
// app.listen(3000,()=>{
//     console.log("listing")
// })



// routing
// var express = require('express');
// var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.listen(3000,()=>{
//     console.log("hello world")
// });


 
// const express = require('express')
// const app = express()

// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })


// var express = require('express');
// var app = express();

// // app.get('/hello', function(req, res){
// //    res.send("Hello World!");
// // });

// app.post('/hello', function(req, res){
//    res.send("You just called the post method at '/hello'!\n");
// });

// app.listen(3080,()=>{
//     console.log("helo world")
// });


// string = string.lower();  
   
// #Split the string into words using built-in function  
// words = string.split(" ");  
   
// print("Duplicate words in a given string : ");  
// for i in range(0, len(words)):  
//     count = 1;  
//     for j in range(i+1, len(words)):  
//         if(words[i] == (words[j])):  
//             count = count + 1;  
//             #Set words[j] to 0 to avoid printing visited word  
//             words[j] = "0";  
              
//     #Displays the duplicate word if count is greater than 1  
//     if(count > 1 and words[i] != "0"):  
//         print(words[i]);  