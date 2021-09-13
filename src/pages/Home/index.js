import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Link,
    Typography,
    withStyles
} from '@material-ui/core';
import backEndApi from "../../services/api";
import Search from "./Search";

const useStyles = ((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:20,
        [theme.breakpoints.down('sm')]:{
            padding:0,
            margin:0,
        }
    },
    media: {
        paddingTop: '56.25%',
    },
    card: {},

    searchBarHolder:{
        position:'relative',
        width: '70%',
        padding:0,
        margin:0,
        paddingBottom:'20px',

        "&:focus-within":{
            transform: "scale(1.025)",

        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding:0,
            margin:0

        }
    },
    searchBar: {
        border:'0.2px solid #b5afaf',
        paddingTop:10,
        paddingBottom:10,
        width: '100%',
        fontSize:'20px',
        borderRadius: '50px',
        paddingLeft:'50px',
        height:'50px',
        outline:'none',
        "&:hover": {
            boxShadow: "1px 1px 1em #c4c4c4",
            outline:'none',

        },
        [theme.breakpoints.down('sm')]: {
            fontSize:'20px',

        }
    },

}));

class MainBody extends React.Component {
    state = {houseDocs: [], images:[], keyword:''};

    componentDidMount = async () => {
        console.log(this.props.match.params.q);
        let q = new URLSearchParams(this.props.history.location.search).get('q');
        this.setState({keyword: q});
        const {data} = await backEndApi.get('./search', {params:{q:q}});
        console.log(data);
        this.setState({houseDocs:data})
    };
    onInputChange = (e) =>{
        e.preventDefault();
        this.setState({keyword:e.target.value})
    };
    onFormSubmit = async (e) =>{
        e.preventDefault();
        let q = this.state.keyword;
        const {data} = await backEndApi.get('./search', {params:{q:q}});
        this.setState({houseDocs: data});
        this.props.history.push(`/search?q=${q}`)

    };
    render() {
        const local = 'http://localhost:5000';
        const {classes} = this.props;

        return (
            <Container maxWidth='md' className={classes.root}>
                <form className={classes.searchBarHolder} onSubmit={this.onFormSubmit}>
                    <input type="text" value={this.state.keyword} placeholder="Ayat Condominium" className={classes.searchBar} onChange={this.onInputChange}/>
                    <i className="fas fa-search fa-lg"
                       style={{position: 'absolute', left: 15, top: 19, opacity: '0.4'}}></i>
                </form>

                <Grid container spacing={4}>
                    {this.state.houseDocs?this.state.houseDocs.map((home) => (
                        <Grid item key={home._id} xs={12} sm={6} md={4}>
                            <Card className={classes.root}>
                                <CardActionArea href={`/detail/${home._doc._id}`}>
                                    <CardMedia
                                        className={classes.media}
                                        image={`${local}/images/products/${home._doc.ownerEmail}/${home._doc._id}/${home.Img}`}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent style={{paddingBottom:0}}>
                                        <Typography gutterBottom variant="body1" component="h2">
                                            {home._doc.location}
                                        </Typography>

                                        <Typography variant='body2' color='textSecondary'>Bed Room: <Typography
                                            variant='p' color='textPrimary'>{home._doc.bed_room}</Typography></Typography>
                                        <Typography variant='body2' color='textSecondary'>Monthly Rent: <Typography
                                            variant='p'
                                            color='textPrimary'>{home._doc.monthly_payment} birr</Typography></Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions  style={{display:'flex', justifyContent:'flex-end', width:'100%',  paddingTop:0, paddingRight:30}}>
                                    <Button href={`/detail/${home._doc._id}`} size="small" color="primary">
                                        View
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    )):''}

                </Grid>
            </Container>
        );
    }

}

export default withStyles(useStyles)(MainBody);


