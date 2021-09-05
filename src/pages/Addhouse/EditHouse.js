import React from 'react';
import {Button, Grid, Typography, withStyles} from '@material-ui/core';
import {DropzoneArea} from 'material-ui-dropzone';
import {Redirect} from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import backEndApi from '../../services/api';
import moment from "moment";

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
        background: '#F2EDD7',
        boxShadow: '-9px 18px 16px rgba(0, 0, 0, 0.05)',
        borderRadius: '5px',
    },

    input: {
        padding: '10px',
        marginTop: '5px',
        width: '100%',
        height: '40px',
        borderRadius: '5px',
        border: '0.5px solid #E48257',
        background: '#F2EDD7',
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
        background: '#F2EDD7',
        border: '0.5px solid rgba(228, 130, 87, 0.8)',
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
            background: '#F2EDD7',
            marginBottom: '30px',
            maxHeight: '243',
            height: '210px',
            minHeight: '200px',
            border: '.5px solid rgba(228, 130, 87, 0.8)',

        },
        "& .MuiTypography-h5": {
            fontSize: '14px',
            fontWeight: 'normal'
        },
        "& .MuiDropzoneArea-text": {
            marginTop: '130px',
            color: '#E48257'
        },
        "& .MuiSvgIcon-root": {
            display: 'flex',
            marginTop: '-100px',
            marginLeft: '110px',
            color: "#E48257"
        }
    },
    inputError: {
        color: 'red',
        fontSize: '14px',
        display: 'none',
    },
});

class EditHouse extends React.Component {
    state = {

        originalHouseId: '',
        ownerEmail: '',
        location: '',
        description: '',

        bedRoom:'',
        monthlyPayment:'',
        floor:'',
        phoneNumber:'',
        guestHouse:'',

        availabilityDate:'',
        editedEncodedAvatarUrl: '',
        listingStatus: '',
        reviewStatus: '',

        errorMessage: '',
        file: null,

        isRedirectToHomepage: false,
        submitValue: '',

    };
    characterCounter = 144;

    componentDidMount = async () => {
        const {data} = await backEndApi.get('./edithouse', {params: {id: this.props.match.params.id}})
        console.log(data);
        this.setState({
            originalHouseId: data._id,
            ownerEmail:data.ownerEmail,
            location: data.location,
            bedRoom: parseInt(data.bed_room),
            monthlyPayment: parseInt(data.monthly_payment),
            floor: parseInt(data.floor),
            phoneNumber: parseInt(data.phone_number),
            guestHouse: data.guest_house?'yes':'no',
            description: data.description,

            listingStatus : data.listingStatus,
            reviewStatus :  data.reviewStatus,

            editedEncodedAvatarUrl: data.encodedAvatarUrl,
            file:null, /*['http://localhost:5000/images/products/' + data.encodedAvatarUrl + ".jpg"]*/

        });

    };


