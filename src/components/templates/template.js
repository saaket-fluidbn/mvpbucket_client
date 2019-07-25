import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';

// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import templateIllus from '../../svg/template_illus.svg';
//form

import IosSwitch from './../common/iosSwitch';
// methods
import { addProject } from './../../services/projectDataService';
import CommonButton from './../buttons/button';
import { toast } from 'react-toastify';

class ProductTemplate extends Component {

    state = {
        isLive: true,
        liveurl: '',
        title: '',
        description: '',
        productStory: '',
        why: '',
        targetUsers: '',
        tags: '',
        message:'',
        github: '',
        behance: ''
        
    }
    useStyles = makeStyles(theme => ({
        '@global': {
            body: {
                backgroundColor: theme.palette.common.white,
            },
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'right',
            alignItems: 'right',
            
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: '#4dc5da',
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(5)
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    demoTemplate = () => {
        this.props.history.push('/template/example');
}

    handleClickIosSwitch = () => {
        let isLive = !this.state.isLive;
        this.setState({ isLive });
}
  // form submission handler
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const { isLive, liveurl, title, description, productStory, why, targetUsers, tags, message, github, behance } = this.state;
        const project = {
            isLive,
            liveurl,
            title,
            description,
            productStory,
            why,
            targetUsers,
            tags,
            message,
            github,
            behance
        }
        try { await addProject(project);
            window.location = '/';}
        catch (ex) {
           if(ex.response.status===400)
            toast.error(ex.response.data); // change to something went wrong
    }
        
       

    }
  // handling input change
    handleChange = ({currentTarget}) => {
        this.setState({ [currentTarget.name]: currentTarget.value });
        //console.log(currentTarget.name.value);
    }

    
    render() {
   
        const classes = this.useStyles;
        const { isLive, liveurl, title, description, productStory, why, targetUsers, tags, github, behance, message } = this.state;
        return (
            <>
          
            <Container component="main" maxWidth="xs">
                <Grid  xs={8}>
                    <img src={templateIllus} alt="" />
                    
                    
                        <CommonButton label='Product example' onClick={this.demoTemplate}/>
                    </Grid>
                <CssBaseline />


                <div className={classes.paper} style={{ textAlign:'right', alighItems:'right' }}>
                    {/* <Avatar className={classes.avatar}>
                    <Logo />
                </Avatar> */}



                    {/* <Typography component="h1" variant="h5" style={{ marginTop:"10%" }}>
                      Product Template
        </Typography> */}
                    <form onSubmit={this.handleSubmit} className={classes.form} noValidate style={{ marginTop: "5%" }}>
                        <Grid container spacing={2}>
                                <Grid xs={12}>
                                    <IosSwitch onClick={this.handleClickIosSwitch} defaultVal={isLive} />
                                </Grid>
                            
                                {/* project live url if live */}
                                {isLive ?
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            value={liveurl}
                                            onChange={this.handleChange}
                                            id="liveurl"
                                            label="Live web or app url"
                                            name="liveurl"
                                            autoComplete="liveurl"
                                            placeholder="Begin with http:// or https://"
                                        />
                                    </Grid>
                                    : null
                                }
                                <Grid item xs={12}>
                                <TextField
                                    autoComplete="title"
                                    name="title"
                                    variant="outlined"
                                    required
                                    fullWidth
                                        value={title}
                                        onChange={this.handleChange}
                                    id="title"
                                    label="Title"
                                    autoFocus
                                />
                            </Grid>
                           
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    multiline
                                        value={description}
                                        onChange={this.handleChange}
                                    rowsMax="5"
                                    id="description"
                                    label="Description"
                                    name="description"
                                    autoComplete="description"
                                    placeholder="Try to follow the researched product template..."
                                />
                                </Grid>
                              
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    
                                    fullWidth
                                    multiline
                                    rowsMax="8"
                                    id="productStory"
                                    label="Product origin story"
                                    name="productStory"
                                        value={productStory}
                                        onChange={this.handleChange}
                                    autoComplete="productStory"
                                    placeholder="A good story shows your problem solving attitude & creative intelligence..."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="why"
                                    label="Why try this?"
                                    name="why"
                                    value={why}
                                   onChange={this.handleChange}
                                    autoComplete="why"
                                    placeholder="Please be specific about the advantages..."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="targetUsers"
                                    label="Who should try this?"
                                    type="text"
                                        id="targetUsers"
                                        value={targetUsers}
                                        onChange={this.handleChange}
                                    autoComplete="targetUsers"
                                    placeholder="Please be specific about the target audience..."

                                />
                                </Grid>
                                 <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="tags"
                                    label="Relevant tags for the project"
                                    type="text"
                                        id="tags"
                                        value={tags}
                                        onChange={this.handleChange}
                                    autoComplete="tags"
                                    placeholder="Mention tags separated by a single space..."

                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        
                                        fullWidth
                                        id="message"
                                        label="Any message for the audience"
                                        name="message"
                                        value={message}
                                        onChange={this.handleChange}
                                        autoComplete="message"
                                        placeholder="Anything you wanna say to the audience..."
                                    />
                                </Grid>
                            {/* social links */}

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    
                                    fullWidth
                                    name="github"
                                    label="Github project url"
                                    type="text"
                                        id="github"
                                        value={github}
                                        onChange={this.handleChange}
                                    autoComplete="github"

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"

                                    fullWidth
                                    name="behance"
                                    label="Behance project url"
                                    type="text"
                                        id="behance"
                                        value={behance}
                                        onChange={this.handleChange}
                                    autoComplete="behance"

                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            style={{ backgroundColor: '#4dc5da', color: 'white', marginTop:'2%', marginBottom:'10%'}}
                        >
                            Save
          </Button>
                  
                    </form>
                </div>

                </Container>
                </>
    )
  }
}

export default ProductTemplate

/**-------------------------------------------------------------------- */









