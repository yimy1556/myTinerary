import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuAppBar from './Nav'
import fondo from '../img/fondo.png'
import Logo from '../img/tinerary1.png'

export default function Header() {
    return (
        <header style={{backgroundImage:`url(${fondo})`,backgroundPositionY:'60%',backgroundPositionX:'50%'}}>
            <MenuAppBar/>
            <Grid container spacing={0} justify="center">
                <img src={Logo} item xs={12} style={{width:'35vh',height: '15vh', margin:'0vw'}}></img>
            </Grid>
            <h4  style={{ fontSize:'2vh',fontFamily: 'Orbitron, sans-serif', textAlign:'center', backgroundColor:'rgba(181, 195, 241, 0.664)', padding:'1vw'}}>Find your perfect trip, designed by insiders who know and love their cities.</h4>
        </header>
    );
}
