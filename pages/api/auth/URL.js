const App_URL = `https://jonathana74.sg-host.com/event-buz-backend-main/api/v1`

const registrationByEmail = `${App_URL}/register`
const checkEmailURL = `${App_URL}/check-email`
const resendVerificationCodeURL = `${App_URL}/resend-email-verification-code`
const verifyEmailURL = `${App_URL}/verify-email`
const sendSMS = `${App_URL}/send-sms`
const organizationTypeListURL = `${App_URL}/organiser/type`
const subscriptionsURL = `${App_URL}/packages/all`
const profileData = `${App_URL}/show-profile`
const switchProfileURL = `${App_URL}/switch-profile`
const getPlacesURL = `${App_URL}/get-user-places` 
const getSuppliersURL = `${App_URL}/get-user-suppliers`

export {registrationByEmail, checkEmailURL, resendVerificationCodeURL, verifyEmailURL, sendSMS, organizationTypeListURL, subscriptionsURL, profileData, switchProfileURL, getPlacesURL, getSuppliersURL}