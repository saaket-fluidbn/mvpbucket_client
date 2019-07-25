import React from 'react'
import Typography from '@material-ui/core/Typography';
// import NewDocBucketModal from '../docBucket/newDocBucketModal';
import Grid from '@material-ui/core/Grid';
import  Container  from '@material-ui/core/Container';



const WithProjectHeader = ({label, illus}) => {
  return (
    <Container>
      <Typography variant="h2" style={{ marginTop: '5%' }}>
        {label}
              </Typography>
              <br />
              
              <Grid lg={4} xs={12} spacing={2}>
                <img src={illus} alt="" />
              </Grid>
    </Container>
  )
}

export default WithProjectHeader
