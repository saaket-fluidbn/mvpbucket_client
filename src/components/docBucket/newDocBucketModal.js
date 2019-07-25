import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import  Fab  from '@material-ui/core/Fab';
import  AddIcon  from '@material-ui/icons/Add';
import upload from '../../svg/baseline-cloud_upload-24px.svg';

export default function NewDocBucketModal({ onChange, onSubmit}) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
          
        <Fab  onClick={handleClickOpen} style={{ color: 'white', background: '#4dc5da', fontWeight: 'bold',marginLeft:'20%' }} aria-label="Add">
                   <AddIcon />
                   </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New docBucket</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Store docs for your project
          </DialogContentText>
                    <form onSubmit={onSubmit} encType='multipart/form-data'>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Project title"
                        type="text"
                        name="title"
                        fullWidth
                    />
                    <input type='file' name='docs' id='docs' style={{ display:'none' }} onChange={onChange} multiple/>
                        <label htmlFor='docs' style={{ cursor: 'pointer' }}><img src={upload} alt='Upload docs' /> Pick files </label>
                           
            <DialogActions>
                    <Button type="submit" color="primary">
                        Upload
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                </DialogActions>
                    </form>
                </DialogContent>
               
            </Dialog>
        </div>
    );
}