import React, { Component } from 'react'
//import Grid from '@material-ui/core/Grid';
import illus from '../../svg/folder-man-colour.svg';
//import auth from '../../services/authService';
import WithProjectHeader from '../layout/withProjectHeader';
import NewDocBucketModal from './newDocBucketModal';
import Container from '@material-ui/core/Container';
import  firebaseService from '../../firebase';
//import auth from '../../services/authService';

class Interface extends Component {


  state = {}



  handleClick = () => {
    this.props.history.push('/new-docBucket');
  }
  handleChange = ({ currentTarget }) => {
    const docs = currentTarget.files[0];
    //console.log(docs);
    this.setState({ docs });
  }
  handleFileUpload = (e) => {
    e.preventDefault();
    //const { firstName } = auth.getCurrentUser();
    const { docs } = this.state;
    //console.log(docs.name);
    const storageTask = firebaseService.storage.ref(`docs/${docs.name}`).put(docs);
    //storageTask.on('state_changed', progress, error, complete)
    storageTask.on('state_changed',
      (snapshot) => {
// progress function
      },
      (error) => {
// error func
      },
      () => {
// complete func
        firebaseService.storage.ref('docs').child(docs.name).getDownloadURL().then(url=>console.log(url));
      });
    //alert('yup');
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
          onSubmit={this.handleFileUpload}
          illus={illus} />


        <NewDocBucketModal
          onSubmit={this.handleFileUpload}
          onChange={this.handleChange} />

      </Container>
    )
  }
}

export default Interface
