const express=require('express')
const app=express()
// const router=express()
const routes=require("./users")
app.use("/",routes)
app.listen(3000)

