import React from 'react';
import {Container, Grid, withStyles} from "@material-ui/core";
import {Redirect} from "react-router-dom";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import backEndApi from '../../services/api'

const loginImage = process.env.PUBLIC_URL + '/img/signup.jpg';
const useStyles = theme => ({
    root: {

        /* backgroundColor: '#333',*/
        marginTop: '60px',
        padding: '50px !important',
        background: 'rgba(242,237,215,0.21)',
        borderRadius: '15px',
        "& a": {
            color: '#3A6351',
        },


    },
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        background: '#3F51B5',
        borderRadius: '5px',
        width: '406px',
        height: '50px',
        margin: theme.spacing(3, 0, 2),
        "&:hover": {
            background: 'rgba(53,68,152,0.79)',
        }
    },
    textField: {
        marginBottom: '15px',
        borderRadius: '5px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        width: '406px',
        border: '0px solid #FFF',
        borderLeftWidth: '7px',
        borderLeftColor: 'rgba(215,215,215,0.87)',
        "& input": {
            color: "rgba(57,50,50,0.25)",
            border: '0px solid #eee',
            borderRadius: '30px',
        }

    },

    inputAdornment: {
        background: 'rgba(215,215,215,0.87)',
        borderRadius: '7px 0px 0px 7px',

    },
    loginImg: {
        borderRadius: '5px',
        marginTop: '20px',
        marginLeft: '20px',
        marginBottom: '-20px'
    },
    loginImgHolder: {
        backgroundColor: "rgba(185,194,226,0.66)",

        borderRadius: '15px', marginBottom: 'auto'
    }

});


class Login extends React.Component {
    state = {email: '', password: '', redirect: false, errorMessage: '', token: ''};
    errorcheck = () => {
        if (this.state.errorMessage) {
            return <Typography variant='h6'
                               style={{
                                   color: 'red',
                                   marginLeft: '5px',
                                   fontSize: '14px'
                               }}>{this.state.errorMessage}</Typography>
        } else {
            return <Typography variant='body2' style={{color: 'red', display: 'none'}}>''</Typography>
        }
    };

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    };
    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    };
    loginApiRequest = async (loginParams) => {
        const {data} = await backEndApi.post('/loginUser', {params: loginParams});
        const token = data;
        if (data === "notUser") {
            this.setState({errorMessage: "Incorrect Username or Password!"});

        } else {

            this.props.setToken(token);
            this.setState({token: token, redirect: true});
        }

    };
    validateInput = () => {
        const logindetails = {
            email: this.state.email,
            password: this.state.password,
        };

        if (this.state.email && this.state.password) {
            this.loginApiRequest(logindetails);
            /*/!*axios.post("http://localhost:5000/getUser", {params: logindetails })*!/
            axios.post("https://damp-fjord-23317.herokuapp.com/getUser", {params: logindetails})
                .then(res => {
                    const token = res.data;
                    if (res.data === "notUser") {
                        this.setState({errorMessage: "Incorrect Username or Password!"});

                    } else {

                        this.props.setToken(token);
                        this.setState({token:token,redirect: true});
                    }
                })*/

        } else {
            this.setState({errorMessage: "Please fill all the inputs!"})
        }


    };
    onSubmit = (e) => {
        e.preventDefault();
        this.validateInput();
        /* const getUsers = async () => {
         /!*let res = await axios.post("https://reqres.in/api/users?page=1",{params:logindetails});*!/
         let res = await axios.post("http://localhost:5000/getUser",{params:logindetails});
         let { data } = res.data;
         console.log(data);
         console.log("this is printed");
         /!*this.setState({ users: data });*!/
     };
         getUsers()*/

    };

    componentDidMount() {
        const token = this.props.getToken();
        console.log(token);
        if (token) {
            console.log("welcome Mr ");
            return <Redirect to='/addhouse'/>

        }
    }

    render() {

        if (this.state.redirect || this.props.getToken()) {
            console.log("welcome Mr ");
            return <Redirect to='/addhouse'/>

        }
        const {classes} = this.props;
        return (
            <Container maxWidth='lg'>
                <Grid container className={classes.root}>

                    <Grid item xs={12} md={5} className={classes.loginImgHolder}>
                        <img src={loginImage} alt="" height='420px' className={classes.loginImg}/>

                    </Grid> {/*height='446px' width='490px' */}
                    <Grid item xs={1} md={2}> {/*<Divider orientation='vertical'/>*/}</Grid>

                    <Grid item xs={12} md={5}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline/>
                            <div className={classes.paper}>

                                <Typography component="h1" variant="h5" style={{paddingBottom: '40px'}}>
                                    Login Account
                                </Typography>
                                <form className={classes.form} noValidate>

                                    <TextField
                                        variant="outlined"
                                        margin="none"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        onChange={this.onEmailChange}
                                        autoComplete="email"
                                        autoFocus
                                        className={classes.textField}

                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="none"
                                        required
                                        fullWidth
                                        name="password"
                                        onChange={this.onPasswordChange}

                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        className={classes.textField}

                                    />

                                    <Box align='right'><Link href="/resetPassword" variant="body2">
                                        Forgot password?
                                    </Link>
                                    </Box>
                                    {this.errorcheck()}

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={this.onSubmit}
                                    >
                                        Log in
                                    </Button>
                                    <Grid container justify='center'>

                                        <Grid item md={6}>
                                            <Box mt={4} style={{fontWeight: '800'}}>Don't have an account?
                                                <Link href="/Signup" variant="body2">
                                                    {" Sign Up"}
                                                </Link></Box>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>

                        </Container>
                    </Grid>
                </Grid>
            </Container>
        );
    }

}

export default withStyles(useStyles)(Login);
