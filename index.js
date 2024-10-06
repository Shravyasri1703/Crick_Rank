import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import rankRoute from './routes/ranking.route.js'
import cookieParser from "cookie-parser";



const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/ranking', rankRoute)



const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log("Server started at", PORT)
})

const url = process.env.MONGO_URI

const connection = async () => {
    try{
          await mongoose.connect(url)
          console.log('Connected to DB')
    }
    catch(err){
       console.log(err)
    }
}

connection()


