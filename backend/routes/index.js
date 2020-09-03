const express = require('express')
const cityController = require("../controllers/cityController")
const itineraryController = require("../controllers/ItinerariController")
const routes = express.Router()

routes.route('/cities')
.get((cityController.getCities))
.post((cityController.postCity))

routes.route('/itinerary')
.get((itineraryController.getListItinerary))
.post((itineraryController.postNewItinerary))

routes.route('/cities/:wantedCity')
.get((cityController.getCity))

routes.route('/itineraries/:wantedItineraryCity')
.get((itineraryController.getItineraryCity))

module.exports = routes
