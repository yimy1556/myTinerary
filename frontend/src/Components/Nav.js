import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import CustomizedMenus from './Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{display:"flex", justifyContent:"space-around"}}>
                <Toolbar style={{backgroundColor:'rgb(239, 126, 126)',display:"flex", justifyContent:"space-around"}}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <CustomizedMenus/>
                    </IconButton>
                    <AccountCircleRoundedIcon fontSize="large"/>
                </Toolbar>
            </AppBar>
        </div>
    );
}