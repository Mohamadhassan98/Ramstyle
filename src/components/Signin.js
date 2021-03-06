import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {strings} from "../values/strings";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import axios from 'axios';
import {serverUrls} from "../values/serverurls";
import PropTypes from 'prop-types';
import {baseUrls} from "../values/urls";
import CircularProgress from "@material-ui/core/CircularProgress";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 300,
    },
    checkboxIcon: {
        color: theme.palette.secondary.dark
    }
}));

export default function Signin(props) {

    const classes = useStyles();
    const [username, setUsername] = React.useState("");
    const [usernameError, setUsernameError] = React.useState(' ');
    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(' ');
    const [showPassword, setShowPassword] = React.useState(false);
    const [keepChecked, setKeepChecked] = React.useState(true);
    const [isLoading, setLoading] = React.useState(false);
    const [wrongPassword, setWrongPassword] = React.useState(false);

    const handleChange = prop => event => {
        if (prop === "keepChecked") {
            setKeepChecked(event.target.checked);
        } else if (prop === "username") {
            setUsername(event.target.value);
        } else if (prop === "password") {
            setPassword(event.target.value);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const validateForm = () => {
        let valid = true;
        if (!username || username.length === 0) {
            setUsernameError(strings.emptyUsernameError);
            valid = false;
        }
        if (!password || password.length === 0) {
            setPasswordError(strings.emptyPasswordError);
            valid = false;
        }
        return valid;
    };

    const onSignInButtonClicked = () => {
        if (!validateForm()) {
            return;
        }
        const data = {
            username: username,
            password: password,
            keep: keepChecked
        };
        setLoading(true);
        axios.post(serverUrls.signIn, data).then(response => {
            // response is 201!
            props.setLoggedIn(true);
            if (props.location && props.location.state && props.location.state.referer) {
                props.history.replace(props.location.state.referer);
            } else {
                props.history.push(baseUrls.home);
            }
        }).catch(error => {
            if (error.response.status === 400) {
                setWrongPassword(true);
            } else if (error.response && error.response.status === 500) {
                props.setError500(true);
            } else {
                window.alert(`Error while signing in ${error}`);
            }
        }).finally(() => {
            setLoading(false);
        });
    };

    const errorsOff = () => {
        setUsernameError(' ');
        setPasswordError(' ');
    };

    return (
        <div className={classes.root}>
            <Dialog
                open={wrongPassword}
                onClose={() => setWrongPassword(false)}
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{
                        color: 'red'
                    }}>
                        {strings.wrongCredentials}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="username">
                            {strings.username}
                        </InputLabel>
                        <OutlinedInput
                            id="username"
                            value={username}
                            onChange={handleChange('username')}
                            labelWidth={70}
                            required
                            error={usernameError !== ' '}
                        />
                        <FormHelperText error={usernameError !== ' '} id="username-helper">
                            {usernameError}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="password">
                            {strings.password}
                        </InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={65}
                            error={passwordError !== ' '}
                            required
                        />
                        <FormHelperText error={passwordError !== ' '} id="password-helper">
                            {passwordError}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={keepChecked}
                                onChange={handleChange('keepChecked')}
                                value="checkedLogin"
                                icon={<CheckBoxOutlineBlankIcon className={classes.checkboxIcon}/>}
                                checkedIcon={<CheckBoxIcon className={classes.checkboxIcon}/>}
                            />
                        }
                        label={strings.rememberMe}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={onSignInButtonClicked} onBlur={errorsOff}>
                        {strings.signIn}
                        {isLoading && <CircularProgress color="inherit"
                                                        size={20}/>}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

Signin.propTypes = {
    setLoggedIn: PropTypes.func.isRequired,
    setError500: PropTypes.func.isRequired
};