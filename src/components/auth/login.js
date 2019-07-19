import React, { Component } from 'react'
import LoginForm from './../common/loginForm';
import auth from '../../services/authService';
import { toast } from 'react-toastify';
class Login extends Component {
 
  state = {
    user: {
      username: '',
      password:''
   }
 }
  handleChange = ({ currentTarget: input }) => {
    let user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
 }
// validation needs to be done
  handleSubmit = async (e) => {
  try{
      e.preventDefault();
    const user = this.state.user;
    await auth.loginUser(user);
    window.location = '/';
  }
  catch (ex) {
    toast.error(ex.message);
  }
  }
  render() {
    const { username, password } = this.state.user;
    
    return (
      <LoginForm
        username={username}
        password={password}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}/>
    )
  }
}

export default Login
