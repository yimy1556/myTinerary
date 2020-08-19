import React from 'react'
import '../styles/style.css'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import Error404 from '../img/error404.jpg'


function SectionError(){
    return(
        <section className='errorStyle'>
            <img src={Error404} alt='Error'/>
            <Link to='/home'><Button variant="contained" color="primary">Volver home</Button></Link>    
        </section>
        )
}

export default SectionError
