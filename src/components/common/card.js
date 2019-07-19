import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CommonButton from './../buttons/button';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CommonCard({data, label1, label2, buttonLabel, buttonClickHandle, cardClickHandle }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={cardClickHandle}>
                {/* <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {label1}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {label2} 
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <p style={{ fontWeight: 'bold' }}>Status: {data.isLive ? ' Live' : ' Not Live'}</p>
                <CommonButton label={buttonLabel} onClick={buttonClickHandle}/>
            </CardActions>
        </Card>
    );
}