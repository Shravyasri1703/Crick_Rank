import mongoose from "mongoose";

const rankingSchema = new mongoose.Schema({

    Country : {
        type: String,
        required: true,
        unique: true,
    },

    rating : {
        type: Number,
        required: true,
       
    },

    rank: {
        type: Number,
        required: true,
    },

    matchesPlayed: {
        type: Number, 
    },

})

const Ranking = mongoose.model('Ranking', rankingSchema)

export default Ranking