import React, { Component } from 'react'
// import Navbar from './common/navbar';
// method
import auth from '../services/authService';
import { getProjects } from '../services/projectDataService';
import { getProject } from '../services/projectDataService';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import CommonButton from './buttons/button';
import CommonCard from './common/card';
// import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import NoProjectHeader from './layout/noProjectHeader';
import WithProjectHeader from './layout/withProjectHeader';
import illus from '../svg/gamer-colour.svg';
import illus2 from '../svg/project.svg';
 
class Dashboard extends Component {
  state = {
    projects: [],
    user:{}
  }

  handleClick = async (id) => {
    //alert(id);

    try {
      const { data: project } = await getProject(id);
      //alert(project.title);
      // console.log(result);
      this.props.history.push('/show_project', project);
    }

    catch (ex) {
      //console.log(ex.message);
      toast.error(ex.message);
    }
  }

  gettingProjects = () => {
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


  }
  componentDidMount() {

    this.gettingProjects();
    //this.setState({ projects: getProducts() });
  }
  handleClickNoProject = () => {
    this.props.history.push('/new');
}
  
  render() {

    const { projects, user } = this.state;
    const label1 = "your projects will live here ";
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
              user={user}
              label1={label1}
              label2={label2}
              illus={illus}
              onClick={this.handleClickNoProject}/>
            :
            <WithProjectHeader 
            user={user}
            label={label3}
            illus={illus2}/>
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
                  buttonLabel='See project'
                  buttonClickHandle={() => this.handleClick(project._id)}
                  cardClickHandle={() => this.handleClick(project._id)}
                />
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
