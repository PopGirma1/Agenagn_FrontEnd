import React from 'react';
import {Button, Grid, Typography, withStyles} from '@material-ui/core';
import {DropzoneArea} from 'material-ui-dropzone';
import {Redirect} from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import backEndApi from '../../services/api'

const useStyles = theme => ({
    root: {
        marginTop: '20px',
        marginLeft: '16px',
        "& input[type=number]": {
            "&::-webkit-inner-spin-button": {
                '-webkit-appearance': 'none',
            },
            "&::-webkit-outer-spin-button": {
                '-webkit-appearance': 'none',
            },
            '-moz-appearance': 'textField'
        },
        "& .MuiTypography-body2": {
            fontWeight: 800
        },
    },
    firstGrid: {
        background: '#EEEEEE',
        boxShadow: '-9px 18px 16px rgba(0, 0, 0, 0.05)',
        borderRadius: '5px',
    },

    input: {
        padding: '10px',
        marginTop: '5px',
        width: '100%',
        height: '40px',
        borderRadius: '5px',
        border: '0.5px solid #9e9e9e',
        background: '#EEEEEE',
        "&::-webkit-input-placeholder": {
            color: 'rgba(57,50,50,0.3)'
        },

        "&::-moz-placeholder": { /* Firefox 19+ */
            color: 'rgba(57,50,50,0.3)'

        },
        "&:-ms-input-placeholder": { /* IE 10+ */
            color: 'rgba(57,50,50,0.3)'

        },
        "&:-moz-placeholder": { /* Firefox 18- */
            color: 'rgba(57,50,50,0.3)'

        },

    },
    dataPicker: {
        "& .react-datepicker-wrapper": {
            display: 'block',
        },
        "& input": {},


    },
    textarea: {
        padding: '10px',
        resize: 'none',
        width: '100%',
        background: '#EEEEEE',
        border: '0.5px solid #9e9e9e',
        borderRadius: '5px',
        height: '120px',
        "&::-webkit-input-placeholder": {
            color: 'rgba(57,50,50,0.3)'
        },

        "&::-moz-placeholder": { /* Firefox 19+ */
            color: 'rgba(57,50,50,0.3)'

        },
        "&:-ms-input-placeholder": { /* IE 10+ */
            color: 'rgba(57,50,50,0.3)'

        },
        "&:-moz-placeholder": { /* Firefox 18- */
            color: 'rgba(57,50,50,0.3)'

        },
    },
    inputsContainer: {
        margin: '15px'
    },
    dropZone: {
        "& .MuiDropzoneArea-root": {
            background: '#EEEEEE',
            marginBottom: '30px',
            maxHeight: '243',
            height: '210px',
            minHeight: '200px',
            border: '.5px solid #9e9e9e',

        },
        "& .MuiTypography-h5": {
            fontSize: '14px',
            fontWeight: 'normal'
        },
        "& .MuiDropzoneArea-text": {
            marginTop: '130px',
            color: '#9e9e9e'
        },
        "& .MuiSvgIcon-root": {
            display: 'flex',
            marginTop: '-100px',
            marginLeft: '110px',
            color: "#9e9e9e"
        }
    },
    inputError: {
        color: 'red',
        fontSize: '14px',
        display: 'none',
    },
});

class NewListing extends React.Component {
    state = {

        location: '',
        bed_room: '',
        monthly_payment: '',
        floor: '',
        phone_number: '',
        guest_house: '',
        description: '',

        file: null,
        errorMessage: '',
        isRedirectToHomepage: false,

    };
    characterCounter = 144;


    /*handlePreviewIcon = (fileObject, classes) => {
        const {type} = fileObject.file;
        const iconProps = {
            className: classes.image,
        };

        if (type.startsWith("video/")) return <Theaters {...iconProps} />;

        switch (type) {
            case "application/msword":
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                return <Description {...iconProps} />;
            case "application/pdf":
                return <PictureAsPdf {...iconProps} />;
            default:
                return <AttachFile {...iconProps} />
        }
    };*/

