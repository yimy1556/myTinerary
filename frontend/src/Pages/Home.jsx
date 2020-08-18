import React , { Component } from 'react'
import Header from './Components/Header'
import Section from './Components/Section'
import Footer from './Components/Footer'
import './styles/style.css'

export default class Home extends Component {
    render() {
        return(
            <div className = 'appStyle'>
                <Header/>
                <Section/>
                <Footer/>
            </div>
            )}
}

                
