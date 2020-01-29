import {strings} from "./strings";

export const baseUrls = {
    home: '/',
    auth: '/auth',
    profile: '/profile',
    categories: (id) => `/categories/${id}`,
    cart: '/cart',
    error500: '/500'
};

export const profileUrls = {
    profile: '/',
    mySales: '/my-sales',
    changePassword: '/change-password'
};

export const routeUrls = {
    home: baseUrls.home,
    categoryRoute: `/${baseUrls.categories.name}/:id`,
    auth: baseUrls.auth,
    profile: baseUrls.profile,
    mySales: `${baseUrls.profile}${profileUrls.mySales}`,
    changePassword: `${baseUrls.profile}${profileUrls.changePassword}`,
    cart: baseUrls.cart,
    error500: `${baseUrls.error500}`
};

export const pageTitles = {
    home: `${strings.appName}`,
    basket: `${strings.basket}`,
    auth: `${strings.auth}`,
};