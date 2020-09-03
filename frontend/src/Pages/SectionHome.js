import React from 'react';
import SwipeableTextMobileStepper from '../Components/Carrusel'
import Grid from '@material-ui/core/Grid';
import Sigui from '../img/multimedia.png'
import '../styles/style.css'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
import Info from '../Components/info.json'
class Section extends React.Component{
    state = {
        img:{Info}
    }
         
    render(){
        return(
            <>
            <h4>Find your perfect trip, designed by insiders who know and love their cities.</h4>  
            <Grid container justify="center">
                <Link to='/cities'><Button><img src={Sigui} item xs={0} style={{width:'6em', margin:'0em'}} alt='Flecha'></img></Button></Link>
            </Grid>
            <h4>City Search</h4>
            <Grid container justify="center" xs={12} >
                <Grid item xs={11}>
                    <SwipeableTextMobileStepper viajes={this.state.img.Info}/>            
                </Grid>
            </Grid>
            
        </>             
        )
    }

}

export default Section
