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
import Container from '@material-ui/core/Container';


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

export default function ProfileBlog({ data }) {
    const classes = useStyles();

    // social link click handler
    // const handleSocialClick = (tag) => {
    //     window.open(data[tag], '_blank');
    // }
    // const handleTryClick = (isLive) => {
    //     return isLive ? window.open(data.liveurl, '_blank') : null;
    // }
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
                               
                                alt="background"
                            />
                        }
                        <div className={classes.overlay} />
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                                        {data.fullName}
                                    </Typography>
                                    <Typography variant="h6" color="inherit" paragraph>
                                        {data.college }
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End main featured post */}
                    {/* Sub featured posts */}
                    <Grid container spacing={4} className={classes.cardGrid}>

                        <Grid item xs={12} md={6}>
                            <CardActionArea component="a" >
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {/* some data here */}
                                                Linkedin Profile
                                            </Typography>
                                           

                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            className={classes.cardMedia}
                                           
                                            title="Image title"
                                        />
                                    </Hidden>
                                </Card>
                            </CardActionArea>

                        </Grid>
                    

                    </Grid>

                </main>
            </Container>
            
        </React.Fragment>
    );
}