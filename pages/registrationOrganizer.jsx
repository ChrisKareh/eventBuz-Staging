import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import registrationProgress from '@/Components/registrationProgress'
import { checkEmail } from './api/auth/APICalls'
import { registerEmail } from './api/auth/APICalls'
import {useRouter} from "next/router";





const RegistrationOrganizer = () => {
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const [confEmail, setconfEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setconfPassword] = useState('')
    const [country, setCountry] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [nationality, setNationality] = useState('')
    const [role, setRole] = useState('')
    const [signinType, setSignInType] = useState('')
    const options = useMemo(() => countryList().getData(), [])


    const router = useRouter()



    const changeHandler = value => {
        console.log(value.label)
        setCountry(value.label)
        console.log(country)
    }

    const handleEmailConfirmation= () => {
        if(email != confEmail){
            return false
        }
    }

    const handleDateChange = (e) => {
        console.log("DATE", e.target.value)
        setDob(e.target.value)
    }
    const genderHandler= (e) => {
        console.log("selected gender", e.target.value)
        setGender(e.target.value)
    }
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif",
            fontWeight: 500,
            fontSize: "10",
            color: "#fff",
            backgroundColor: "rgb(28,28,30)",
            borderRadius: "63px",
            border: "none",
            outline: "none",
            padding: "0.4vw",
            width: "380px",
            height: "40px",
            transition: ".4s",
            marginLeft: "10px",
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            position:"absolute",
            marginBottom: 30,
            marginLeft: 10,


        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            marginLeft: 353,
            width: 30,
            height: 30,
            position: "absolute",
            marginBottom: 35,


        }),
        indicatorSeparator: () => ({
            display: 'none',  // Hide the divider
        }),
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: '#333', // Change this to your desired color
            width: 380,
            marginLeft: 20,
            color: "#FFF"
        }),
        option: (provided, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...provided,
                fontFamily: "sans-serif",
                fontSize: 13,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                        ? '#666'  // Change this to your desired selected color
                        : isFocused
                            ? '#444'  // Change this to your desired focused color
                            : null,
                ':active': {
                    ...provided[':active'],
                    backgroundColor: !isDisabled && '#555', // Change this to your desired active color

                },
            };
        },
        singleValue: (provided, state) => {
            return { ...provided, color: 'white' };  // Replace 'green' with your desired color
        },
    };

    return (
        <>


            <div className="login">
                <div className="HeaderTitle">
                    <p className="titleText">Sign Up</p>
                </div>
                <div className="SignupField">
                    <div className="Input">
                        <a>First Name</a>
                        <input type="text" name="text" className="input" onChange={e => {setName(e.currentTarget.value)}}></input>
                    </div>
                    <div className="Input">
                        <a>Last Name</a>
                        <input type="text" name="text" className="input" onChange={e => {setlastName(e.currentTarget.value)}}></input>
                    </div>
                </div>
                <div className="SignupField">
                    <div className="Input">
                        <a>Organization Name</a>
                        <input type="text" name="text" className="input" onChange={e => {setName(e.currentTarget.value)}}></input>
                    </div>
                    <div className="Input">
                        <a>Organization Type</a>
                        <input type="text" name="text" className="input" onChange={e => {setlastName(e.currentTarget.value)}}></input>
                    </div>
                </div>
                <div className="SignupField">
                    <div className="Input">
                        <a>Email</a>
                        <input type="text" name="text" className="input" onChange={e => {setemail(e.currentTarget.value)}}></input>
                    </div>
                    <div className="Input">
                        <a>Confirm Email</a>
                        <input type="text" name="text" className="input" onChange={e => {setconfEmail(e.currentTarget.value)}}></input>
                    </div>
                </div>
                <div className="SignupField">
                    <div>
                        <a>Country Picker</a>
                        <Select styles={customStyles} options={options} value={country} onChange={changeHandler}/>
                    </div>
                    <div className="Input">
                        <a>Phone Number</a>
                        <PhoneInput
                            placeholder="Enter phone number"

                            value={phoneNumber}
                            onChange={setphoneNumber}/>
                    </div>
                </div>
                <div className="SignupField">
                    <div className="Input">
                        <a>Gender</a>
                        <select name="" id="" className="form-control" value={gender} onChange={genderHandler}>
                            <option value="" disabled defaultValue>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Rather Not Say</option>
                        </select>
                    </div>
                    <div className="Input">
                        <a>Date Of Birth</a>
                        <input onChange={handleDateChange}  className="input"  type="date" name="dateofbirth" id="dateofbirth" ></input>
                    </div>
                </div>
                <div className="SignupField" style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="Input">
                        <a>Nationailty</a>
                        <input type="text" name="text" className="input" onChange={e => {setNationality(e.currentTarget.value)}}></input>
                    </div>
                    <button className="loginButton" style={{marginTop: 35, marginLeft:280, height: 40, marginRight: 20}} onClick={ () => {
                        console.log("I got pressed")
                        if(handleEmailConfirmation){
                            console.log("Got passed email confirmation")
                            // if(checkEmail(email) ==  true){
                            console.log("email check existence")
                            setRole('customer')
                            setSignInType('email')
                            if(registerEmail(name, lastName, email, gender, phoneNumber, country, nationality, dob, role, signinType)) {
                                router.push('/userProfile');
                            } else {
                                console.log("Account not signed up")
                            }

                            // }
                        }
                    }}>
                        Continue
                    </button>

                </div>

            </div>
        </>


    )
}

export default RegistrationOrganizer