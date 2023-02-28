const express=require("express")
const { ProductModel } = require("../models/Products.model")


const postRouter=express.Router()

postRouter.post("/",async(req,res)=>{
    const payload=req.body
    try{
        const new_product=new ProductModel(payload)
        await new_product.save()
        res.send({"msg":"Added new Product",new_product})
    }catch(err){
        console.log(err)
        console.log("Something went wrong")
    }
})

module.exports={postRouter}