import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Welcome from './components/welcome';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import ProductTemplate from './components/templates/template';
import ShowProject from './components/showProject';
import ExampleTemplate from './components/templates/exampleTemplate';
import Navbar from './components/common/navbar';
import auth from './services/authService';
import Logout from './components/auth/logout';
import Interface from './components/docBucket/interface';
import NewDocBucket from './components/docBucket/newDocBucket';

class App extends React.Component {
 
  state = {}
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    
    return (
      <div>
        <ToastContainer/>
        <Navbar user={this.state.user}/>
        <Switch>
          {/* <Route path='/signup' render={(props) => (<Signup {...props} handleSignup={this.handleSignup} />)} /> */}
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/template/example' component={ExampleTemplate} />
          <Route path='/new' component={ProductTemplate} />
          <Route path='/docBucket' component={Interface} />
          <Route path='/new-docBucket' component={NewDocBucket} />
          <Route  path='/show_project' component={ShowProject} />
          <Route  path='/profile' component={Profile} />
          {/* <Route  path='/dashboard' component={Dashboard} /> */}
          <Route exact path='/' component={this.state.user ? Dashboard : Welcome}/>
         
          </Switch>
      </div>
    );
  }
}

export default App;
 