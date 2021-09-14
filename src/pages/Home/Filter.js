import React from 'react';
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import {useMediaQuery, useTheme, withStyles} from "@material-ui/core";

const useStyles = ((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        padding:'5px',
        borderRadius:'7px',
        background: '#ffffff',
        /*boxShadow: '0 1px 1px rgb(0 0 0 / 0.2)',*/
        "& label":{
            display:'block'
        }
    },
    rowHolder: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        padding:'10px 0',


    },
    borderRadiuss:{
        borderBottom:'1px solid #eeeee',
        borderTop:'1px solid #eeeeee',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        minWidth: '200px',
        alignItems: 'center',
    },
    listHolder: {
        display: 'flex',
        flexDirection:'column',
        gap: 10,
        marginLeft:10,
    },
    expand: {
        color:'#005CC8',
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    showButton: {
        border: 0, background: 'none', paddingTop: '6px'
    },
    guestInput: {
        marginRight: 10,
    },
    inputs:{
        marginRight:10,
    }

}));

function Filter(props) {
    const {classes} = props;
    const theme = useTheme();
    const isMobile = useMediaQuery( theme.breakpoints.down("sm"));

    const locations = ['Ayat Condominium', 'Gelan Condominium', 'Submit Condominium'];
    const monthlyRents = ['2000 - 4000 ', '4001 - 6000', '6001 - 8000', '8001 - 12000', '12001 - 20000'];
    const bedRooms = [0, 1, 2, 3];

    const [elocation, seteElocation] = React.useState(false);
    const [ebedRoom, setEbedRoom] = React.useState(false);
    const [emonthlyRent, setEmonthlyRent] = React.useState(true);


    const [locationsState, setLocationsState] = React.useState(new Array(locations.length).fill(false));
    const [monthlyRentsState, setMonthlyRentsState] = React.useState(new Array(monthlyRents.length).fill(false));
    const [bedRoomsState, setBedroomsState] = React.useState(new Array(bedRooms.length).fill(false));
    const [guestHouse, setguestHouse] = React.useState(false);

    const onEbedRoomClick = () => {
        setEbedRoom(!ebedRoom);
    };
    const onElocationClick = () => {
        seteElocation(!elocation);
    };
    const onEmonthlyRentClick = () => {
        setEmonthlyRent(!emonthlyRent);
    };

    const onLocationsChanged = (position) => {
        const updatedCheckedState = locationsState.map((item, index) =>
            index === position ? !item : item
        );

        setLocationsState(updatedCheckedState);
    };
    const onMonthlyRentsChanged = (position) => {
        const updatedCheckedState = monthlyRentsState.map((item, index) =>
            index === position ? !item : item
        );

        setMonthlyRentsState(updatedCheckedState);
    };
    const onBedroomsChanged = (position) => {
        const updatedCheckedState = bedRoomsState.map((item, index) =>
            index === position ? !item : item
        );
        setBedroomsState(updatedCheckedState);
    };
    const onGuestHouseChanged = () => {
        setguestHouse(!guestHouse)
    };

    return (
        <div className={classes.root} style={{margin:isMobile?'10px 0':0}}>
            <h3>Filter By</h3>
            <div className={classes.rowHolder}>
                <div className={classes.row} onClick={onEmonthlyRentClick}>
                    <span>Monthly Payment</span>
                    <button
                        className={clsx(classes.showButton, classes.expand, {
                            [classes.expandOpen]: emonthlyRent,
                        })}
                    >
                        <ExpandMoreIcon/>
                    </button>
                </div>
                <Collapse in={emonthlyRent} timeout="auto" unmountOnExit>
                    <div className={classes.listHolder}>{monthlyRents.map((name, index) => {
                        return (
                            <div key={index}>
                                <label><input
                                    type="checkbox"
                                    id={`monthlyRent-${index}`}
                                    name={name}
                                    value={name}
                                    className={classes.inputs}
                                    checked={monthlyRentsState[index]}
                                    onChange={() => onMonthlyRentsChanged(index)}
                                />{name} <span style={{opacity:'0.5'}}>birr</span></label>
                            </div>
                        );
                    })}</div>
                </Collapse>
            </div>
            <div className={clsx(classes.rowHolder,classes.borderRadiuss)}>
                <div className={classes.row} onClick={onEbedRoomClick}>
                    <span>Number of Bedrooms</span>
                    <button
                        className={clsx(classes.showButton, classes.expand, {
                            [classes.expandOpen]: ebedRoom,
                        })}
                    >
                        <ExpandMoreIcon/>
                    </button>
                </div>
                <Collapse in={ebedRoom} timeout="auto" unmountOnExit>
                    <div className={classes.listHolder}>{bedRooms.map((name, index) => {
                        return (
                            <div key={index}>
                                <label><input
                                    type="checkbox"
                                    id={`location-${index}`}
                                    name={name}
                                    value={name}
                                    className={classes.inputs}
                                    checked={bedRoomsState[index]}
                                    onChange={() => onBedroomsChanged(index)}
                                />{name}</label>
                            </div>
                        );
                    })}</div>

                </Collapse>
            </div>
            <div className={clsx(classes.rowHolder, classes.borderRadiuss)}>
                <div className={classes.row} onClick={onElocationClick}>
                    <span>Location of Condominium</span>
                    <button
                        className={clsx(classes.showButton, classes.expand, {
                            [classes.expandOpen]: elocation,
                        })}
                    >
                        <ExpandMoreIcon/>
                    </button>
                </div>
                <Collapse in={elocation} timeout="auto" unmountOnExit >
                    <div className={classes.listHolder} >{locations.map((name, index) => {
                        return (
                            <div key={index}>
                                <label ><input
                                    type="checkbox"
                                    id={`location-${index}`}
                                    name={name}
                                    value={name}
                                    className={classes.inputs}
                                    checked={locationsState[index]}
                                    onChange={() => onLocationsChanged(index)}
                                />{name}</label>
                            </div>
                        );
                    })}</div>
                </Collapse>
            </div>
            <div className={clsx(classes.rowHolder, classes.borderRadiuss)}>
                <div className={classes.row}>
                    <label htmlFor="guest-house-input">Guest House</label>
                    <input type="checkbox" id='guest-house-input' className={classes.guestInput} value={guestHouse}
                           onChange={onGuestHouseChanged}/>
                </div>
            </div>
        </div>
    );
}

export default withStyles(useStyles)(Filter);