const express=require("express")
const router=express.Router()


router.get("/getdata",(req,res)=>{
    res.send("hii i am your best friend")
})

router.post("/postdata",(req,res)=>{
    res.send("i am also your friend")
})
module.exports=router