const activity = require('../models/Activity')

const activityController = {
    postActivity : (req, res) => {
        const {idItinerary ,imgUrl, nameActivity} = req.body
        const newActivity = new activity({idItinerary ,imgUrl, nameActivity})
        newActivity.save()
        .then(user => res.json({success:true, user}))
        .catch(error => res.json({success:false, error}))
    },
    getActivities : async (req, res) => {
        const listaActivities = await activity.find()
        res.json({success :true, activities: listaActivities})
    },
    getActivity : async (req, res) => {   
        const wantedActivity = await city.findOne({idItinerary : req.params.wantedActivity})
        res.json({wantedActivity})
    }
}

module.exports = activityController
