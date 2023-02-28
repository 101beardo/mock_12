const express=require("express")
const {connection } = require("./config/db")
const { browseRouter } = require("./routes/Browse.route")
const { postRouter } = require("./routes/Post.route")
cors=require("cors")

require("dotenv").config()

const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/post",postRouter)
app.use("/browse",browseRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to DB")

    }catch(err){
        console.log(err)
        console.log("Error while connecting to DB")
    }
    console.log(`Server running at ${process.env.port}`)
})