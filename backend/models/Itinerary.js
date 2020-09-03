const mongoose = require('mongoose')

const itinerarySchema =  new mongoose.Schema({
    hashtags : {type :Array },
    comments :{type :Array ,default:[]},
    title : {type : String, required :true},
    profilePic: {type: String, required: true},
    rating: {type: Number, required: true},
    duration: {type: Number, required: true},
    price: {type: Number, required: true},
    userName: {type: String, required: true},
    cityId: {type: mongoose.Schema.ObjectId, ref: 'city' , required: true}
})

const Itinerary = mongoose.model('itinerary',itinerarySchema)

module.exports = Itinerary
