import React from 'react';
import SwipeableTextMobileStepper from './Car'
import Grid from '@material-ui/core/Grid';
import Logo from '../img/tinerary.png'
import Sigui from '../img/multimedia.png'
import '../styles/style.css'
import { Button } from '@material-ui/core';



function Section(){
    return(
        <>
            <Grid container spacing={0} justify="center" >
                <img src={Logo} item xs={0} style={{width:'15vw',height: '10vw'}} ></img>            
            </Grid>
            <Grid container spacing={0} justify="center" >
                <Button><img src={Sigui} item xs={0} style={{width:'5vw', margin:'1vw'}} ></img>            </Button>
            </Grid>
            <Grid container spacing={0} justify="center">
                <SwipeableTextMobileStepper item xs={1}/>            
            </Grid>
        </>     
    )
}

export default Section