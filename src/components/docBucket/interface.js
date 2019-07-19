import React, { Component } from 'react'
//import Grid from '@material-ui/core/Grid';
import illus from '../../svg/folder-man-colour.svg';
//import auth from '../../services/authService';
import WithProjectHeader from '../layout/withProjectHeader';
//import NewDocBucketModal from './newDocBucketModal';
import  Container  from '@material-ui/core/Container';
class Interface extends Component {
  
    handleClick = () => {
        this.props.history.push('/new-docBucket');
  }
  handleFileUpload = ()=>{
      return <input type='file'/>;
  }
    render() {
      const label = "Manage all your project related docs here";
      //const label2 = "Put docs into your bucket now ";
      //const user = auth.getCurrentUser();
      return (
          <Container maxWidth="lg"
              justify="space-evenly"
              alignItems="center">
              <WithProjectHeader 
            label={label}
            onClick={this.handleFileUpload}
            illus={illus}/>
            
              
                
                
      </Container>
    )
  }
}

export default Interface
