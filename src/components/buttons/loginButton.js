import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    color: '#ce367c'
}));
const LoginButton = () => {
    const classes = useStyles();
    const TextStyle = {
        textDecoration: 'none'
    }
    
    return (
        <>
            <Link to='/login' style={TextStyle}>
            <Button variant="contained" style={{ backgroundColor: '#4dc5da', color: 'white' }} size="large" className={classes.margin}>
                Login
          </Button>
                </Link>
        </>
    )
}

export default LoginButton
