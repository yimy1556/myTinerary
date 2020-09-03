import React from 'react'
import {makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Logo from '../img/tinerary1.png'
import '../styles/style.css'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

const getMenu = (anchor, aId , fucOpen, close, items) => {
    return(<Menu
                anchorEl={anchor}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                id={aId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={fucOpen}
                onClose={close}
            >
                {items.map(item => <NavLink to='/home'><MenuItem key={item}>{item}</MenuItem></NavLink>)}
            </Menu>)
}


export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => setAnchorEl(event.currentTarget);
    
    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    const handleMobileMenuOpen = event => setMobileMoreAnchorEl(event.currentTarget)

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    }
    
    const menuId = 'primary-search-account-menu'
    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMenu = getMenu(anchorEl,menuId,isMenuOpen,handleMenuClose,["Profile","My account"]);
    const renderMobileMenu = getMenu(mobileMoreAnchorEl,mobileMenuId,isMobileMenuOpen,handleMobileMenuClose,["Home", "City"])

    return (
        <div className={classes.grow}>
            <AppBar position="static" className='nav2'>
                <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
                    <div className={classes.sectionDesktop}>
                        {["Home","Cities"].map(inf => <NavLink to={`/${inf}`}><Button key={inf}>{inf}</Button></NavLink>)}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                            <MenuIcon vifontSize='large'/>
                        </IconButton>
                    </div>
                    <img src={Logo} className='styleImg' alt='logo'/>
                    <div>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={0} color="secondary">
                                <NotificationsIcon  fontSize='large'/>
                                </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="false"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle fontSize='large'/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
