import React, { Component } from 'react';
//import auth from '../services/authService';
import Blog from './layout/blog';
// import Error404 from './errors/error404';
import { getProject } from './../services/projectDataService';
import { toast } from 'react-toastify';

class ShowProject extends Component {
  state = {
    project: {},
    user:{}
  }
     
  
  
  componentDidMount() {
      // const { state: project } = this.props.location;
   // console.log(project);  
    const title = this.props.match.params.title;
    getProject(title).then(res => {
      const { data: project } = res;
      const user = project ? project.user : {};
      this.setState({ project, user });
    })
      .catch(err => toast.error("Something went wrong..."));
    
  }
  
    handleClick = (project) => {
        window.open(project.liveurl, '_blank');
  }
    render() {
        const { project, user } = this.state;
        return (
            <div>
                
            <div style={{ marginTop: '5%' }}>

              <Blog data={project} user={user} /> 
              {/* {Object.keys(this.state.user).length!==0 ?
                <Blog data={project} user={user} /> 
                :
                <Error404 context='Please try from within the application without pasting the url in the browser.' />
              
              }
              */}
              
                </div>
                {/* <small>Status: {project.isLive ? 'Live':'Not Live'}</small>
                <h2>{product.title}</h2>
                <h3>{product.description}</h3>
                {product.isLive ? <p><CommonButton label={`Try ${product.title}`} onClick={() => this.handleClick(product)} /></p> : null}
                {product.productStory ? <p>{product.productStory}</p> : null}
                <p>{product.why}</p>
                <p>{product.targetUsers}</p>
                */}
      </div>
    )
  }
}

export default ShowProject
