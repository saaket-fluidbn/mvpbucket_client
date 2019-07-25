// import React, { Component } from 'react'
// import Form from './common/form'
// import auth from '../services/authService';

// class Profile extends Component {
//   state = {
//     user:{}
//   }
//   componentDidMount() {
//     const user = auth.getCurrentUser();
    
//     this.setState({ user });
   
//   }
  
  
//   render() {
//     return (
//       <div>
//        <br/>
//         <Form

//         data={this.state.user}
//         />
//       </div>
//     )
//   }
// }

// export default Profile


import React, { Component } from 'react'
import SignupForm from './common/signupForm';
import { toast } from 'react-toastify';
import auth from '../services/authService';

class Profile extends Component {
    state = {
        user: {
            'firstName': '',
            'lastName': '',
            'college': '',
            'email': '',
            'username': '',
          

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
                
        const user = this.state.user;
        await auth.updateDetails(user);
        toast.success("Profile details updated successfully");
           
        }
        catch (ex) {
           
            alert(ex.message);
            // if (ex.response.status === 400)
            //     toast.error('User already exists');
            // if (ex.response.status === 404)
            //     toast.error(ex.message);
        }
        
  }
  componentDidMount(){
    // const { _id:id } = auth.getCurrentUser();
     auth.getFullDetails().then(res=>{
       const { data: user } = res;
       this.setState({user});
     })
     .catch(err=> toast.error("Something went wrong..."));


  }
    render() {
        const { firstName, lastName, college, email, username } = this.state.user;
        return (
      <>
                <SignupForm
                    firstName={firstName}
                    lastName={lastName}
                    college={college}
                    email={email}
                    username={username}
                   
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    label="Save"
                    heading="Profile"/>
      </>
    )
  }
}

export default Profile


