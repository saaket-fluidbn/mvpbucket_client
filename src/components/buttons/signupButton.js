import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    color: '#4dc5da'
}));
const SignupButton = () => {
    const classes = useStyles();
    const TextStyle = {
        textDecoration: 'none'
    }
    
    return (
      <>
            {/* <Link to='/signup' style={TextStyle}>
                get there
                </Link> */}
            <Link to='/signup' style={TextStyle}>
                <Button variant="outlined" style={{ backgroundColor: 'white', color: '#4dc5da' }} size="large" className={classes.margin} >
                
         Get Started
                                
          </Button>
            </Link>
          </>
  )
}

export default SignupButton
