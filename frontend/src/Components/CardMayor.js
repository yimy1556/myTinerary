import React from 'react'
import Grid from '@material-ui/core/Grid'
import ImgCard from './Card'

export default function CardMayor(props) {
    return (
        <Grid container spacing={0} xs={12}>
            {
                props.lista.map((img,index) => (<Grid key={index} item xs={12} lg={6} sm={3}><ImgCard dato={img}/></Grid>))
            }
        </Grid>
    )
}
  
