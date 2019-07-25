import React from 'react'
import auth from '../../services/authService';

class Logout extends React.Component {
   
   componentDidMount() {
       auth.logout();
       const { state } = this.props.location;
       window.location = state ? state.from.pathname : '/';
   }
   
   
   
    render() {
        return null
   }
}

export default Logout
