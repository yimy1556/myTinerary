const itinerary = require('../models/Itinerary')

const itineraryController = {
    getListItinerary : async (req, res) => {
        const listItinerary = await itinerary.find() 
        res.json({ success : true, listItinerary})
    },
    
    postNewItinerary : (req, res) => {
        const {hashtags, title, profilePic, rating, duration, price, cityId ,userName ,comments} = req.body
        
        const newItinerary = new itinerary({
            comments, hashtags, title,
            profilePic, rating, duration,
            price, cityId, userName
        })

        newItinerary.save()
        .then(itinerary => res.json({ success : true, listItinerary : itinerary,}))
        .catch(error => res.json({success : false, error}))
    },

    getItineraryCity : async (req, res) => {
        const wantedItineraryCity = await itinerary.find({cityId: req.params.wantedItineraryCity})
        res.json({wantedItineraryCity})
    }
}

module.exports = itineraryController
