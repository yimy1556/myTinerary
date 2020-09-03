import React , {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '../Components/Card'
import citiesActions from '../redux/actions/citiesActions'
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
            width: '30vw',
        },
    },
}));

const condicion = (nameCity, cityBuscada) => { 
    if(cityBuscada === '') return true
    return ((cityBuscada).toUpperCase() === (nameCity.substring(0,cityBuscada.length)).toUpperCase())
}


const filtroCity = (arrayCity,cityBuscada) => arrayCity.filter(city => condicion(city.nameImg,cityBuscada))

const SectionCitys = async (props) => { 
    const [cities, setCities] = useState([])
    const [cityBuscada,setCityBuscada] = useState('')
    console.log(props);
    useEffect(() =>  {
        console.log(props)
        /*props.getCities()
        setCities(props.cities)*/
    },[])

    const classes = useStyles();
    const dsds = e => setCityBuscada(e.target.value)

    return (
        <section>
            <form className={classes.root} style={{display:'flex',justifyContent:'center'}}>
                <TextField
                    id="outlined-secondary"
                    label="city search"
                    variant="outlined"
                    color="primary"
                    onChange={dsds}
                />
            </form>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Grid container xs={10} md={10} lg={10} justify='center'>
                    {filtroCity(cities,cityBuscada).map(city => <Grid item xs={6} justify='center'><Card dato={city}/></Grid>)}
                </Grid>
            </div>
        </section>    
)
}

const mapStateProps = state => ({cities : state.cities.cities})

const mapDispatchToProps = {getCities : citiesActions.getCities}

export default connect(mapStateProps, mapDispatchToProps)(SectionCitys)
