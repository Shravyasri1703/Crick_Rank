import mongoose from "mongoose";

const userschema = new mongoose.Schema({

    username : {
        type: String,
        required: true,
        unique: true,
    },

    email : {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum : ["Admin", "Client"],
        default: "Client"
    },

    
})

const User = mongoose.model('User', userschema)

export default User