import React from 'react';
import './Signup.css'
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
function Signup(props) {
    return (
        <div className='flex-container'>


            <div>
                <img src={window.location.origin + '/asset/Img/signup.jpg'} width={'400px'} height={'600px'} />
            </div>


            <div>
                <label>Sign up Page </label>
                <div className={'textfieldInput'}>

                    <TextField
                        type='text'
                        label="Name"
                        variant="outlined"
                        color="secondary"
                        required
                        validateOnBlur />
                    <TextField
                        type={'phone'}
                        label="Phone Number"
                        variant="outlined"
                        color="secondary"
                        inputProps={{ maxLength: 12 }}/>

                    <TextField
                        type={'password'}
                        label="password"
                        variant="outlined"
                        color="secondary"/>

                    <TextField
                        type={'password'}
                        label="Confirm password "
                        variant="outlined"
                        color="secondary"/>
                </div>


                <div className={'checkBox'}>
                    <input type={'checkbox'}/>
                    <label>I have read and agreed to Privacy Policy</label>
                </div>


                <Button variant="contained" color="primary" href="#contained-buttons" type={'button'}>SignUp </Button>

                <div className={'goToLogin'}>
                    <label> Already have an account ?  </label>
                    <button type={'button'}     onClick={(e) => {
                        e.preventDefault();
                        window.location.href='src/pages/Authentication/LoginRegister.js';
                    }} > Login </button>

                </div>
            </div>
        </div>
    );
}

export default Signup;
