import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const authenticateUser = (req, res, next) => {
    const token = req.cookies['jwt-crick']

    if(!token){
        return res.status(401).json({
            message: "Not Authenticated, Please Login"
        })
    }
    try{
          const decoded = jwt.verify(token, process.env.JWT_SECRET)
          req.userId = decoded.userId
          next()
    }
    catch(err){
        return res.status(403).json({ message: "Invalid token" });
    }
}

export const authorizeAdmin = async (req, res, next) => {
    try{
         const user = await User.findById(req.userId)

         if(!user){
            return res.status(404).json({
                message: "User Not Found"
            })
         }

         if (user.role !== 'Admin') {
            return res.status(403).json({ message: "Access denied. Admins only." })
        }

        next()
    }
    catch(err){
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}