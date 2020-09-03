import mongoose from 'mongoose' 

const activitySchema = new mongoose.Schema({
    idItinerary: {type: mongoose.Schema.ObjectId, ref: 'itinerary' , required: true},
    imgUrl : {type: String, required:true},
    nameActivity : {type:String, required:true}
})

export default activitySchema