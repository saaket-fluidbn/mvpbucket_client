import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Modal({data, openButtonLabel, primaryButtonLabel, secondaryButtonLabel, size, value, share, titleContent, headContent, onClickPrimary}) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
   
    return (
        <div>
            <Button variant="outlined" style={{ color:'#4dc5da', borderColor: '#4dc5da' }} size={size} onClick={handleClickOpen}>
               {openButtonLabel}
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{titleContent}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {headContent}
          </DialogContentText>
                    {share && <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={value}
                        type="email"
                        fullWidth
                    />}
                  
                </DialogContent>
                <DialogActions>
                    {primaryButtonLabel &&
                    <Button onClick={()=>onClickPrimary(data)} color="primary">
                       {primaryButtonLabel}
                    </Button>
                    }
                    {secondaryButtonLabel
                        &&
                        <Button onClick={handleClose} color="primary">
                            {secondaryButtonLabel}
                        </Button>
                    }
                  
                </DialogActions>
            </Dialog>
        </div>
    );
}