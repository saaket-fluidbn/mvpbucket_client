import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MenuIcon  from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { withRouter } from 'react-router-dom';
import  IconButton  from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme=>({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

 const SideMenu = withRouter(props => {
    const classes = useStyles();
     const theme = useTheme();
    // const [open, setOpen] = React.useState(false);
    const features = ['New Project', 'docBucket'];
    const [state, setState] = React.useState({
        
        left: false,
        
    });
// click handler
    const handleClick = (text) => {
        if (text === 'New Project') {
            props.history.push('/new');
        }
       else if (text === 'docBucket') {
            props.history.push('/docBucket');
        }
      
    }
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };


    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
              <div className={classes.drawerHeader}>
                <IconButton onClick={()=>toggleDrawer(side, false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
            <List>
                {features.map((text, index) => (
                    <ListItem button key={text} onClick={()=>handleClick(text)}>
                        {text === "New Project" || text === "docBucket"?
                            <ListItemIcon><Fab size="small" style={{ background: '#4dc5da', color: 'white' }}> <AddIcon /></Fab></ListItemIcon>
                            : null
                        }
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                
            </List>
           
          
        </div>
    );

    
    return (
        <div>
            <MenuIcon onClick={toggleDrawer('left', true)}></MenuIcon>
           
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
           
        </div>
    );
 }
 )
export default SideMenu;