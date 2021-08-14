import React from 'react';
import './AddedHouse.css'
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
function AddedHouse(props) {



    return (
        <div>
            <form >

                <div className={'mainSection'}>


                    <div> Location of Condeminium

                        <label></label>
                        <InputLabel htmlFor="select"> Select Location </InputLabel>
                        <NativeSelect id="select">
                            <option value="Ayat">ayat</option>
                            <option value="sumit">sumit</option>
                            <option value="gelan">gelan</option>
                            <option value="4 kilo">4 kilo </option>
                            <option value="gotera">gotera</option>
                            <option value="lideta">lideta</option>
                        </NativeSelect>
                        <label> Number of bed rooms </label>
                        <InputLabel htmlFor="select"> Select The Number of Bed Rooms </InputLabel>
                        <NativeSelect id="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4 </option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </NativeSelect>
                          <label>   Floor </label>
                        <InputLabel htmlFor="select"> Select The Floor Number  </InputLabel>
                        <NativeSelect id="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4 </option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </NativeSelect>

                        <label> Monthly Input Rent Price </label>
                        <TextField
                            type='number'
                            label="Monthly Input"
                            variant="outlined"
                            color="secondary"
                            required
                            validateOnBlur  className={'textfieldInput'}/>
                        <TextField
                            type={'phone'}
                            label="Phone Number"
                            variant="outlined"
                            color="secondary"
                            inputProps={{ maxLength: 12 }}  className={'textfieldInput'}/>

                        <TextField
                            type='text'
                            label="Name of the owner"
                            variant="outlined"
                            color="secondary"
                            required
                            validateOnBlur />


                        <div>
                            this is part for the image section
                        </div>

                        <div>

                            <Button variant="contained" color="primary" href="#contained-buttons" type={'button'}>SignUp </Button>
                        </div>

                    </div>

                    <div>

                        this is the image upload part
                    </div>


                </div>


            </form>
        </div>
    );
}

export default AddedHouse;
