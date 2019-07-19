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
export default function NewDocBucketModal({onClick}) {
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
                    <form>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Project title"
                        type="text"
                        name="title"
                        fullWidth
                    />
                    <input type='file' name='file' id='file' style={{ display:'none' }} multiple/>
                        <label htmlFor='file'><img src={upload} alt='upload docs' style={{ cursor:'pointer' }}/> </label>
                           
           
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Upload
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}