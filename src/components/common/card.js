import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CommonButton from './../buttons/button';
import Modal from '../common/modal';
import { capitalize } from './../../utils/capitalize';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CommonCard({ data, label1, label2, buttonLabel1, editHandle, deleteHandle, cardClickHandle }) {
    const classes = useStyles();
  const titleContent = `Are you sure to delete the project ${capitalize(data.title)}? Action can't be undone.`
 

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
          <CommonButton label={buttonLabel1} onClick={()=>editHandle(data)} size='small' />
          {/* <Modal
            openButtonLabel="Edit"
          primaryButtonLabel="Save"
        onChange={onChange}
            secondaryButtonLabel=" Cancel"
            onClickPrimary={editHandle}
            data={data}
          size='small'
          edit={true}
            titleContent={titleContentEdit}
          /> */}
          <Modal
            openButtonLabel="Delete"
            primaryButtonLabel="Yes, delete"
            secondaryButtonLabel=" Cancel"
            onClickPrimary={deleteHandle}
            data={data}
            size='small'
            titleContent={titleContent}
             />
            </CardActions>
        </Card>
    );
}