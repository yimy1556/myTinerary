import React , { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import SectionHome from './Pages/SectionHome'
import SectionItinerary from './Pages/SectionItinerary'
import SectionError from './Pages/SectionError'
import SectionCitys from './Pages/SectionCitys'

export default class RouterInterno extends Component {
    render() {
    return(
            <Switch>
                <Route path='/Home' component = {SectionHome}/>
                <Route path='/Cities' component = {SectionCitys}/>
                <Route path='/itinerary/:id' component = {SectionItinerary}/>
                <Route path ='/Error' component = {SectionError}/>
                <Redirect to='/Error'/>
            </Switch>
    )}
}