    onFormSubmit = (e) => {
        e.preventDefault();

        this.validateForm(e);
    };
    listingStatusFilter = (e) => {
        console.log(e.currentTarget.value, this.state.listingStatus)
        if (e.currentTarget.value === "NA" && this.state.listingStatus === "Submitted") {
            return "Draft"
        } else if (e.currentTarget.value === "Pending" && this.state.listingStatus === "Draft") {
            return "Submitted"
        }/*else if (e.currentTarget.value === "Inactive" && this.state.listingStatus === "Active"){
            return "Inactive"
        }else if (e.currentTarget.value === "Active" && this.state.listingStatus === "Inactive"){
            return "Active"
        }*/ else {
            return this.state.listingStatus
        }
    };
    reviewStatusFilter = (e) => {

        return e.currentTarget.value;
    };
    validateForm = (e) => {




        const product = {
            originalId: this.state.originalHouseId,
            ownerEmail: this.state.ownerEmail,
            location: this.state.location,
            description: this.state.description,
            bedRoom : parseInt(this.state.bedRoom),
            floor: parseInt(this.state.floor),
            monthlyPayment: parseInt(this.state.monthlyPayment),
            phoneNumber: parseInt(this.state.phoneNumber),
            guest_house: this.state.guestHouse === 'yes',


            availabilityDate:this.state.availabilityDate,
            listingStatus: this.listingStatusFilter(e),
            reviewStatus: this.reviewStatusFilter(e)
        };

        if (!this.state.location) {
            document.getElementById('locationError').style.display = 'block';
        }
        if (!this.state.description) {
            document.getElementById('descriptionError').style.display = 'block';

        } else if (this.state.description.length < 1) {
            document.getElementById('descriptionError').style.display = 'block';
        }
        if (!this.state.floor) {
            document.getElementById('floorError').style.display = 'block';

        }
        if (!this.state.monthlyPayment) {
            document.getElementById('monthlyPaymentError').style.display = 'block';

        }
        if (!this.state.bedRoom) {
            document.getElementById('bedRoomError').style.display = 'block';

        }
        if (!this.state.availabilityDate) {
            document.getElementById('availabilityError').style.display = 'block';

        }
        if (!this.state.guestHouse) {
            document.getElementById('guestHouseError').style.display = 'block';

        }
       /* if (!this.state.phoneNumber) {
            document.getElementById('phoneNumber').style.display = 'block';

        }*/

        /*if (!this.state.file) {
            document.getElementById('dropZoneImage').style.display = 'block';
        }*/

        if (this.state.location && this.state.description &&
            this.state.floor && this.state.monthlyPayment
            && this.state.guestHouse
            && this.state.bedRoom
            && this.state.availabilityDate
            && this.state.phoneNumber && this.state.description.length > 1) {

            this.submitEditHouseApiRequest(product);

        } else {
            //for not yet validated
            console.log("Form Not Validated")

        }


    };

    submitEditHouseApiRequest = async (newLaunchDetails) => {
        /*let user = this.props.getToken();*/

        const formData = new FormData();
        formData.append('file', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        };

        let response = await backEndApi.post('/editHouseUpdate', {params: newLaunchDetails});
        let resImage = await backEndApi.post('/uploadProductImage', formData, config);


        console.log("The files and Image success fully uploaded" + response + resImage);
        this.setState({isRedirectToHomepage: true})

    };

    choseButton = () => {

        switch (this.state.listingStatus) {
            case 'Active' :
                if (this.state.reviewStatus === "Pending" || this.state.reviewStatus === "Rejected") {
                    return <>

                        <Button onClick={this.onFormSubmit} value='Approved' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}>Cancel Review</Button>
                        <Button onClick={this.onFormSubmit} value='Pending' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Update Detail</Button>

                    </>;
                } else if (this.state.reviewStatus === "Approved") {
                    return <>

                        <Button onClick={this.onFormSubmit} value='Pending' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Update Detail</Button>

                    </>
                } else {
                    return <>
                        <Button onClick={this.onFormSubmit} value='' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}>Cancel Review</Button>
                        <Button onClick={this.onFormSubmit} value='' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Update Detail</Button>

                    </>
                }

            case 'Inactive' :
                if (this.state.reviewStatus === "Pending" || this.state.reviewStatus === "Rejected") {
                    return <>

                        <Button onClick={this.onFormSubmit} value='Approved' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}>Cancel Review</Button>
                        <Button onClick={this.onFormSubmit} value='Pending' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Update Detail</Button>

