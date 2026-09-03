import express from "express"
import dotenv from "dotenv"
import connectDB  from "./config/db.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"

dotenv.config()

const port =process.env.PORT || 6001

const app=express()

app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("Hello from Auth Service");
})
app.use("/",authRouter)
app.listen(port,()=>{
    console.log(`Auth Service Started on ${port}`)
    connectDB()
})