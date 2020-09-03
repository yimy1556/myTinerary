import React, { Component } from 'react'
import Card from '../Components/Card'
import Grid from '@material-ui/core/Grid'
import Itineraries from '../Components/Itineraries'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import citiesActions from '../redux/actions/citiesActions'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

class SectionItinerary extends Component {
    state = {
        itineraries : null,
        city : {}
    }    
    
    async componentDidMount() {
        const cityId = this.props.match.params.id
        await this.props.getCity(cityId)
        const wantedCity = this.props.city
        const wantedItinerary = await axios.get(`http://127.0.0.1:4000/api/itineraries/${cityId}`)
        this.setState({city: wantedCity,
            itineraries: wantedItinerary.data.wantedItineraryCity})
    }

    render() {
        return( 
            <section> 
                <h4>{`Itineraries the ${this.state.city.nameCity}`}</h4>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Grid container xs={10} md={10} lg={10} justify='center'>
                        <Grid item xs={7} justify='center'><Card dato={this.state.city}/></Grid>
                    </Grid>
                </div>
                <Itineraries itineraries={this.state.itineraries}/>
                <div style ={{display:'flex', justifyContent:'center' , margin:'0vh 0vw 3vh 0vw'}}>
                    <NavLink to='/cities'><Button variant="contained" color="primary">BACK</Button></NavLink>
                </div>
            </section>
            
        )            
    }
}

const mapStateProps = state => ({city : state.cities.city})

const mapDispatchToProps = {getCity : citiesActions.getCity}

export default connect(mapStateProps, mapDispatchToProps)(SectionItinerary)