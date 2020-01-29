import React from 'react';
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {strings} from "../values/strings";
import Slider from "react-slick";
import axios from 'axios';
import {serverUrls} from "../values/serverurls";
import PropTypes from 'prop-types';

// noinspection JSCheckFunctionSignatures
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
        marginTop: 5,
        marginBottom: 5,
    },
    container: {
        flip: false,
        marginTop: 50
    },
    dotsClass: {
        marginBottom: '10px'
    }
}));

export default function BestSellers(props) {

    const [sellers, setSellers] = React.useState([]);

    const classes = useStyles();

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };

    React.useEffect(() => {
        axios.get(serverUrls.sellers).then(response => {
            setSellers(response.data.filter((value, index) => index <= 6));
        }).catch(error => {
            if (error.response.status === 500) {
                props.setError500(true);
            } else {
                window.alert(`Error while getting sellers ${error.response.status}`);
            }
        });
    });

    return (
        <div className={classes.container}>
            <Container>
                <Grid container direction='column' wrap='nowrap' justify='center'>
                    <Grid item>
                        <Typography align='center' gutterBottom variant='h5' style={{
                            fontWeight: 'bold'
                        }}>
                            {strings.bestSellers}
                        </Typography>
                    </Grid>
                    {sellers.length === 0 ?
                        <Grid item>
                            <Typography align='center' gutterBottom variant='h6' style={{
                                fontWeight: 'bold'
                            }}>
                                {strings.emptySellers}
                            </Typography>
                        </Grid> :
                        <Grid item>
                            <Slider {...settings}>
                                {sellers.map(seller =>
                                    <Card classes={classes} elevation={0}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                image={seller['profileImage']}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" align='center'>
                                                    {seller.username}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Slider>
                        </Grid>
                    }
                </Grid>
            </Container>
        </div>
    );
}

BestSellers.propTypes = {
    setError500: PropTypes.func.isRequired
};