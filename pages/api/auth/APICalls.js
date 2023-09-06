import axios from 'axios'
import { checkEmailURL, registrationByEmail } from './URL'
import {toast} from 'react-toastify'
import {setStatusMessage} from "@/Redux/slice";
import {Store} from "@/Redux/store";


const registerEmail = (name, lastName, email, gender, phoneNumber, country, nationality, dob, role, signinType) => {

    const FormData = require('form-data');
let data = new FormData();
data.append('name', name);
data.append('family_name', lastName);
data.append('email', email);
data.append('gender', gender);
data.append('phone', phoneNumber);
data.append('country', country);
data.append('nationality', nationality);
data.append('dob', dob);
data.append('sign_in_type', signinType);
data.append('role', role);

console.log("EMAIL",email)

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/register',
  headers: {
    'Content-Type':'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
    console.log(response);
    toast.success("Sign Up Completed")
    if(response.status = 200){
        localStorage.setItem('access_Token', response.data.access_token)
        Store.dispatch(setStatusMessage(response.status))
    }


})
.catch((error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    console.log("Only the error message",error.response.data.errors)
    toast.error("Email or Phone Number exist")
    console.log("Data:", error.response.data);
    console.log("Status:", error.response.status);
    console.log("Headers:", error.response.headers);

  } else if (error.request) {
    toast.error("Something went wrong please try again")
    console.log("Request:", error.request);
  } else {
      toast.error("Something went wrong please try again")
    console.log("Error:", error.message);
  }
});
    

}

// const login = (Email) => {

// }

const checkEmail = (Email, goToSignUp) => {

    axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: checkEmailURL,
        headers: {
            'Content-Type' : 'application/json',
        },
        data: {
            email : Email  
        } 
    }) 
    .then((response) => {
        console.log(JSON.stringify(response.data))

    })
    .catch((error) => {
        if(error.response){
            console.log("DATA-ERROR:",error.response.data.message)
            console.log("STATUS-ERROR", error.response.status)
            console.log("HEADERS-ERROR", error.response.error)
        } else if (error.request) {
            console.log("REQUEST-ERROR", error.request)
        } else {
            console.log("ERROR-MESSAGE", error.message)
        }
        // console.log(error)
    })
}



export {registerEmail, checkEmail}