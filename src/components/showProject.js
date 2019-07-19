import React, { Component } from 'react';
import auth from '../services/authService';
import Blog from './layout/blog';

class ShowProject extends Component {
    state = {
      project: {},
      user:{}
  }
  
  componentDidMount() {
      const { state: project } = this.props.location;
    console.log(project);  
    const user = auth.getCurrentUser();
    this.setState({ project, user });
  }
  
    handleClick = (project) => {
        window.open(project.liveurl, '_blank');
  }
    render() {
        const { project, user } = this.state;
        return (
            <div>
                
                <div style={{ marginTop:'5%' }}>
              <Blog data={project} user={user}/>
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
