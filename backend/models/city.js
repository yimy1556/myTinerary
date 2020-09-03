const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    nameCity : {type:String, required:true},
    urlCity : {type:String, required:true}
})

const city = mongoose.model('city', citySchema)

module.exports = city
