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
        [theme.breakpoints.down('sm')]:{
            padding:0,
            margin:0,
        }
    },
    media: {
        paddingTop: '56.25%',
    },
    card: {},


}));

class MainBody extends React.Component {
    state = {houseDocs: [],};

    componentDidMount = async () => {
        console.log(this.props.match.params.q);
        let q = new URLSearchParams(this.props.history.location.search).get('q');
        const {data} = await backEndApi.get('./search', {params:{q:q}});
        console.log(data);
        this.setState({houseDocs: data})
    };

    render() {
        const local = 'http://localhost:5000';

        const {classes} = this.props;

        return (

            <Container maxWidth='md' className={classes.root}>
                {/*<Search/>*/}


                <Grid container spacing={4}>
                    {this.state.houseDocs.map((home) => (
                        <Grid item key={home._id} xs={12} sm={6} md={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={local + '/images/products/' + home.encodedImageUrl + '.jpg'}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="body1" component="h2">
                                            {home.location}
                                        </Typography>

                                        <Typography variant='body2' color='textSecondary'>Bed Room: <Typography
                                            variant='p' color='textPrimary'>{home.bed_room}</Typography></Typography>
                                        <Typography variant='body2' color='textSecondary'>Monthly Rent: <Typography
                                            variant='p'
                                            color='textPrimary'>{home.monthly_payment} birr</Typography></Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button href="/detail" size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Save
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))}

                </Grid>
            </Container>
        );
    }

}

export default withStyles(useStyles)(MainBody);


