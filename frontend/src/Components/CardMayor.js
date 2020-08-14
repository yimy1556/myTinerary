import React from 'react'
import Grid from '@material-ui/core/Grid';
import ImgCard from './Card'

export default function CardMayor(props) {
    return (
        <Grid container spacing={0}>
            {
                props.lista.map(img => (<Grid item xs={6} ><ImgCard dato={img}/></Grid>))
            }
        </Grid>
    )
}
  