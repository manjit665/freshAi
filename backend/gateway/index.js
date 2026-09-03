import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"

dotenv.config()

const port =process.env.PORT || 6000

const app=express()

app.get('/',(req,res)=>{
    res.send("Hello from Gateway");
})

app.use('/api/auth',proxy(process.env.AUTH_SERVICE_URL))

app.listen(port,()=>{
    console.log(`Gateway Started on ${port}`)
})