import citiesReducers from './citiesReducers' 
const {combineReducers} = require('redux')

const rootReducer = combineReducers({
    cities : citiesReducers
})

export default rootReducer 