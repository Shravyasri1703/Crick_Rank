import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";


export const SignUp = async (req, res) => {
    try{
          const { username, email, password, role } = req.body

          if(!username || !email || !password){
            return res.status(400).json({
            "message": "All Credentials Required"
            })
          }

         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if(!emailRegex.test(email)){
            return res.status(400).json({
                "message": "Invalid Email Format"
            })
          } 

          if(password.length < 6){
            return res.status(400).send("Password Must br Atleast 6 characters")
          }

          const  existingUserByEmail = await User.findOne({email: email})
          if(existingUserByEmail){
            return res.status(400).json({
                "message": "Email Already Exists"
            })
          }

          const  existingUserByUsername = await User.findOne({username: username})
          if(existingUserByUsername){
            return res.send(400).json({
                "message": "Username Already Exists"
            })
          }

          const salt = await bcryptjs.genSalt(10)
          const hashedPassword = await bcryptjs.hash(password, salt)

          const userRole = role === "Admin" || role === "Client" ? role : "Client";

          const newUser = new User({
            email,
            password: hashedPassword,
            username,
            role: userRole
          })

          generateTokenAndSetCookie(newUser._id, res)

         await newUser.save()
         return res.status(201).json({
            user: {
                ...newUser._doc,
                 password: ""
                }
              }) 
    }
    catch(err){
        return res.status(500).send("Internal Server Error : ", err)
    }
}

export const Login = async (req, res) => {
    try{
         const { email, password } = req.body
         if(!email || !password){
           return res.status(400).json({
            "message": "All fields are required"
           })
         }

         const user = await User.findOne({email: email})

         if(!user){
          return res.status(400).send("Invalid Credentials")
         }

         const isMatch = await bcryptjs.compare(password, user.password)

         if(!isMatch){
          return res.status(400).send("Inavlid Credentials")
         }
          
         generateTokenAndSetCookie(user._id, res)

         res.status(200).json({
            user: {
              ...user._doc,
              password: ""
            }
         })
         
    }
    catch(err){
        return res.status(500).send("Internal Server Error : ", err)
    }
}

export const Logout = async (req, res) => {
    try{
          res.clearCookie('jwt-crick')
          return res.status(200).json({
            "message": "Logout Susscessful"
          })
    }
    catch(err){
        return res.status(500).send("Internal Server Error : ", err)
    }
}

