import React, { Component } from 'react'
import SignupForm from '../common/signupForm';
import { registerUser } from './../../services/userService';
// import Joi from 'joi-browser';
import { toast } from 'react-toastify';


class Signup extends Component {
    state = {
        user: {
            'firstName': '',
            'lastName': '',
            'college': '',
            'email': '',
            'username': '',
            'password': '',

        },
        errors:{}
    }
     
   
    // validation = (user) => {
      
    //    const schema = {
    //         'firstName': Joi.required().string().max(255).label('First Name'),
    //         'lastName': Joi.required().string().max(255).label('Last Name'),
    //         'college': Joi.required().string().max(255).label('College Name'),
    //         'email': Joi.required().string().max(255).label('Email'),
    //         'username': Joi.required().string().max(255).label('Username'),
    //         'password': Joi.required().string().max(255).label('Password'),
    //     }
    //     const { error } = Joi.validate(user, schema, { abortEarly:false })
    //     if (!error) return null;
    //     const errors = {}
    //     for (let item of error.details) {
    //         errors[item.path[0]] = item.message;
    //     }
    //     return errors;
    // }
    
    handleChange = ({ currentTarget:input }) => {

        const user = { ...this.state.user };
        user[input.name] = input.value;
        this.setState({ user });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        //const { firstName, lastName, college, email, username, password } = this.state.user;
        
        // try {
        //       const errors = this.validation(this.state.user);
        // this.setState({ errors: errors || {} });
        //     if (errors) return;
        // }
        // catch (ex) {
        //     toast.error(ex.message);
        // }
        try {
                
        
        // submitting form
            const response = await registerUser(this.state.user);
            localStorage.setItem('token', response.headers['x-auth-token']);
            window.location = '/';
        }
        catch (ex) {
           
            toast.error(ex);
            // if (ex.response.status === 400)
            //     toast.error('User already exists');
            // if (ex.response.status === 404)
            //     toast.error(ex.message);
        }
        
  }
    render() {
        const { firstName, lastName, college, email, username, password } = this.state.user;
        return (
      <>
                <SignupForm
                    firstName={firstName}
                    lastName={lastName}
                    college={college}
                    email={email}
                    username={username}
                    password={password}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}/>
      </>
    )
  }
}

export default Signup


