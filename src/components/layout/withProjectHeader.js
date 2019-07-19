import React from 'react'
import Typography from '@material-ui/core/Typography';
import NewDocBucketModal from '../docBucket/newDocBucketModal';
import Grid from '@material-ui/core/Grid';



const WithProjectHeader = ({user, label, illus, onClick}) => {
  return (
    <>
      <Typography variant="h2" style={{ marginTop: '5%' }}>
        {label}{user ? `, ${user.firstName}` : null}
              </Typography>
              <br />
              <NewDocBucketModal onClick={onClick}/>
              <Grid lg={4} xs={12} spacing={2}>
                <img src={illus} alt="" />
              </Grid>
    </>
  )
}

export default WithProjectHeader
