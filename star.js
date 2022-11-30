var express=require('express')

var star=express()
star.get('/pages',(req,res)=>{
    res.send("Welcome to pages")
})
star.get('/world',(req,res)=>{
     res.send("Awsome world")
})
star.listen(3000)