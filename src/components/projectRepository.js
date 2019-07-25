import React, { Component } from 'react'

// import Navbar from './common/navbar';
// method
 import auth from '../services/authService';
// import { getProjects } from '../services/projectDataService';
import { getProject } from '../services/projectDataService';
import { getProjectRepo } from '../services/projectDataService';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import CommonButton from './buttons/button';
import CommonCard from './common/card';
// import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import NoProjectHeader from './layout/noProjectHeader';
import WithProjectHeader from './layout/withProjectHeader';
import illus from '../svg/no-projects.svg';
import illus2 from '../svg/explore.svg';
import ProfileBlog from './layout/profileBlog';
import { capitalize } from './../utils/capitalize';

class ProjectRepository extends Component {
    state = {
        projects: [],
        fullName: '',
        college:''
        
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

    // gettingProjects = () => {
    //     const oldProjects = { ...this.state.projects };


    //     getProjects().then(res => {
    //         const projects = res.data;
    //         const user = auth.getCurrentUser();
    //         this.setState({ projects, user });
    //     })
    //         .catch(err => {
    //             toast.error("Something went wrong");
    //             this.setState({ projects: oldProjects });
    //         });


    // }
    componentDidMount() {
        
        getProjectRepo(this.props.match.params.username)
            .then(res => {
                //console.log(res.data);
                const projects = res.data;
                if (projects.length!==0) {
                    const fullName = capitalize(projects[0].user.firstName) + ' ' + capitalize(projects[0].user.lastName);
                    const college = capitalize(projects[0].user.college);
                    this.setState({ projects, fullName, college });
                }
                else this.setState({ projects });
                //console.log(this.state.projects[0].user.firstName)
            }).catch(err => console.log(err));
       
           
    }
    handleClickNoProject = (tag) => {
        if (tag) return this.props.history.push('/new');
        this.props.history.push('/login');
    }

    render() {
        const user = auth.getCurrentUser();
        const { projects } = this.state;
        const label1 = "No projects for now!";
        const label2 = !user ? "Login and start creating projects. " : "How about a new project?"
        const label3 = "Explore projects";
        const tag = user ? true : false;
       
        // const projectUserFullname = `${projects[0].user.firstName.toUpperCase()} ${projects[0].user.firstName.toUpperCase()} `;
        // const college = projects[0].user.college.toUpperCase(); 
        return (
            <>
                {/* <Navbar /> */}
                <br/><br/>
                <Container maxWidth="lg"
                    justify="space-evenly"
                    alignItems="center">
                    <ProfileBlog data={this.state} />

                    {projects.length === 0 ?
                        <NoProjectHeader
                            
                            label1={label1}
                            label2={label2}
                            illus={illus}
                            onClick={()=>this.handleClickNoProject(tag)} />
                        :
                        <WithProjectHeader
                           
                            label={label3}
                            illus={illus2} />
                    }
                   
                    {/* <Grid lg={6} xs={6} spacing={6}>
                        <h1>{projects.length!==0 ? 'Creator' : null}</h1>
                        <h3>{fullName}</h3>
                        <h5>{college}</h5>
                        
                    </Grid> */}
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

export default ProjectRepository