    onFormSubmit = (e) => {
        console.log(e.currentTarget.value);
        e.preventDefault();

        this.validateForm(e);
    };
    listingStatusFilter = (e) => {
        if (e.currentTarget.value === "Pending") {
            return "Submitted"
        }
        return "Draft"

    };
    validateForm = (e) => {


        /*const jvLinkParse = () =>{
            if(!(this.state.phone_number.indexOf('http://') > -1)){
                return "http://" + this.state.phone_number
            }else{
                return this.state.phone_number
            }
        };
        console.log(jvLinkParse());*/

        const product = {

            location: this.state.location,
            bedRoom: parseInt(this.state.bed_room),
            monthlyPayment: parseInt(this.state.monthly_payment),
            floor: parseInt(this.state.floor),
            phoneNumber: parseInt(this.state.phone_number),
            guestHouse: this.state.guest_house,
            description: this.state.description,

            /*listingStatus : this.listingStatusFilter(e),
            reviewStatus :  e.currentTarget.value*/
        };

        if (!this.state.location) {
            document.getElementById('locationError').style.display = 'block';
        }
        if (!this.state.description) {
            document.getElementById('descriptionError').style.display = 'block';

        } else if (this.characterCounter > 1) {
            document.getElementById('descriptionError').style.display = 'block';
        }
        if (!this.state.floor) {
            document.getElementById('floorError').style.display = 'block';

        }
        if (!this.state.monthly_payment) {
            document.getElementById('monthlyPaymentError').style.display = 'block';

        }
        if (!this.state.bed_room) {
            document.getElementById('bedRoomError').style.display = 'block';

        }
        if (!this.state.guestHouse) {
            document.getElementById('guestHouseError').style.display = 'block';

        }
        if (!this.state.phoneNumber) {
            document.getElementById('availabilityError').style.display = 'block';

        }

        if (!this.state.file) {
            document.getElementById('dropZoneImage').style.display = 'block';
        }

        if (this.state.location && this.state.description &&
            this.state.floor && this.state.monthly_payment
            && this.state.guestHouse
            && this.state.bed_room
            && this.state.phoneNumber && this.state.file && this.characterCounter < 1
            && parseInt(this.state.bed_room) < 100) {
            //Api request or form submit to backend.


            this.submitNewListingApiRequest(product);


            //this.imageUploadApiRequest();
            /*axios.all([
                axios.post(`/my-url`, {
                    myVar: 'myValue'
                }),
                axios.post(`/my-url2`, {
                    myVar: 'myValue'
                })
            ])
                .then(axios.spread((data1, data2) => {
                    // output of req.
                    console.log('data1', data1, 'data2', data2)
                }));*/

        } else {
            //for not yet validated

        }


    };

