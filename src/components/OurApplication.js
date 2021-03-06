import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import {makeStyles} from "@material-ui/core";
import {assets} from "../values/assets";
import {strings} from "../values/strings";

const useStyle = makeStyles(theme => ({
    container: {
        background: theme.palette.secondary.light,
    },
    img: {
        height: '50px',
        cursor: 'pointer'
    },
    flexContainer: {
        minHeight: '100%'
    },
    mobile: {
        height: 500
    },
}));


export default function OurApplication() {
    const classes = useStyle();

    return (
        <Container className={classes.container} maxWidth='lg'>
            <FlexBoxContainer justifyContent='center' flexBasis='100%'>
                <FlexBoxItem flexBasis='200%'>
                    <FlexBoxContainer flexDirection='column' justifyContent='space-around'
                                      className={classes.flexContainer}>
                        <FlexBoxItem>
                            <Typography variant="h3">
                                {strings.applicationsTitle}
                            </Typography>
                        </FlexBoxItem>
                        <FlexBoxItem>
                            <Typography variant="h5">
                                {strings.applicationsBody}
                            </Typography>
                        </FlexBoxItem>
                        <FlexBoxItem>
                            <FlexBoxContainer justifyContent='space-around'>
                                <FlexBoxItem>
                                    <Typography>
                                        <img src={assets.googlePlay} className={classes.img}/>
                                    </Typography>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <Typography>
                                        <img src={assets.myket} className={classes.img}/>
                                    </Typography>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <Typography>
                                        <img src={assets.bazaar} className={classes.img}/>
                                    </Typography>
                                </FlexBoxItem>
                            </FlexBoxContainer>
                        </FlexBoxItem>
                    </FlexBoxContainer>
                </FlexBoxItem>
                <FlexBoxItem>
                    <FlexBoxContainer flexDirection='column'>
                        <FlexBoxItem>
                            <img src={assets.ourApp} className={classes.mobile}/>
                        </FlexBoxItem>
                    </FlexBoxContainer>
                </FlexBoxItem>
            </FlexBoxContainer>
        </Container>
    );
}