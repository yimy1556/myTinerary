import React from "react"
import Grid from "@material-ui/core/Grid"
import MenuAppBar from './Nav'
import Logo from '../img/tinerary1.png'
import '../styles/style.css'

export default function Header() {
    return (
        <header className = 'fondoStyle'>
            <MenuAppBar/>
            <Grid container spacing={0} justify="center">
                <img src={Logo} item xs={12} className = 'logoFooterStyle' alt='logo'/>
            </Grid>
            <h4>Find your perfect trip, designed by insiders who know and love their cities.</h4>
        </header>
    )
}
