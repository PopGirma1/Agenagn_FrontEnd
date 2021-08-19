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

const useStyles = ((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        paddingTop: '56.25%',
    },
    card: {}

}));

class MainBody extends React.Component {
    state = {houseDocs: [], };

    componentDidMount = async () => {
        const {data} = await backEndApi.get('./homepage');
        console.log(data);
        this.setState({houseDocs: data})
    };
    render() {
        const local = 'http://localhost:5000';

        const {classes} = this.props;

        return (

            <Container maxWidth='md'>
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
                                            variant='p' color='textPrimary'>{home.monthly_payment} birr</Typography></Typography>
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


