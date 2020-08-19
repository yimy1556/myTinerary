import React , { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import SectionHome from './Components/SectionHome'
import SectionError from './Components/SectionError'
import SectionCitys from './Components/SectionCitys'

export default class RouterInterno extends Component {
    render() {
    return(
            <Switch>
                <Route path='/Home' component = {SectionHome}/>
                <Route path='/Citys' component = {SectionCitys}/>
                <Route path ='/Error' component = {SectionError}/>
                <Redirect to='/Error'/>
            </Switch>
    )}
}
