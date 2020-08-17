import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const StyledMenu = withStyles({
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

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


export default function MenuAppBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor:'rgba(82, 108, 223, 0.5)', boxShadow: 'none'}}>
            <Toolbar style={{display:"flex", justifyContent:"space-around"}}>
            <div>
                <Button
                    aria-controls="customized-menu1"
                    aria-haspopup="true"
                    variant="contained"
                    onClick={handleClick}
                >
                  <MenuIcon/>
                </Button>
                <StyledMenu
                    id="customized-menu1"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                </StyledMenu>
            </div>
            <div>
                <Button
                    aria-controls="customized-menu2"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <AccountCircleRoundedIcon fontSize="large"/>
                </Button>
                <StyledMenu
                    id="customized-menu2"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose}>Log In</MenuItem>
                    <MenuItem onClick={handleClose}>sign up</MenuItem>
                </StyledMenu>
            </div>
            </Toolbar>
            </AppBar>
        </div>
    );  
}   
