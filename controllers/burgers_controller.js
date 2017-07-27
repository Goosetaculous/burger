var express = require("express")
var burger = require("../models/burger")
var router =  express.Router()




router.get("/",(req,res)=>{
    burger.all((data)=>{
        let arr = []
        data.forEach((burger)=>{
            arr.push(burger.burger_name)
        })
        console.log(arr)
        if(data.length >0){
            var obj ={
                bgName :  arr
            }
            res.render("index",obj);

        }else{
            res.render("index");
        }

    })


})

router.post("/api/add",(req,res)=>{
    burger.create(
        "burger_name",[req.body.burger]
    ,()=>{
        res.redirect("/")
    })


})
module.exports = router;