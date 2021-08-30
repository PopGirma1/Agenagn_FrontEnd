import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Grid, IconButton} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import backEndApi from "../../../services/api";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '500px',
        border: '0px solid #eee',

    },
    margin: {
        fontSize: '15px',
        borderRadius: '4px',
        "&:hover": {backgroundColor: '#3A6351'},
    },
    iconBackgroundBlack: {
        backgroundColor: 'rgba(57,50,50,0.2)'
    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onBuyCreditClicked = async (e) => {
        e.preventDefault();
        await backEndApi.post('./upgradeListing', {id: props.row._id, ownerEmail: props.userDetail.email});
        console.log("Upgrade To Premium");
        handleClose();
        window.location.reload(false);

    };

    const onUpgradeListingClicked = async (e) => {
        e.preventDefault();
        await backEndApi.post('./upgradeListing', {id: props.row._id, ownerEmail: props.userDetail.email});
        handleClose();
        window.location.reload(false);
    };

    return (

        <div>
            <IconButton style={{backgroundColor: '#3A6351', color: '#fff'}}
                        className={[classes.margin, classes.iconBackgroundBlack]}
                        size='small' onClick={handleOpen}>
                <span style={{lineHeight: '14px', fontSize: '12px'}}>
                    <i className="fa fa-level-up" aria-hidden="true"></i>
                </span>

            </IconButton>

        </div>
    );
}
