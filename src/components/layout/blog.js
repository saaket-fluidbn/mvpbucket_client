import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
// import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import CommonButton from './../buttons/button';
// import  List  from '@material-ui/core/List';
// import  ListItem  from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));

export default function Blog({data, user}) {
    const classes = useStyles();

// social link click handler
    const handleSocialClick = (tag) => {
         window.open(data[tag], '_blank');
}
    const handleTryClick = (isLive) => {
      return  isLive ? window.open(data.liveurl, '_blank') : null;
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
             
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        {/* Increase the priority of the hero background image */}
                        {
                            <img
                                style={{ display: 'none' }}
                                src="https://source.unsplash.com/user/erondu"
                                alt="background"
                            />
                        }
                        <div className={classes.overlay} />
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                                        {data.title}
                  </Typography>
                                    <Typography variant="h6" color="inherit" paragraph>
                                       {data.description}
                  </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End main featured post */}
                    {/* Sub featured posts */}
                    <Grid container spacing={4} className={classes.cardGrid}>
                        
                            <Grid item  xs={12} md={6}>
                                <CardActionArea component="a" onClick={()=>handleTryClick(data.isLive)}>
                                    <Card className={classes.card}>
                                        <div className={classes.cardDetails}>
                                            <CardContent>
                                                <Typography component="h2" variant="h5">
                                                   Status {data.isLive ? ': Live':': Not Live'}
                                                </Typography>
                                            {data.isLive ?
                                                <Typography variant="h6" paragraph>
                                                    Try {data.title}
                                                </Typography>
                                                : null
                                            }
                                               
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                        </Hidden>
                                    </Card>
                            </CardActionArea>
                            
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Paper elevation={0} className={classes.sidebarAboutBox}>
                            <Typography variant="h6" gutterBottom>
                                Creator
                </Typography>
                                
                                        <Typography variant="h8" gutterBottom>
                                            {`${user.firstName} ${user.lastName}`}
                                           <p> {user.college}</p>
                                        </Typography>
                                   
                                <Typography variant="h10" gutterBottom>
                                {data.message}
                </Typography>
                            </Paper>
                    
                        </Grid>
                        
                    </Grid>
                    {/* End sub featured posts */}
                    <Grid container spacing={5} className={classes.mainGrid}>
                        {/* Main content */}
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" gutterBottom>
                               {data.productStory ? `The origin of ${data.title}` : null}
              </Typography>
                            {data.productStory ?
                                <Divider />
                                : null
                            }
                            {/* {posts.map(post => (
                                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                                    {post}
                                </Markdown>
                            ))} */}
                            <Typography variant="h6" gutterBottom style={{ fontWeight:'400' }}>
                                {data.productStory ? data.productStory : null}
                            </Typography>
                        </Grid>
                        
                        {/* For why to try product */}
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" gutterBottom>
                               Why should we consider {data.title}!
                            </Typography>
                            <Divider />
                            
                            <Typography variant="h6" gutterBottom style={{ fontWeight: '400' }}>
                                {data.why}
                            </Typography>
                        </Grid>

                        {/* Who can use */}

                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" gutterBottom>
                                Who can use {data.title}!
                            </Typography>
                            <Divider />

                            <Typography variant="h6" gutterBottom style={{ fontWeight: '400' }}>
                                {data.targetUsers}
                            </Typography>
                        </Grid>

                        {/* End main content */}
                        {/* Sidebar */}
                       
                        {/* End sidebar */}
                        <br />
                        <Grid item xs={12} md={8}>
                        {data.github || data.behance ? <Typography variant="h6" gutterBottom>Social links for {data.title}</Typography>
                            : null}

                        {/* social links for project */}
                        {data.github ? <CommonButton label='Github' onClick={() => handleSocialClick('github')} /> : null}
                        {data.behance ? <CommonButton label='Behance' onClick={() => handleSocialClick('behance')} /> : null}
                         </Grid>
                    </Grid>
                </main>
            </Container>
            {/* Footer */}
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    {data.isLive ?
                        <Typography variant="h6" align="center" gutterBottom>
                        <CommonButton label={`Try ${data.title}`} onClick={handleTryClick} />
                    </Typography>
                        : null}
                   
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Thanks for exploring <span style={{ color: '#4dc5da', fontWeight: '300',fontSize:'40px' }}>  {data.title}</span>. All set to be the next
                        <span style={{ color: '#4dc5da', fontWeight: '300', fontSize:'40px' }}> Big thing.</span>
          </Typography>
                   
                </Container>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}