    submitNewListingApiRequest = async (newLaunchDetails) => {
        /*let user = this.props.getToken();*/

        const formData = new FormData();
        formData.append('file', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        let response = await backEndApi.post('/addhouse', {params: newLaunchDetails});
        let resImage = await backEndApi.post('/uploadHouseImage', formData, config);

        console.log("The files and Image success fully uploaded" + response);
        this.setState({isRedirectToHomepage: true,})

    };


    onLocationChanged = (e) => {
        if (e.target.value.length === 0) {
            document.getElementById('locationError').style.display = 'block';
        } else {
            document.getElementById('locationError').style.display = 'none';

        }
        this.setState({location: e.target.value});
        if (e.target.value !== 1) {
            this.setState({location: e.target.value})
        }
    };

    onDescriptionChanged = (e) => {
        this.characterCounter = 144 - e.target.value.length;
        if (this.characterCounter < 1) {
            document.getElementById('remainingCharacter').style.display = 'none';
            document.getElementById('descriptionError').style.display = 'none';
        } else if (this.characterCounter > 0) {
            document.getElementById('descriptionError').style.display = 'block';
        } else {
            document.getElementById('descriptionError').style.display = 'none';

        }
        this.setState({description: e.target.value})
    };
    onFloorchanged = (e) => {
        if (e.target.value === 'Select Floor') {
            document.getElementById('floorError').style.display = 'block';

        } else {
            document.getElementById('floorError').style.display = 'none';
        }
        this.setState({floor: e.target.value})
    };
    onMonthlyPaymentChanged = (e) => {
        if (e.target.value.length === 0) {
            document.getElementById('monthlyPaymentError').style.display = 'block';
        } else {
            document.getElementById('monthlyPaymentError').style.display = 'none';
        }

        this.setState({monthly_payment: e.target.value})
    };
    onBedroomChanged = (e) => {
        const changeToInt = parseInt(e.target.value);
        if (e.target.value.length === 0 || changeToInt > 100) {
            document.getElementById('bedRoomError').style.display = 'block';

        } else {
            document.getElementById('bedRoomError').style.display = 'none';

        }
        this.setState({bed_room: e.target.value})
    };
    onGuestHouseChanged = (e) => {

        if (e.target.value.length === 0) {
            document.getElementById('guestHouseError').style.display = 'block';

        } else {
            document.getElementById('guestHouseError').style.display = 'none';

        }
        this.setState({guestHouse: e.target.value})
    };
    onPhoneNumberChanged = (e) => {

        if (e.target.value.length === 0) {
            document.getElementById('phoneNumberError').style.display = 'block';

        } else {
            document.getElementById('phoneNumberError').style.display = 'none';

        }


        this.setState({phone_number: e.target.value})


    };
    onAvailabilityChanged = (date) => {

        console.log(date);
        if (date === null) {
            document.getElementById('availabilityError').style.display = 'block';

        } else {
            document.getElementById('availabilityError').style.display = 'none';

        }

        this.setState({phoneNumber: date})
    };
    onProductNetworkChanged = (e) => {

        if (e.target.value.length === 0) {
            document.getElementById('networkError').style.display = 'block';

        } else {
            document.getElementById('networkError').style.display = 'none';

        }
        this.setState({productNetwork: e.target.value})
    };
    onNoteToReviewerChanged = (e) => {
        /*if (e.target.value.length === 0) {
            document.getElementById('noteToReviewerError').style.display = 'block';

        } else {
            document.getElementById('noteToReviewerError').style.display = 'none';

        }*/
        this.setState({noteToReviewer: e.target.value})
    };
    onDropZoneChange = (e) => {
        if (e[0]) {
            document.getElementById('dropZoneImage').style.display = 'none';

        }
        /*this.setState({file:e.target.files[0]});*/
        this.setState({file: e[0]});

    };

    render() {
        const {classes} = this.props;

        if (!this.props.getToken()) {
            return <Redirect to='/login'/>
        }
        if (this.state.isRedirectToHomepage) {
            return <Redirect to='/'/>
        }
        return (
            <div className={classes.root}>
                <Typography variant='h5' style={{marginBottom: '30px', marginTop: '35px', marginLeft: '-15px'}}>New
                    Listing</Typography>

                <Grid container className={classes.firstGrid} spacing={4}>
                    <Grid item xs={12} md={6}>
                        <form>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Product Name</Typography>
                                <input type="text" name='Myname' placeholder='Enter Location of the condominium'
                                       className={classes.input}
                                       onChange={this.onLocationChanged}/>
                                <Typography variant='body2' id='locationError' className={classes.inputError}>You have
                                    to
                                    entered Location of your condominium.</Typography>

                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Product short Description</Typography>
                                <textarea className={classes.textarea} placeholder='Enter short description...'
                                          style={{marginTop: '5px',}} onChange={this.onDescriptionChanged}/>
                                <Typography variant='body2' align='right' id='remainingCharacter'
                                            style={{color: '#9e9e9e'}}>({this.characterCounter} Characters
                                    Remaining)</Typography>
                                <Typography variant='body2' id='descriptionError' className={classes.inputError}>You
                                    have to write a description not less than 144 character.</Typography>

                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Floor</Typography>

                                <select className={classes.input} onChange={this.onFloorchanged}>
                                    <option value="Select Floor" disabled selected>Select Floor
                                    </option>
                                    <option value='1'>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>

                                </select>
                                <Typography variant='body2' id='floorError' className={classes.inputError}>you have
                                    to
                                    select floor.</Typography>
                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Monthly Payment</Typography>
                                <input type="number" min='0' placeholder='$ 00' className={[classes.input]}
                                       onChange={this.onMonthlyPaymentChanged}

                                />
                                <Typography variant='body2' id='monthlyPaymentError' className={classes.inputError}>you
                                    have to
                                    enter monthly payment.</Typography>

                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Bed Rooms</Typography>
                                <input type="number" min='0' max='100' placeholder='00 %' className={[classes.input]}
                                       onChange={this.onBedroomChanged}/>
                                <Typography type='number' variant='body2' id='bedRoomError' className={classes.inputError}>You have
                                    to enter number of bed rooms.</Typography>

                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>is it Guest House</Typography>
                                <input type="text" placeholder='is it Guest House' className={classes.input}
                                       onChange={this.onGuestHouseChanged}/>
                                <Typography variant='body2' id='guestHouseError' className={classes.inputError}>You have
                                    specific if it is guesthouse.</Typography>


                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>phone number</Typography>
                                <input type="text" placeholder='Enter your phone number' className={classes.input}
                                       onChange={this.onPhoneNumberChanged}/>
                                <Typography variant='body2' id='phoneNumberError' className={classes.inputError}>You
                                    have
                                    to enter your phone number.</Typography>


                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.inputsContainer}>
                            <Typography variant='body2'>Upload Listing Icon</Typography>

                            <Grid style={{marginTop: '5px'}}>
                                <Grid itme xs={12} md={6} className={classes.dropZone}>
                                    {/*Icon ={}*/}
                                    <DropzoneArea
                                        acceptedFiles={['image/*']}
                                        maxFileSize={2000000}
                                        filesLimit={'1'}
                                        dropzoneText={"Drag and drop an image here or click"}
                                        onChange={this.onDropZoneChange}
                                    />
                                    {/*<DropzoneArea getPreviewIcon={this.handlePreviewIcon}
                                                  dropzoneText="Drag and drop a jpg, png or webp Icon, Or click to add"/>*/}
                                </Grid>
                                <Typography variant='body2' id='dropZoneImage' className={classes.inputError}>You have
                                    to
                                    upload an image.</Typography>
                            </Grid>
                        </div>
                        <div className={[classes.inputsContainer]}>
                            <Typography variant='body2'>Available for rent starting from</Typography>
                            {/* <input type="text" placeholder='Enter product name' className={classes.input}
                                   onChange={this.onAvailabilityChanged}/>*/}
                            <div className={classes.dataPicker}>
                                <DatePicker
                                    selected={this.state.phoneNumber}
                                    className={[classes.input]}
                                    onChange={this.onAvailabilityChanged}

                                />
                            </div>
                            <Typography variant='body2' id='availabilityError' className={classes.inputError}>You have to
                                Set Launch Data.</Typography>

                        </div>
                        <div className={classes.inputsContainer}>
                            <Typography variant='body2'>Product Network</Typography>
                            <input type="text" placeholder='Enter product Network' className={classes.input}
                                   onChange={this.onProductNetworkChanged}/>
                            <Typography variant='body2' id='networkError' className={classes.inputError}>You have to
                                enter product network.</Typography>

                        </div>
                        <div className={classes.inputsContainer}>
                            <Typography variant='body2' style={{marginTop: '10px'}}>Note To Reviewer</Typography>
                            <textarea placeholder='Write note to reviewer' className={classes.textarea}
                                      onChange={this.onNoteToReviewerChanged} style={{marginTop: '5px'}}/>
                            <Typography variant='body2' id='noteToReviewerError' className={classes.inputError}>You have
                                to enter a note to a reviewer</Typography>

                        </div>
                        <br/><br/><br/><br/>
                        <div align='right'>
                            <Button onClick={this.onFormSubmit} value='NA' variant='contained' style={{
                                paddingLeft: '50px', paddingRight: '50px', background: '#9e9e9e',
                                borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                            }}>Save As Draft</Button>
                            <Button onClick={this.onFormSubmit} value='Pending' variant='contained' style={{
                                paddingLeft: '50px', paddingRight: '50px', background: '#9e9e9e',
                                borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                            }}> Submit For Review</Button>
                        </div>
                    </Grid>

                </Grid>
            </div>
        );
    }

}

export default withStyles(useStyles)(NewListing);



