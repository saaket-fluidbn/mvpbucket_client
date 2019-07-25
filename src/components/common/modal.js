import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IosSwitch from './iosSwitch';

export default function Modal({data, openButtonLabel, primaryButtonLabel, primaryType, secondaryButtonLabel, size, value, share, edit, titleContent, headContent, onClickPrimary, onChange}) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
   function handleClickIosSwitch(){
        let isLive = !data.isLive;
       data.isLive = isLive;
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
                    {edit &&
                        <form onSubmit={onClickPrimary}  noValidate style={{ marginTop: "5%" }}>
                            <Grid container spacing={2}>
                                <Grid xs={12}>
                                    <IosSwitch onClick={handleClickIosSwitch} />
                                </Grid>

                                {/* project live url if live */}
                                {data.titleContentisLive ?
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            value={data.liveurl}
                                            onChange={onChange}
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
                                        value={data.title}
                                        onChange={onChange}
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
                                        value={data.description}
                                        onChange={onChange}
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
                                        value={data.productStory}
                                        onChange={onChange}
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
                                        value={data.why}
                                        onChange={onChange}
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
                                        value={data.targetUsers}
                                        onChange={onChange}
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
                                        value={data.tags.join(' ')}
                                        onChange={onChange}
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
                                        value={data.message}
                                        onChange={onChange}
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
                                        value={data.github}
                                        onChange={onChange}
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
                                        value={data.behance}
                                        onChange={onChange}
                                        autoComplete="behance"

                                    />
                                </Grid>
                            </Grid>
                           

                        </form>
                    }
                   
                </DialogContent>
                <DialogActions>
                    {primaryButtonLabel &&
                    <Button onClick={()=>onClickPrimary(data._id)} color="primary" type={primaryType}>
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