import React from 'react'
import Grid from '@material-ui/core/Grid';
import ImgCard from './Card'

export default function CardMayor(props) {
    return (
        <Grid container spacing={0}>
            {
                props.lista.map((img,index) => (<Grid key={index} item xs={12} lg={3} sm={6}><ImgCard dato={img}/></Grid>))
            }
        </Grid>
    )
}
  