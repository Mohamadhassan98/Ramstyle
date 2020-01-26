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
import {useCookies} from 'react-cookie';


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

//fixme remove placeholders
export default function Signin(props) {

    const classes = useStyles();
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [checkedLogin, setCheckedLogin] = React.useState(true);
    const [cookies, setCookies, removeCookies] = useCookies(['csrftoken']);

    const handleChange = prop => event => {
        if (prop === "checkedLogin") {
            setCheckedLogin(event.target.checked);
        } else if (prop === "username") {
            setUsername(event.target.value);
        } else if (prop === "email") {
            setEmail(event.target.value);
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

    const onSignInButtonClicked = () => {
        const data = {
            username: username,
            password: password,
            email: email,
        };
        if (checkedLogin) {
            data.keep = true;
        }
        axios.post(serverUrls.signIn, data).then(response => {
            // response is 201!
            props.setLoggedIn(true);
            const csrf = cookies['csrftoken'];
            if (csrf) {
                axios.defaults.headers['X-CSRFToken'] = csrf;
            }
            props.history.push(baseUrls.home);
        }).catch(error => {
            // TODO Show appropriate Error
            window.alert('TODO: Show appropriate Error');
            console.log(error);
        });
    };

    return (
        <div className={classes.root}>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-username">
                            {strings.username}
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-username"
                            value={username}
                            onChange={handleChange('username')}
                            placeholder={strings.username}
                            labelWidth={70}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-username">
                            {strings.email}
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-username"
                            value={email}
                            onChange={handleChange('email')}
                            placeholder={strings.email}
                            labelWidth={40}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">
                            {strings.password}
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleChange('password')}
                            placeholder={strings.password}
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
                        />
                        <FormHelperText id="standard-password-helper-text">
                            {strings.passwordHelper}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checkedLogin}
                                onChange={handleChange('checkedLogin')}
                                value="checkedLogin"
                                icon={<CheckBoxOutlineBlankIcon className={classes.checkboxIcon}/>}
                                checkedIcon={<CheckBoxIcon className={classes.checkboxIcon}/>}
                            />
                        }
                        label={strings.rememberMe}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={onSignInButtonClicked}>
                        {strings.signIn}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

Signin.propTypes = {
    setLoggedIn: PropTypes.func.isRequired
};