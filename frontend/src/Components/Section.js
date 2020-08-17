import React from 'react';
import SwipeableTextMobileStepper from './Carrusel'
import Grid from '@material-ui/core/Grid';
import Sigui from '../img/multimedia.png'
import '../styles/style.css'
import { Button } from '@material-ui/core';
import Info from './info.json'
class Section extends React.Component{
    state = {
        img:{Info}
    }
         
    render(){
        return(
            <>
            <Grid container spacing={0} justify="center">
                <Button><img src={Sigui} item xs={0} style={{width:'4vh', margin:'1vw'}} ></img></Button>
            </Grid>
            <Grid container  maxWidth="sm" spacing={0} justify="center" xs={12} >
                <Grid container spacing={0} justify="center" xs={6} lg={11} >
                    <SwipeableTextMobileStepper viajes={this.state.img.Info}/>            
                </Grid>
            </Grid>
            
        </>             
        )
    }

}

export default Section
