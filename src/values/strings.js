const zwnj = '‌';

const appName = 'رم استایل';

const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export const strings = {
    appName: appName,
    toolbarSearchLabel: 'جستجو...',
    bestSellers: 'فروشندگان برتر',
    emptySellers: 'لیست فروشندگان خالی است.',
    productCategories: `دسته${zwnj}بندی محصولات`,
    categoriesEmpty: `دسته${zwnj}بندی وجود ندارد.`,
    mySales: 'خریدهای من',
    profile: 'پروفایل',
    changePassword: 'تغییر کلمه عبور',
    logout: 'خروج',
    oldPassword: 'کلمه عبور فعلی',
    newPassword: 'کلمه عبور جدید',
    confirmPassword: 'تکرار کلمه عبور',
    saveChanges: 'ثبت تغییرات',
    name: 'نام',
    lastName: 'نام خانوادگی',
    email: 'ایمیل',
    username: 'نام کاربری',
    applicationsTitle: `${appName} همیشه همراه شما`,
    applicationsBody: `با نصب اپلیکیشن ${appName} بر روی گوشی همراه خود، جدیدترین اخبار را دریافت کنید و از هیچ تخفیفی بی اطلاع نمانید.`,
    show: 'نمایش',
    product: 'محصول',
    from: 'از',
    password: 'کلمه عبور',
    rememberMe: 'مرا به خاطرت نگه دار',
    signIn: 'ورود',
    signUp: 'ثبت نام',
    passwordHelper: `حداقل ${persianNumbers[8]} کاراکتر شامل یک حرف`,
    saleHelp: `راهنمای خرید از ${appName}`,
    orderRegisterHelp: 'نحوه ثبت سفارش',
    sendOrderProcedure: 'رویه ارسال سفارش',
    paymentMethods: `شیوه${zwnj}های پرداخت`,
    customerServices: 'خدمات مشتریان',
    faq: `پاسخ به پرسش${zwnj}های متداول`,
    productReturnProcedure: 'رویه بازگرداندن کالا',
    termsOfUse: 'شرایط استفاده',
    privacy: 'حریم خصوصی',
    reportBug: 'گزارش اشکال',
    withUs: `با ${appName}`,
    appForum: `اتاق خبر ${appName}`,
    saleWithUs: `فروش در ${appName}`,
    contactUs: `تماس با ${appName}`,
    aboutUs: 'درباره ما',
    jobOpportunities: `فرصت${zwnj}های شغلی`,
    followUs: `${appName} را در شبکه${zwnj}های اجتماعی دنبال کنید.`,
    emptyUsernameError: `نام کاربری نمی${zwnj}تواند خالی باشد.`,
    emptyPasswordError: `کلمه عبور نمی${zwnj}تواند خالی باشد.`,
    confirmPasswordNotMatch: 'کلمه عبور تطابق ندارد.',
    invalidEmail: 'ایمیل وارد شده صحیح نیست.',
    usernameAlreadyExists: 'نام کاربری از قبل وجود دارد.',
    emailAlreadyExists: 'ایمیل از قبل وجود دارد.',
    commonPasswordError: 'کلمه عبور بیش از حد ساده است.',
    changeProfile: 'برای افزودن و تغییر عکس کلیک کنید.\nبرای حذف نگه دارید.',
    error404Body: 'صفحه مورد نظر یافت نشد.',
    error404Title: toPersianNumbers(404),
    error500Body: 'خطای داخلی سرور',
    error500Title: toPersianNumbers(500),
    returnToPreviousPage: 'بازگشت به صفحه قبل...',
    rial: 'ریال',
    productCount: 'تعداد کالا',
    totalPrice: 'قیمت کل کالاها',
    priceToPay: 'مبلغ قابل پرداخت',
    price: 'قیمت',
    continuePurchaseProcedure: 'ادامه فرایند خرید',
    searchAmongBelow: 'جستجو در محصولات زیر...',
    isStock: 'دست دوم',
    isNew: 'نو',
    basket: 'سبد خرید',
    auth: 'ورود/ثبت نام',
    wrongPassword: 'کلمه عبور اشتباه است.',
    wrongCredentials: 'نام کاربری و/یا کلمه عبور اشتباه است.',
    number: '#',
    basketStatus: 'وضعیت سفارش',
    basketPrice: 'قیمت کل سبد',
    basketRecordTime: 'تاریخ ثبت سفارش',
    trackingCode: 'کد پیگیری',
    noSalesFound: 'سابقه خرید یافت نشد.',
    productDetail: 'مشخصات یک محصول',
    PurchaseReport: 'گزارش خرید',
    products: 'محصولات',
    bankPort: 'درگاه بانک',
    aboutProject: 'درباره پروژه',
    mySale: 'سابقه خرید',
    undefinedCategory: `دسته${zwnj}بندی نامشخص`,
    unavailable: 'ناموجود',
    emptyBasket: 'سبد خالی است.',
    maximumCountExceeded: 'کالا به تعداد کافی در انبار موجود نیست.'
};

export function toPersianNumbers(value) {
    let result = value.toString();
    persianNumbers.forEach((value1, index) => {
        const regex = new RegExp(`${index}`, 'g');
        result = result.replace(regex, value1);
    });
    return result;
}

export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegex = /(?=[\w\s]*[A-Za-z][\w\s]*)[\w\s]{8,}/;