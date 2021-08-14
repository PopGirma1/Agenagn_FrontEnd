import React from 'react';
import './List.css'
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import ButtonGroup from "@material-ui/core/ButtonGroup";


function ListHouse(props) {
    return (

        <div>

            <div className={'Toper'}>
                <div >
                    <label className={'listLabel'}>  Your List Of House </label>
                </div>
                <div >
                    <Button variant="contained" color="primary" href="#contained-buttons" type={'button'} >+ AddNewHouse </Button>
                </div>
                <div >
                    <label> Account Info</label>
                </div>
            </div>


            <div className={'listing'}>

                <div>
                    <label className={'Header'}> Location</label>
                    <h6> Ayat</h6>
                    <h6> Gelan</h6>
                    <h6> 4 Kilo</h6>
                    <h6> Gotera</h6>
                    <h6> Semit</h6>
                    <h6> Lideta</h6>
                </div>
                <div>
                    <label className={'Header'}> Bed Rooms</label>
                    <h6> 3</h6>
                    <h6> 4</h6>
                    <h6> 4</h6>
                    <h6> 1</h6>
                    <h6> 3</h6>
                    <h6> 2</h6>

                </div>
                <div>
                    <label className={'Header'}> List Status </label>
                    <h6> Active  <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> Draft <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> Active <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> Submitted <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> Draft <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> Active <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>


                </div>
                <div>
                    <label className={'Header'}> Review Status </label>
                    <h6> AProved  <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> pending  <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> NA  <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> Approved  <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> Pending  <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>
                    <h6> NA   <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </h6>


                </div>
                <div>
                    <label className={'Header'}> Action</label>
                    <h5>
                        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                            <Button>View</Button>
                        </ButtonGroup>

                    </h5>
                    <h5>
                        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                            <Button>View</Button>
                        </ButtonGroup>
                    </h5>
                    <h5>
                        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                            <Button>View</Button>
                        </ButtonGroup>
                    </h5>
                    <h5>
                        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                            <Button>View</Button>
                        </ButtonGroup>
                    </h5>
                    <h5>
                        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                            <Button>View</Button>
                        </ButtonGroup>
                    </h5>
                    <h5>
                        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                            <Button>View</Button>
                        </ButtonGroup>
                    </h5>

                </div>
                <div>
                    <label className={'Header'}> Account Info</label>
                    <h6>Name : </h6>
                    <p>papa</p>
                    <a href={'#'}>papaduck@gmail.com</a>
                </div>

            </div>


        </div>
    );
}

export default ListHouse;
