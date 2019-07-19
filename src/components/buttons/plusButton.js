import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    }
}));

export default function PlusButton({size, onClick}) {
    const classes = useStyles();

    return (
        
        <Fab size={size} aria-label="Add" className={classes.fab} style={{ background: '#4dc5da', color:'white' }} onClick={onClick}>
                <AddIcon />
          
        </Fab>
    );
}



