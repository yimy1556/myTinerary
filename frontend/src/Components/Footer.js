import React from 'react'
import Grid from '@material-ui/core/Grid'
import Logo from '../img/tinerary1.png'
import '../styles/style.css'

class Footer extends React.Component{
    state = {
        redes_sociales : ['facebook','instagram','youtube','twitter']
    }
    
    render(){
        return (
            <div className='footerStyle'>
                <Grid container spacing={0} justify='space-around' alignItems="center">
                    <a href='#'><img src={Logo}  item xs={4} className='logoStyle' ></img></a>
                    <Grid container spacing={0} xs={3} justify='space-between' alignItems="center">
                        {this.state.redes_sociales.map((rede,index) =>{
                            let img = require(`../img/${rede}.png`);
                            return(
                                < a key={index} href={`https://www.${rede}.com/`} target="_blank" item xs={4}><img src={img} className='redesStyle' ></img></a>
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