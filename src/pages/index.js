import {Route, Switch} from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import {routeUrls} from "../values/urls";
import PropTypes from 'prop-types';
import ProfilePage from './profile/index';
import SignInUp from "./SignInUp";
import ErrorPage from "../components/ErrorPage";
import {strings} from "../values/strings";
import {assets} from "../values/assets";
import Basket from "../components/Basket";

export function Index(props) {

    const {setShowHeaderButtons: showHeader, setShowFooter: showFooter, isLoggedIn, setLoggedIn, productCategories, setError500} = props;
    const matchUrl = props.match.url;

    return (
        <Switch>
            <Route exact path={`${matchUrl}`} render={(props) => <HomePage {...props} setShowHeaderButtons={showHeader}
                                                                           setError500={setError500}
                                                                           setShowFooter={showFooter}
                                                                           productCategories={productCategories}/>}/>
            <Route path={routeUrls.auth} render={(props) => <SignInUp {...props} setShowFooter={showFooter}
                                                                      isLoggedIn={isLoggedIn}
                                                                      setError500={setError500}
                                                                      setShowHeaderButtons={showHeader}
                                                                      setLoggedIn={setLoggedIn}/>}/>
            <Route path={routeUrls.profile} render={(props) => <ProfilePage {...props} setShowFooter={showFooter}
                                                                            setShowHeaderButtons={showHeader}
                                                                            isLoggedIn={isLoggedIn}
                                                                            setLoggedIn={setLoggedIn}/>}/>
            <Route path={routeUrls.cart} render={(props) => <Basket {...props} setShowHeaderButtons={showHeader}
                                                                    setShowFooter={showFooter}
                                                                    isLoggedIn={isLoggedIn}
            />}/>
            <Route path={routeUrls.error500}
                   render={(props) => <ErrorPage {...props}
                                                 title={strings.error500Title}
                                                 body={strings.error500Body}
                                                 image={assets.image1}
                   />}/>
            <Route render={(props) => <ErrorPage {...props} title={strings.error404Title} body={strings.error404Body}
                                                 image={assets.image1}/>}/>
        </Switch>
    );
}

Index.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    productCategories: PropTypes.array.isRequired,
    setError500: PropTypes.func.isRequired
};