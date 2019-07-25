import React from 'react'
import  Fab  from '@material-ui/core/Fab';
import  AddIcon  from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const NoProjectHeader = ({label1, label2, illus, onClick}) => {
    return (
        <>
             <Typography variant="h2" style={{ marginTop: '5%' }}>
                 {label1} 
              </Typography>
               <Typography variant="h4" style={{ marginTop: '5%' }}>
                {label2}<br/><br/>
             <Fab onClick={onClick} style={{ color: 'white', background: '#4dc5da', fontWeight: 'bold',marginLeft:'20%' }} aria-label="Add">
                   <AddIcon />
                </Fab>
            </Typography>
            <br />
            <Grid lg={5} xs={12} spacing={6}>
                <img src={illus} alt="" />
            </Grid>
        </>
    )
}

export default NoProjectHeader
