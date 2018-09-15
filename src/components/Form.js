import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class AddPostDialog extends Component {
    
    

    render () {
        //console.log('Formprops: ', this.data);
        return (
            <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Enter a name and day for visit:
                </DialogContentText>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="email"
                fullWidth
                />
                <TextField
                margin="dense"
                id="day"
                label="Day"
                type="email"
                fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={this.props.handleSubmit} color="primary">
                Add
                </Button>
                <Button onClick={this.props.onClose} color="primary">
                Cancel
                </Button>
            </DialogActions>
            </Dialog>
        );
    }
}

export default AddPostDialog;
