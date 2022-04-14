const express = require("express")
const router = express.Router()
 
router.get("/getData",(req,res)=>{
    res.send("hii")
})
router.post("/postData",(req,res)=>{
    res.send("by")
})

module.exports = router