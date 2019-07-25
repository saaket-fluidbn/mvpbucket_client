
/**  nav  */

import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router-dom';
import SideMenu from './sideMenu';
import { Link } from 'react-router-dom';
import  List  from '@material-ui/core/List';
import  ListItem  from '@material-ui/core/ListItem';
import  ListItemText  from '@material-ui/core/ListItemText';
import  Container  from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Navbar = withRouter(props => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { user, value, searchResults, onChange, onClick } = props;

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }
    // function handleProfileClick() {
    //     props.history.push('/profile');
    // }
    // function handleDashboardClick() {
    //     // history.push('/dashboard');
    //     window.location = '/';
    // }
    function handleMenuClick(tag) {
        if (tag === 'profile')
            // props.history.push('/profile');
            window.location = '/profile';
        else if (tag === 'dashboard')
            window.location = '/';
        else if (tag === 'login')
            props.history.push('/login');
        else if (tag === 'signup')
            props.history.push('/signup');
    }
    function handleLogout() {
        props.history.replace('/logout');    
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {user ?
                <>
                    <MenuItem onClick={()=>handleMenuClick('profile')}>Profile</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('dashboard')}>Dashboard</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
                :
                <>
                    <MenuItem onClick={()=>handleMenuClick('login')}>Login</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('signup')}>Signup</MenuItem>
                </>
            }
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="Account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"

                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ background: '#4dc5da' }}>
                <Toolbar>
                    {user &&

                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer"
                        >
                            <SideMenu />
                        </IconButton>

                    }

                    <Typography className={classes.title} variant="h6" noWrap>
                       <Link style={{ textDecoration:'none', color:'white' }}to='/'> MvpBucket</Link>
          </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'Search' }}
                            value={value}
                            name="search"
                            onChange={onChange}
                        />
                       
                    </div>
                    
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>


                        <IconButton
                            edge="end"
                            aria-label="Account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="Show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                <Container maxWidth='lg'>
                    <Grid lg={4} xs={12}>
                        {searchResults.map(result => (
                            <List key={result._id}>
                                <ListItem button onClick={() => onClick(result.title)}>
                                    <ListItemText primary={result.title} />
                                </ListItem>
                            </List>
                        ))}
                    </Grid>
                </Container>
            </AppBar>
            
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
});
export default Navbar;
