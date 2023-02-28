const express=require("express")
const { ProductModel } = require("../models/Products.model")
const browseRouter=express.Router()


browseRouter.get("/",async(req,res)=>{
    const sortby=req.query.sortby;
    const order=req.query.order;
    const page=+(req.query.page);
    const limit=+(req.query.limit);
    const search=req.query.search;

    // console.log(search)

    if(page){
        try{
            const products= await ProductModel.find().skip((page-1)*4).limit(4)
            res.send(products)
        }
        catch(err){
                    console.log(err)
                    console.log("Something went wrong")
                }
    }
    // try{
    //     const products=await ProductModel.find(req.query)
    //     res.send(products)
    // }catch(err){
    //     console.log(err)
    //     console.log("Something went wrong")
    // }
})

module.exports={browseRouter}