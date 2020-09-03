import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../Components/Card'
import citiesActions from '../redux/actions/citiesActions'
import { NavLink } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import {connect} from 'react-redux'


class SectionCitys extends React.Component {
    state = {
        cities:[],
        cityBuscada:''
    }

    async componentDidMount() {
        await this.props.getCities()
        this.setState({cities: [...this.props.cities]})
    }
    
    filtroCity = () => {

        let cities = [...this.state.cities.filter(city => ((city.nameCity).toLowerCase().indexOf((this.state.cityBuscada).trim().toLowerCase()) === 0))]
        if(cities.length === 0 && this.state.cityBuscada !== '') 
            cities.push({nameCity:'city not found',urlCity:'https://www.televes.com/media/wysiwyg/televes/error-televes.jpg'})
        return cities
    }

    busquedaCity = e =>  this.setState({cityBuscada:e.target.value})

    render() {
        return (
            <section>
                {console.log(this.props)}
                <h4> Cities </h4>
                <form style={{display:'flex',justifyContent:'center',margin:'2em 0em'}}>
                    <TextField
                        id="outlined-secondary"
                        label="city search"
                        variant="outlined"
                        color="primary"
                        onChange={this.busquedaCity}
                    />
                </form>
                    <div style={{display:'flex', justifyContent:'center', margin:'2em 0em'}}>
                    <Grid container spacing={2} xs={10} md={10} lg={10} justify='center'>
                        {this.filtroCity().map(city => <Grid item xs={6} justify='center'><NavLink to={`/itinerary/${city._id}`}><Card dato={city}/></NavLink></Grid>)}
                    </Grid>
                </div>
            </section>
           )}
}

const mapStateProps = state => ({cities : state.cities.cities})

const mapDispatchToProps = {getCities : citiesActions.getCities}

export default connect(mapStateProps, mapDispatchToProps)(SectionCitys)
