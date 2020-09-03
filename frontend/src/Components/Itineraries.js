import React from 'react'
import Grid from '@material-ui/core/Grid'
import '../styles/style.css'
import Itinerary from './Itinerary'
import { Skeleton } from '@material-ui/lab';

const Itineraries = props => {
    if(!props.itineraries) return(
            <div style = {{display:'flex', justifyContent:'center'}}>
                <Grid container xs={10} md={10} lg={10} justify='center'>
                    <Skeleton variant="rect" width={750} height={200} />
                </Grid>
            </div>
    )
    
    return (
        <div style = {{display:'flex', justifyContent:'center'}}>
            <Grid container xs={10} md={10} lg={10} justify='center'>
                {(props.itineraries.length !== 0)? props.itineraries.map(itinerary => <Itinerary data = {itinerary}/>): 
                    <Grid container xs={10} md={10} lg={10} justify='center' className='noItineraryStyle'>
                        <h3>No Itinerary yet!</h3>
                    </Grid>
                }
            </Grid>
        </div>
    )
}
export default Itineraries
