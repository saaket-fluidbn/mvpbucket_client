import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import Error404 from './components/errors/error404';
import auth from './services/authService';
import Logout from './components/auth/logout';
import Interface from './components/docBucket/interface';
import NewDocBucket from './components/docBucket/newDocBucket';
import ProjectRepository from './components/projectRepository';
import ProtectedRoute from './components/common/protectedRoute';
import LoggedRoute from './components/common/loggedRoute';
import { search } from './services/searchService';
// import { getProject } from './services/projectDataService';
import EditProject from './components/editProject';

class App extends React.Component {
 
  state = {
    query: '',
    searchResults:[]
  }
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  handleChange = async ({currentTarget}) => {
    const query = currentTarget.value;
    this.setState({ query });
    if (query !== '') {
      const { data: searchResults } = await search(query);

      this.setState({ searchResults });
    }
   
    else
      this.setState({ searchResults: [] });
  }
  handleSearchClick = async (title) => {
  
    window.location = `/show_project/${title}`;
    
  }
  render() {
    const { query, searchResults } = this.state;
    return (
      <div>
        <ToastContainer/>
        <Navbar user={this.state.user}
          onChange={this.handleChange}
          onClick={this.handleSearchClick}
          value={query}
          searchResults={searchResults}/>
        <Switch>
          {/* <Route path='/signup' render={(props) => (<Signup {...props} handleSignup={this.handleSignup} />)} /> */}
          <LoggedRoute path='/signup' component={Signup} />
          <LoggedRoute path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
           <Route path='/show/:username' component={ProjectRepository} />
          <ProtectedRoute path='/template/example' component={ExampleTemplate} />
          <ProtectedRoute path='/project/edit' component={EditProject} />
          <ProtectedRoute path='/new' component={ProductTemplate} />
          <ProtectedRoute path='/docBucket' component={Interface} />
          <ProtectedRoute path='/new-docBucket' component={NewDocBucket} />
          <Route  path='/show_project/:title' component={ShowProject} />
          <Route  path='/profile' component={Profile} />
          {/* <Route  path='/dashboard' component={Dashboard} /> */}
          <Route exact path='/' component={this.state.user ? Dashboard : Welcome} />
          <Route path='/not-found' component={Error404}/>
          <Redirect to='/not-found'/>
         
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
 