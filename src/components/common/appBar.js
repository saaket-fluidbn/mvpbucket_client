// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import clsx from 'clsx';
// import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import List from '@material-ui/core/List';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Modal from './modal';
// const drawerWidth = 240;
// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//         display: 'none',
//         [theme.breakpoints.up('sm')]: {
//             display: 'block',
//         },
//     },
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: fade(theme.palette.common.white, 0.25),
//         },
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(1),
//             width: 'auto',
//         },
//     },
//     searchIcon: {
//         width: theme.spacing(7),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 7),
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: 120,
//             '&:focus': {
//                 width: 200,
//             },
//         },
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//     },
//     drawerOpen: {
//         width: drawerWidth,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     drawerClose: {
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         overflowX: 'hidden',
//         width: theme.spacing(7) + 1,
//         [theme.breakpoints.up('sm')]: {
//             width: theme.spacing(9) + 1,
//         },
//     },
//     toolbar: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         padding: '0 8px',
//         ...theme.mixins.toolbar,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
// }));

// export default function SearchAppBar() {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     function handleDrawerOpen() {
//         setOpen(true);
//     }

//     function handleDrawerClose() {
//         setOpen(false);
//     }

//     return (
//         <div className={classes.root}>
//             <AppBar 
//                 style={{ background: '#4dc5da' }}
//                 position="fixed"
//                 className={clsx(classes.appBar, {
//                     [classes.appBarShift]: open,
//                 })}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="Open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         className={clsx(classes.menuButton, {
//                             [classes.hide]: open,
//                         })}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography className={classes.title} variant="h6" noWrap>
//                 MvpBucket
//           </Typography>
//                     <div className={classes.search}>
//                         <div className={classes.searchIcon}>
//                             <SearchIcon />
//                         </div>
//                         <InputBase
//                             placeholder="Search…"
//                             classes={{
//                                 root: classes.inputRoot,
//                                 input: classes.inputInput,
//                             }}
//                             inputProps={{ 'aria-label': 'Search' }}
//                         />
//                     </div>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 variant="permanent"
//                 className={clsx(classes.drawer, {
//                     [classes.drawerOpen]: open,
//                     [classes.drawerClose]: !open,
//                 })}
//                 classes={{
//                     paper: clsx({
//                         [classes.drawerOpen]: open,
//                         [classes.drawerClose]: !open,
//                     }),
//                 }}
//                 open={open}
//             >
//                 <div className={classes.toolbar}>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//                     </IconButton>
//                 </div>
//                 <Divider />
//                 <List>
//                     {['New Mvp or project'].map((text, index) => (

//                         <Modal text={text} key={text} />

//                     ))}
//                 </List>
//                 <Divider />

//             </Drawer>

//         </div>
//     );
// }