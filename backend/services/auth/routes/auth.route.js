import express from "express"
import { GoogleAuth, logOut } from "../controllers/auth.controller.js"

const authRouter=express.Router()

authRouter.post('/login',GoogleAuth)
authRouter.get('/logOut',logOut)

export default authRouter