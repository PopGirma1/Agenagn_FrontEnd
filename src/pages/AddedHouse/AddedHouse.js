import React, {useState} from 'react';
import './AddedHouse.css'
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
function AddedHouse(props) {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };
    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);

        fetch(
            'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
            {
                method: 'POST',
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>

            <form >

                <div className={'mainSection'}>


                    <div>
                        <InputLabel htmlFor="select"  className={'InputLabel'}> Select Location </InputLabel>
                        <NativeSelect id="select">
                            <option value="Ayat">ayat</option>
                            <option value="sumit">sumit</option>
                            <option value="gelan">gelan</option>
                            <option value="4 kilo">4 kilo </option>
                            <option value="gotera">gotera</option>
                            <option value="lideta">lideta</option>
                        </NativeSelect>

                        <InputLabel htmlFor="select" className={'InputLabel'}> Select The Number of Bed Rooms </InputLabel>
                        <NativeSelect id="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4 </option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </NativeSelect>

                        <InputLabel htmlFor="select" className={'InputLabel'}> Select The Floor Number  </InputLabel>
                        <NativeSelect id="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4 </option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </NativeSelect>

                        <TextField
                            type='number'
                            label="Monthly Input"
                            variant="outlined"
                            color="secondary"
                            required
                            validateOnBlur  className={'textfieldInput'}/>
                        <TextField
                            type={'phone'}
                            label=" Phone number"
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
                            <input type="file" name="file" onChange={changeHandler} />
                            {isSelected ? (
                                <div>
                                    <p>Filename: {selectedFile.name}</p>
                                    <p>Filetype: {selectedFile.type}</p>
                                    <p>Size in bytes: {selectedFile.size}</p>
                                    <p>
                                        lastModifiedDate:{' '}
                                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                                    </p>
                                </div>
                            ) : (
                                <h6>Upload Photo</h6>
                            )}

                            <div>

                                <FormGroup>
                                    <h6> Is It A Guest House ?   .
                                    <FormControlLabel control={<Switch size="small"  />} label="yes"/>
                                    <FormControlLabel control={<Switch />} label="No"/>
                                    </h6>
                                </FormGroup>
                            </div>
                            <div>

                                <h6>  write some description about Your House  </h6>
                                <TextareaAutosize
                                    maxRows={4}
                                    aria-label="maximum height"
                                    placeholder="Maximum 4 rows"
                                    defaultValue="                "
                                />
                            </div>


                            <div>
                                <button onClick={handleSubmission}  className={'btnSubmit'}>Submit</button>
                            </div>
                        </div>

                    </div>

                </div>


            </form>

        </div>
    );
}

export default AddedHouse;
