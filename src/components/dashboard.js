import React, { Component } from 'react'
// import Navbar from './common/navbar';
// method
import auth from '../services/authService';
import { getProjects, deleteProject } from '../services/projectDataService';
// import { getProject } from '../services/projectDataService';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import CommonButton from './buttons/button';
import CommonCard from './common/card';
// import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import NoProjectHeader from './layout/noProjectHeader';
import WithProjectHeader from './layout/withProjectHeader';
// import illus from '../svg/gamer-colour.svg';
import illus from '../svg/no-projects.svg';
import illus2 from '../svg/project.svg';
import Modal from './common/modal';
//import CommonButton from './buttons/button';

class Dashboard extends Component {
  state = {
    projects: [],
    user: {},
    repoUrl: '',
   
  }

  handleClick = async (title) => {
    //alert(id);

    try {
      // const { data: project } = await getProject(id);
      //alert(project.title);
      // console.log(result);
      this.props.history.push(`/show_project/${title}`);
    }

    catch (ex) {
      //console.log(ex.message);
      toast.error(ex.message);
    }
  }


  handleClickNoProject = () => {
    this.props.history.push('/new');
  }
//  // change in edit
//   onChangeEdit = ({ currentTarget }) => {
//     let editedProject;
//      editedProject[currentTarget.name] = currentTarget.value;
//     this.setState({ editedProject });
// }
  
// edit project
  handleEdit = (project) => {
  this.props.history.push('/project/edit', project);
  
}

// delete project
  
  handleDelete = async (projectToDelete) => {
    let oldProjects = this.state.projects;
    try {
      const projects = this.state.projects.filter(project => project._id !== projectToDelete._id);
      this.setState({ projects });
      await deleteProject(projectToDelete._id);
    }
    catch (ex) {
      toast.error("Something went wrong...");
      this.setState({ projects: oldProjects });
    }
  }
 
  componentDidMount() {

    const oldProjects = { ...this.state.projects };


    getProjects().then(res => {
      const projects = res.data;
      const user = auth.getCurrentUser();
      this.setState({ projects, user });
    })
      .catch(err => {
        
          toast.error("Something went wrong");
          this.setState({ projects: oldProjects });
        
        
      });
    
    const user = auth.getCurrentUser();
    const repoUrl = window.location.href + 'show/' + user.username;
    this.setState({ repoUrl });
    //this.setState({ projects: getProducts() });

  }

  
  render() {

    const { projects, repoUrl } = this.state;
    const label1 = "Your projects will live here ";
    const label2 = "Put projects into your bucket now ";
    const label3 = "All your projects here";
    return (
      <>
        {/* <Navbar /> */}
        <Container maxWidth="lg"
          justify="space-evenly"
          alignItems="center">
          {projects.length === 0 ?
            <NoProjectHeader
             
              label1={label1}
              label2={label2}
              illus={illus}
              onClick={this.handleClickNoProject}/>
            :
            <WithProjectHeader 
           
            label={label3}
              illus={illus2} />
           
          }
          {projects.length !== 0 &&
            <Grid xs={12} md={5} lg={5}>
            <Modal
              openButtonLabel="Share Repository"
              secondaryButtonLabel=" Cancel"
              share={true}
              value={repoUrl}
              titleContent="Share your project repository or use it in your digital resume."
              headContent="Copy the project repository url and share wherever you want"
              />
            </Grid>
          }
          <Grid container spacing={2}
            style={{ marginTop: '5%' }}
            direction="row"

          >


            {projects.map(project => (

              <Grid xs={12} md={5} lg={5}
                item
                direction="row"

                key={project._id}    >
                <CommonCard data={project} label1={project.title} label2={project.description}
                  buttonLabel1='Edit'
                 
                  editHandle={this.handleEdit}
                  deleteHandle={this.handleDelete}
                  cardClickHandle={() => this.handleClick(project.title)}
                />
                {/* <CommonButton label="Edit"/> */}
                <br />
              </Grid>


            ))}
          </Grid>
        </Container>
      </>
    )
  }
}

export default Dashboard
