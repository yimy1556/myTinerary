import React from 'react'
import Grid from '@material-ui/core/Grid'
import '../styles/style.css'
import Button from '@material-ui/core/Button'
import Bill from '../img/billetes.png'

const styleInfo = (tamanio, typeBorde, tamRadio = 30) => {
    return ({
        borderRadius: `${tamRadio}px`,
        fontSize:`${tamanio}em`,
        backgroundColor: 'rgba(67, 107, 240, 0.37)',
        borderStyle: typeBorde,
        padding: '0vh 1vh',
        margin: '0.5vw 0.5vw'
    })
}

const nCompon = cant => {
    if(cant === 0) return <></>
    return (<><img src={Bill} alt={cant} style={styleInfo(1,'none',10)} className='styleBill'/>{nCompon(cant-1)}</>)
}

const Itinerary = props => {
    return (
        <Grid container xs={10} md={10} lg={10} justify='space-around' className='cartYimy , styleBackground'>
            <Grid item xs={5} className='prueba'>
                <img src= {props.data.profilePic} className='userStyle' alt='user'/>
                <Grid container justify='center'>    
                    <h3 item xs={3} alignItems="center" style={styleInfo(2,'none')}>{props.data.userName}</h3> 
                </Grid>
            </Grid>
            <Grid container xs={5} justify='center'>  
                <Grid item xs={10} md={10} lg={10} alignItems="flex-end">
                    <Grid container xs={10} md={10} lg={10} justify='center'> 
                        <h3 style={styleInfo(2,'none')} alignSelf='center'>{props.data.title}</h3>
                    </Grid>
                    <Grid container xs={10} md={10} lg={10} justify='center'> 
                        <p style={styleInfo(1,'none')}>Likes = {props.data.rating}</p>
                        <p style={styleInfo(1,'none')}> {props.data.duration} Hs</p>
                        <Grid container xs={10} md={10} lg={10} justify='center'> 
                            {nCompon(props.data.price)}</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} md={10} lg={10} justify='center' >
                    <Grid container xs={10} md={10} lg={10} justify='center' > 
                        {props.data.hashtags.map(hashtag => <p  style={styleInfo(1,'none')}>{hashtag}</p>)}
                    </Grid>
                </Grid>            
            </Grid>
            <Grid container xs={10} md={10} lg={10} justify='center' >
                <Button variant="outlined" color="primddary">View All</Button>    
            </Grid>
        </Grid>
    )
}

export default Itinerary
