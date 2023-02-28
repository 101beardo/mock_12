const mongoose=require("mongoose")

const productsSchema=mongoose.Schema({
    name: String,
		description : String,
		category : String,
		image : String,
		location : String,
		postedAt : Date,
		price : Number
})

const ProductModel=mongoose.model("product",productsSchema)

module.exports={ProductModel}

