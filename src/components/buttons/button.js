// import React from 'react'

// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     margin: {
//         margin: theme.spacing(1),
//     },
//     extendedIcon: {
//         marginRight: theme.spacing(1),
//     },
//     color: '#ce367c'
// }));
// const CommonButton = ({label, onClick}) => {
//     const classes = useStyles();
  
    
//     return (
//         <>
           
//             <Button variant="contained" style={{ backgroundColor: '#4dc5da', color: 'white' }} onClick={onClick} size="large" className={classes.margin}>
//                 {label}
//           </Button>
               
//         </>
//     )
// }

// export default CommonButton

import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        fontWeight:'500'
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    
}));
const CommonButton = ({label, size, onClick}) => {
    const classes = useStyles();
    
    
    return (
      <>
                <Button 
                variant="outlined" 
                style={{ color: '#4dc5da', borderColor: '#4dc5da' }}
                onClick={onClick} 
                size={size}
                className={classes.margin}>
                {label}
                </Button>
            
          </>
  )
}

export default CommonButton
