import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../../services/authService'

const LoggedRoute = ({ path, component: Component, render, ...rest }) => {
    return (
        <Route {...rest} path={path} render={props => {
            if (auth.getCurrentUser()) return <Redirect to='/' />;
            return Component ? <Component {...props} /> : render(props);
        }} />
    );
}
export default LoggedRoute;