                    </>;
                } else if (this.state.reviewStatus === "Approved") {
                    return <>

                        <Button onClick={this.onFormSubmit} value='Pending' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Update Detail</Button>

                    </>
                } else {
                    return <>
                        <Button onClick={this.onFormSubmit} value='' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}>Cancel Review</Button>
                        <Button onClick={this.onFormSubmit} value='' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Update Detail</Button>

                    </>
                }
            case 'Draft' :
                return <>
                    <Button onClick={this.onFormSubmit} value='NA' variant='contained' style={{
                        paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                        borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                    }}>Save As Draft</Button>
                    <Button onClick={this.onFormSubmit} value='Pending' variant='contained' style={{
                        paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                        borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                    }}>Submit For Review</Button>

                </>;
            case 'Submitted' :
                if (this.state.reviewStatus === "Pending" || this.state.reviewStatus === "Rejected") {
                    return <>
                        <Button onClick={this.onFormSubmit} value='NA' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}>Cancel Review</Button>
                        <Button onClick={this.onFormSubmit} value='Pending' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Update Detail</Button>

                    </>;
                } else if (this.state.reviewStatus === "Approved") {
                    return <>
                        <Button onClick={this.onFormSubmit} value='Pending' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Update Detail</Button>

                    </>
                } else {
                    return <>
                        <Button onClick={this.onFormSubmit} value='Draft' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}>Cancel Review</Button>
                        <Button onClick={this.onFormSubmit} value='Submitted' variant='contained' style={{
                            paddingLeft: '50px', paddingRight: '50px', background: '#E48257',
                            borderRadius: '5px', marginRight: '15px', color: '#fff', textTransform: 'none'
                        }}> Update Detail</Button>

                    </>
                }
            default:
                return <div>Something occur</div>
        }
    };

    onLocationChanged = (e) => {
        if (e.target.value.length === 0) {

            document.getElementById('locationError').style.display = 'block';
        } else {
            document.getElementById('locationError').style.display = 'none';

        }
        this.setState({location: e.target.value})
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

        this.setState({monthlyPayment: e.target.value})
    };
    onBedroomChanged = (e) => {
        if (e.target.value.length === 'Select Bed Rooms') {
            document.getElementById('bedRoomError').style.display = 'block';

        } else {
            document.getElementById('bedRoomError').style.display = 'none';

        }
        this.setState({bedRoom: e.target.value})
    };
    onGuestHouseChanged = (e) => {

        if (e.target.value.length === 0) {
            document.getElementById('guestHouseError').style.display = 'block';

        } else {
            document.getElementById('guestHouseError').style.display = 'none';

        }

        this.setState({guestHouse: e.target.value==='yes'?'yes':'no'})
    };
    onPhoneNumberChanged = (e) => {

        if (e.target.value.length === 0) {
            document.getElementById('phoneNumberError').style.display = 'block';

        } else {
            document.getElementById('phoneNumberError').style.display = 'none';

        }


        this.setState({phoneNumber: e.target.value})


    };
    onAvailabilityChanged = (date) => {

        console.log(date);
        if (date === null) {
            document.getElementById('availabilityError').style.display = 'block';

        } else {
            document.getElementById('availabilityError').style.display = 'none';

        }

        this.setState({availabilityDate: date})
    };
    onSquareMeterChanged = (e) => {

        if (e.target.value.length === 0) {
            document.getElementById('networkError').style.display = 'block';

        } else {
            document.getElementById('networkError').style.display = 'none';

        }
        this.setState({squareMeter: e.target.value})
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
        /*if (e[0]) {
            document.getElementById('dropZoneImage').style.display = 'none';

        }*/
        /*this.setState({file:e.target.files[0]});*/
        this.setState({file: e[0]});

    };

    render() {
        const {classes} = this.props;

        if (!this.props.getToken()) {
            return <Redirect to='/login'/>
        }
        if (this.state.isRedirectToHomepage) {
            return <Redirect to='/dashboard'/>
        }
        return (
            <div className={classes.root}>
                <Typography variant='h5' style={{marginBottom: '30px', marginTop: '35px', marginLeft: '-15px'}}>Edit
                    House</Typography>

                <Grid container className={classes.firstGrid} spacing={4}>
                    <Grid item xs={12} md={6}>
                        <form>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Location of the Condominium</Typography>
                                <input type="text" name='Myname' placeholder='Enter Location of the condominium'
                                       className={classes.input}
                                       onChange={this.onLocationChanged}
                                       value={this.state.location}

                                />
                                <Typography variant='body2' id='locationError' className={classes.inputError}>You have
                                    to
                                    entered Location of your condominium.</Typography>

                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Bed Rooms</Typography>
                                <select className={classes.input} value={this.state.bedRoom} onChange={this.onBedroomChanged}>
                                    <option value="Select Bed Rooms" disabled selected>Select Bed Rooms
                                    </option>
                                    <option value='1'>0</option>
                                    <option value='1'>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>

                                </select>

                                <Typography type='number' variant='body2' id='bedRoomError' className={classes.inputError}>You have
                                    to enter number of bed rooms.</Typography>

                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Floor</Typography>

                                <select className={classes.input} value={this.state.floor} onChange={this.onFloorchanged}>
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
                                       value={this.state.monthlyPayment}


                                />
                                <Typography variant='body2' id='monthlyPaymentError' className={classes.inputError}>you
                                    have to
                                    enter monthly payment.</Typography>

                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>phone number</Typography>
                                <input type="number"  placeholder='Enter your phone number' className={classes.input}
                                       onChange={this.onPhoneNumberChanged}
                                       value={this.state.phoneNumber}

                                />
                                <Typography variant='body2' id='phoneNumberError' className={classes.inputError}>You
                                    have
                                    to enter your phone number.</Typography>


                            </div>
                            <div className={classes.inputsContainer}>
                                <Typography variant='body2'>Short description</Typography>
                                <textarea className={classes.textarea} placeholder='Enter short description...'
                                          style={{marginTop: '5px',}} onChange={this.onDescriptionChanged}
                                          value={this.state.description}
                                />
                                <Typography variant='body2' align='right' id='remainingCharacter'
                                            style={{color: '#9e9e9e'}}>({this.characterCounter} Characters
                                    Remaining)</Typography>
                                <Typography variant='body2' id='descriptionError' className={classes.inputError}>You
                                    have to write a description not less than 144 character.</Typography>

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
                               {/* <Typography variant='body2' id='dropZoneImage' className={classes.inputError}>You have
                                    to
                                    upload an image.</Typography>*/}
                            </Grid>
                        </div>
                        <div className={[classes.inputsContainer]}>
                            <Typography variant='body2'>Available for rent starting from</Typography>
                            {/* <input type="text" placeholder='Enter product name' className={classes.input}
                                   onChange={this.onAvailabilityChanged}/>*/}
                            <div className={classes.dataPicker}>
                                <DatePicker
                                    dateFormat="dd-MM-yyyy"
                                    selected={this.state.productLaunchDate}
                                    className={[classes.input]}
                                    onChange={this.onAvailabilityChanged}
                                    value={moment(this.state.availabilityDate).format("DD-MM-YYYY")}

                                />
                            </div>
                            <Typography variant='body2' id='availabilityError' className={classes.inputError}>You have to
                                Set Launch Data.</Typography>

                        </div>
                        <div className={classes.inputsContainer}>
                            <Typography variant='body2'>Square meters</Typography>
                            <input type="text" placeholder='Enter product Network' className={classes.input}
                                   onChange={this.onSquareMeterChanged}
                                   value={this.state.editavailabilityDate}

                            />
                            <Typography variant='body2' id='networkError' className={classes.inputError}>You have to
                                enter square meters.</Typography>

                        </div>
                        <div className={classes.inputsContainer}>
                            <Typography variant='body2'>is it Guest House</Typography>
                            <label htmlFor="guestYes">Yes</label>
                            <input type="radio" value='yes' id='guestYes' checked={this.state.guestHouse==='yes'}  name='guestRadio' placeholder='is it Guest House'
                                   onChange={this.onGuestHouseChanged}

                            />
                            <label htmlFor="guestNo">No</label>

                            <input type="radio" value='no' id='guestNo'  name='guestRadio'
                                   onChange={this.onGuestHouseChanged}
                                   checked={this.state.guestHouse==='no'}

                            />
                            <Typography variant='body2' id='guestHouseError' className={classes.inputError}>You have
                                specific if it is guesthouse.</Typography>


                        </div>

                        {/*<div className={classes.inputsContainer}>
                            <Typography variant='body2' style={{marginTop: '10px'}}>Note To Reviewer</Typography>
                            <textarea placeholder='Write note to reviewer' className={classes.textarea}
                                      onChange={this.onNoteToReviewerChanged} style={{marginTop: '5px'}}
                                      value={this.state.editedNoteToReviewer}

                            />
                            <Typography variant='body2' id='noteToReviewerError' className={classes.inputError}>You have
                                to enter a note to a reviewer</Typography>

                        </div>*/}

                        <br/><br/><br/><br/>
                        <div align='right'>
                            {this.choseButton()}
                        </div>
                    </Grid>

                </Grid>
            </div>
        );
    }

}

export default withStyles(useStyles)(EditHouse);



