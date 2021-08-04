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

    render() {
        const cards = [1, 2, 3, 4, 5, 6, 7];
        const {classes} = this.props;

        return (

            <Container maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={process.env.PUBLIC_URL + '/img/2.jpg'}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="body1" component="h2">
                                            Ayat Condominium
                                        </Typography>

                                        <Typography variant='body2' color='textSecondary'>Bed Room: <Typography
                                            variant='p' color='textPrimary'>3</Typography></Typography>
                                        <Typography variant='body2' color='textSecondary'>Monthly Rent: <Typography
                                            variant='p' color='textPrimary'>6500 birr</Typography></Typography>
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
