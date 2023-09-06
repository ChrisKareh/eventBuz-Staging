import { useRouter } from "next/router";
import SocialLogin from "@/Components/SocialLogin";
import Head from "next/head";
import {useEffect, useState} from "react";
import { checkEmail } from "./api/auth/APICalls";





// const [selectedRadio, setSelectedRadio] = useState(null);




const login = () =>{
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [radioValue, setradioValue]=useState('');

    const handleRadioChange = (e) => {
        console.log(e.target.id)
        setradioValue(e.target.id)
    }

    const loginFunction = () => {
        if (radioValue == '') {
            console.log("Please select type of user")
        } else {
            console.log(email)
            if(email==""){
                console.log("Please enter email")
            } else {
                if (checkEmail(email)){
                    console.log("Email Exist")
                    console.log(radioValue)
                    if(radioValue == 'radio') {
                        router.push('/userProfile');
                    }
                } else {
                    if(radioValue == 'radio2'){
                        router.push('/RegistrationUser');
                    }

                }
            }

        }
    }


    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                console.log("Enter key was pressed. Run your function.");
                event.preventDefault();
                loginFunction()
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [radioValue]);
   
    return (
        
        <div className="login">
            <Head>
                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
            </Head>
            
                <div className="HeaderTitle">
                    <p className="titleText">Sign In</p>
                </div>
                <div className="radio-buttons-container">
                    <div className="radio-button">
                    <input name="radio-group" id="radio2" className="radio-button__input" type="radio" onChange={handleRadioChange}/>
                    <label htmlFor="radio2" className="radio-button__label">
                        <span className="radio-button__custom"></span>
                            User
                    </label>
                    </div>
                    <div className="radio-button">
                    <input name="radio-group" id="radio1" className="radio-button__input" type="radio" onChange={handleRadioChange}/>
                    <label htmlFor="radio1" className="radio-button__label">
                        <span className="radio-button__custom"></span>
                        
                        Organizer
                    </label>
                    </div>
                
            </div>

            {/* <div className="SigninField"> */}
                <div className="SigninField">
                    <a>Email</a>
                    <input type="text" name="text" className="input" onChange={e => {setEmail(e.currentTarget.value)}}></input>
                </div>
            {/* </div> */}

            <div className="forget">
                <div>
                    <button className="loginButton"  onClick={ () => {
                        // if (radioValue == '') {
                        //     console.log("Please select type of user")
                        // } else {
                        //     if (checkEmail(email)){
                        //         console.log("Email Exist")
                        //         if(radio == 'radio') {
                        //             router.push('/userProfile');
                        //         }
                        //     } else {
                        //         if(radioValue == 'radio2'){
                        //             router.push('/RegistrationUser');
                        //         }
                        //
                        //     }
                        // }
                        loginFunction()

                        
                    }}>
                        Continue
                    </button>
                </div>
                
            </div>
            

            <div className="socialField">
                <SocialLogin />
            </div>
            
        </div>
        
        
    )
}
export default login