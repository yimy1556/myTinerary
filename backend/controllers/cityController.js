const city = require('../models/city')

const cityController = {
    postCity : (req, res) => {
        const {nameCity ,urlCity} = req.body
        const newCity = new city({nameCity, urlCity})
        newCity.save()
        .then(user => res.json({success:true, user}))
        .catch(error => res.json({success:false, error}))
    },
    getCities : async (req, res) => {
        const listaCities = await city.find()
        res.json({success :true, cities: listaCities})
    },
    getCity : async (req, res) => {   
        const wantedCity = await city.findOne({_id : req.params.wantedCity})
        res.json({wantedCity})
    }
}

module.exports = cityController
