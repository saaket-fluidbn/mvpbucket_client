import React from 'react'
import illus404 from '../../svg/404-1.svg'
import  Grid  from '@material-ui/core/Grid';
import  Container from '@material-ui/core/Container';
const Error404 = ({context}) =>{
    return (
        <Container maxWidth='lg'>
            <Grid lg={4}>
                <h1>Ooops page not found!</h1>
                <h3>{context}</h3>
            </Grid>
        <Grid lg={5}>
            <img src={illus404} alt="not found" />
           
        </Grid>
        
            </Container>
    )
}
export default Error404