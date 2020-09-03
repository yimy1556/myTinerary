import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
            width: '30vw',
        },
    },
}));

export default function TextFieldSizes(){
    const classes = useStyles();
    return (
        <form className={classes.root} style={{display:'flex',justifyContent:'center'}}>
            <TextField
                id="outlined-secondary"
                label="city search"
                variant="outlined"
                color="primary"
                onChange="cambioData"
            />
        </form>
    )
}
