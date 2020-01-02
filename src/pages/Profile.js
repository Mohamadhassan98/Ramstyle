import React from "react";
import {Container, makeStyles, TextField} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FlexBoxItem from "../tools/FlexBoxItem";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import {assets} from "../values/assets";
import {strings} from "../values/strings";

const useStyle = makeStyles(theme => ({
    avatar: {
        width: 250,
        height: 250
    },
    textField: {
        margin: 10
    }
}));

export default function Profile(props) {

    props.setShowHeaderButtons(true);
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');

    const classes = useStyle();

    return (
        <React.Fragment>
            <Container maxWidth='xs'>
                <FlexBoxItem display='flex' justifyContent='center'>
                    <Avatar src={assets.defaultProfile} className={classes.avatar}/>
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        className={classes.textField}
                        id='name'
                        autoFocus
                        name='name'
                        label={strings.name}
                        value={name}
                        onChange={event => setName(event.target.value)}
                        variant='filled'
                        fullWidth
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        id='lastName'
                        className={classes.textField}
                        name='lastName'
                        label={strings.lastName}
                        value={lastName}
                        variant='filled'
                        onChange={event => setLastName(event.target.value)}
                        fullWidth
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        className={classes.textField}
                        id='username'
                        name='username'
                        label={strings.username}
                        value={username}
                        variant='filled'
                        onChange={event => setUsername(event.target.value)}
                        fullWidth
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        id='email'
                        className={classes.textField}
                        name='email'
                        label={strings.email}
                        value={email}
                        variant='filled'
                        onChange={event => setEmail(event.target.value)}
                        fullWidth
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex' justifyContent='center'>
                    <Button variant='contained' color='primary'>
                        {strings.saveChanges}
                    </Button>
                </FlexBoxItem>
            </Container>
        </React.Fragment>
    );
}

Profile.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired
};