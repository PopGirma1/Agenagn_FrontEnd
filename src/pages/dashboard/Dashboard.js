import React, {useEffect, useState} from 'react'
import UserDashboard from './User-dashboard/UserDashboard'
import AdminDashboard from './Admin-dashboard/AdminDashboard'
import backEndApi from "../../services/api";
import {withStyles} from "@material-ui/core";
import Loader from "./User-dashboard/Loader";
import {Redirect} from "react-router-dom";

const useStyles = theme => ({
    root: {
        marginTop: '20px',
    },
    table: {
        minWidth: 650,
    },
    tableContainer: {
        padding: '12px',
        borderRadius: '5px',
        backgroundColor: '#F2EDD7',

    },
    margin: {
        margin: '5px',
        fontSize: '15px',
        borderRadius: '4px',
        "&:hover": {backgroundColor: '#3A6351'},
    },
    iconBackgroundRed: {
        backgroundColor: 'rgba(228,130,87,0.21)'
    },
    deleteIcon: {
        color: '#F24545'
    },
    editIcon: {
        color: '#E48257'

    },
    iconBackgroundBlack: {
        backgroundColor: 'rgba(57,50,50,0.2)'
    },
});


export default function Dashboard({getToken}){
    const [auth, setAuth] = useState('')
    const [isAuth, setIsAuth] = useState(true)

    const authenticate = () => {

        if (auth === "Admin") {
            return <AdminDashboard getToken={getToken}/>
        } else if (auth === "User") {
            return <UserDashboard getToken={getToken}/>
        } else if (auth === '') {

            return <div>
                <Loader/>
            </div>

        }
    };

    useEffect( () => {
      const  checkLocalStorage=async()=>{
            if (localStorage.getItem(('token'))) {

                const config = {
                    headers: {
                        'x-access-token': JSON.parse(localStorage.getItem('token')).token
                    }
                };
                const response = await backEndApi.get('/dashboard', config);
                console.log(response.data);

               /* setProductDocs(response.data.productDocs);
                setUserDetail(response.data.docs);*/
                setAuth(response.data.auth);
            } else {
                setIsAuth(false)
            }
        }
        checkLocalStorage()
    }, []);

    useEffect(() => {
        if (!isAuth) {
            return <Redirect to='/'/>
        }
    }, [])

    return (
        <div>

            {authenticate()}


        </div>
    );

}


