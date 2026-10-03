import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
const PORT = process.env.PORT || 6003

app.get("/" , (req,res)=>{
    res.send("Hello from Interview-service")
})

app.listen(PORT , ()=>{
    console.log(`Resume-service Started on ${PORT}`)
})