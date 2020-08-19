import React from 'react'
import Grid from '@material-ui/core/Grid'
import Logo from '../img/tinerary1.png'
import '../styles/style.css'
import {Link} from 'react-router-dom'

class Footer extends React.Component{
    state = {
        redes_sociales : ['facebook','instagram','youtube','twitter']
    }
    
    render(){
        return (
            <div className='footerStyle'>
                <Grid container spacing={0} justify='space-around' alignItems="center">
                    <Link to='/Home'><img src={Logo}  item xs={4} className='logoStyle' alt='logo'/></Link>
                    <Grid container spacing={0} xs={3} justify='space-between' alignItems="center">
                        {this.state.redes_sociales.map((rede,index) =>{
                            let img = require(`../img/${rede}.png`);
                            return(
                                <img key={index} item xs={4} src={img} className='redesStyle' alt='rede'></img>
                            )
                        })
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Footer
