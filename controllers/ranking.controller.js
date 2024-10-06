import Ranking from "../models/ranking.model.js";

export const addTeams = async (req, res) => {
    try{
        const { country, rating, rank, matchesPlayed } = req.body;

        if (!country || !rating || !rank ) {
            return res.status(400).json({ message: "All required fields must be provided" });
        }

        const newRanking = new Ranking({
            Country: country,
            rating,
            rank,
            matchesPlayed,
        });

        await newRanking.save();
        return res.status(201).json({ message: "Team added successfully", ranking: newRanking });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({

            message: "Internal Server Error",
            error: err.message
        })
    }
}

export const getRank = async (req, res) => {
    try{
          const rankings = await Ranking.find({}).sort({rank: 1 })

          return res.status(201).json({
            rankings
          })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({

            message: "Internal Server Error",
            error: err.message
        })
    }
}

export const updateRanks = async (req, res) => {
    try{
        const { id } = req.params;
        const { rating, rank, matchesPlayed } = req.body;

        const currentRanking = await Ranking.findById(id)
        if (!currentRanking) {
            return res.status(404).json({ message: "Team not found" });
        }

        const currentRank = currentRanking.rank;

        if (rank !== currentRank) {
            if (rank < currentRank) {
                
                await Ranking.updateMany(
                    {
                        rank: { $gte: rank, $lt: currentRank } 
                    },
                    { $inc: { rank: 1 } } 
                );
            } else if (rank > currentRank) {
                
                await Ranking.updateMany(
                    {
                        rank: { $gt: currentRank, $lte: rank } 
                    },
                    { $inc: { rank: -1 } } 
                );
            }
        }

      
        const updatedRanking = await Ranking.findByIdAndUpdate(
            id,
            { rating, rank, matchesPlayed },
            { new: true, runValidators: true }
        );
           

        if (!updatedRanking) {
            return res.status(404).json({ message: "Team not found" });
        }

        return res.status(200).json({
            message: "update successfull",
            updatedRanking
        });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({

            message: "Internal Server Error",
            error: err.message
        })
    }
}