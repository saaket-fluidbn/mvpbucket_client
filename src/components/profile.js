import React, { Component } from 'react'
import Form from './common/form'
import auth from '../services/authService';

class Profile extends Component {
  state = {
    user:{}
  }
  componentDidMount() {
    const user = auth.getCurrentUser();
    
    this.setState({ user });
   
  }
  
  
  render() {
    return (
      <div>
       <br/>
        <Form
        data={this.state.user}
        />
      </div>
    )
  }
}

export default Profile
