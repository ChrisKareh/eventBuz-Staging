import SocialLogin from "@/Components/SocialLogin"
import registrationProgress from "@/Components/registrationProgress"
import {useState} from 'react'
import SMS from "../public/sms.png"
import Image from "next/image"

const userRegistration = () => {
    
    const [progressWidth, setProgressWidth] = useState(false)
    const [loading, setLoading] = useState(false)

    const startLoading = () => {
        setLoading(true)
        let width = 0;
        const interval = setInterval( () => {
            if (width >= 33){
                clearInterval(interval);
            } else {
                width++;
                setProgressWidth(width);
            }
        }, 5)
    }

    return (
    <>
        <div className="progress-containerr">
            
            <div className="progress-container-fill" style={{width: `${progressWidth}%`, backgroundColor: "#DFB62B"}}></div>
            {/* <div className="progress-container-fill" style={{width: `${progressWidth}%`}}></div>
            <div className="progress-container-fill" style={{width: `${progressWidth}%`}}></div>             */}
        </div>
        
       
        <div>

        </div>

        <div className="blankBar">
        <div className="progress-container"  ></div>
            <div className="progress-container" ></div>
            <div className="progress-container" ></div> 
        </div>

        <div className="progress-title-container">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6667 18.3335H15V16.6668C15 16.0038 14.7366 15.3679 14.2678 14.8991C13.799 14.4302 13.1631 14.1668 12.5 14.1668H7.50004C6.837 14.1668 6.20111 14.4302 5.73227 14.8991C5.26343 15.3679 5.00004 16.0038 5.00004 16.6668V18.3335H3.33337V16.6668C3.33337 15.5618 3.77236 14.502 4.55376 13.7206C5.33516 12.9391 6.39497 12.5002 7.50004 12.5002H12.5C13.6051 12.5002 14.6649 12.9391 15.4463 13.7206C16.2277 14.502 16.6667 15.5618 16.6667 16.6668V18.3335ZM10 10.8335C9.34343 10.8335 8.69325 10.7042 8.08662 10.4529C7.48 10.2016 6.9288 9.83332 6.46451 9.36903C6.00021 8.90474 5.63192 8.35354 5.38064 7.74691C5.12937 7.14029 5.00004 6.49011 5.00004 5.8335C5.00004 5.17689 5.12937 4.52671 5.38064 3.92008C5.63192 3.31345 6.00021 2.76226 6.46451 2.29796C6.9288 1.83367 7.48 1.46537 8.08662 1.2141C8.69325 0.962825 9.34343 0.833496 10 0.833496C11.3261 0.833496 12.5979 1.36028 13.5356 2.29796C14.4733 3.23564 15 4.50741 15 5.8335C15 7.15958 14.4733 8.43135 13.5356 9.36903C12.5979 10.3067 11.3261 10.8335 10 10.8335V10.8335ZM10 9.16683C10.8841 9.16683 11.7319 8.81564 12.3571 8.19052C12.9822 7.5654 13.3334 6.71755 13.3334 5.8335C13.3334 4.94944 12.9822 4.10159 12.3571 3.47647C11.7319 2.85135 10.8841 2.50016 10 2.50016C9.11599 2.50016 8.26814 2.85135 7.64302 3.47647C7.0179 4.10159 6.66671 4.94944 6.66671 5.8335C6.66671 6.71755 7.0179 7.5654 7.64302 8.19052C8.26814 8.81564 9.11599 9.16683 10 9.16683V9.16683Z" fill="#CDCDCD"/>
                </svg>
                <p>User Information</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13.4166 2.50016C13.3049 3.0501 13.3049 3.61689 13.4166 4.16683H3.75913L10.0508 9.7185L14.2583 5.95183C14.6133 6.391 15.0566 6.75683 15.5608 7.02266L10.06 11.9485L3.33329 6.0135V15.8335H16.6666V7.41683C17.2166 7.52855 17.7834 7.52855 18.3333 7.41683V16.6668C18.3333 16.8878 18.2455 17.0998 18.0892 17.2561C17.9329 17.4124 17.721 17.5002 17.5 17.5002H2.49996C2.27895 17.5002 2.06698 17.4124 1.9107 17.2561C1.75442 17.0998 1.66663 16.8878 1.66663 16.6668V3.3335C1.66663 3.11248 1.75442 2.90052 1.9107 2.74424C2.06698 2.58796 2.27895 2.50016 2.49996 2.50016H13.4166ZM17.5 5.8335C17.1717 5.8335 16.8466 5.76883 16.5433 5.64319C16.2399 5.51756 15.9643 5.33341 15.7322 5.10126C15.5 4.86912 15.3159 4.59352 15.1903 4.2902C15.0646 3.98689 15 3.6618 15 3.3335C15 3.00519 15.0646 2.6801 15.1903 2.37679C15.3159 2.07347 15.5 1.79788 15.7322 1.56573C15.9643 1.33358 16.2399 1.14943 16.5433 1.0238C16.8466 0.89816 17.1717 0.833496 17.5 0.833496C18.163 0.833496 18.7989 1.09689 19.2677 1.56573C19.7366 2.03457 20 2.67045 20 3.3335C20 3.99654 19.7366 4.63242 19.2677 5.10126C18.7989 5.5701 18.163 5.8335 17.5 5.8335Z" fill="#CDCDCD"/>
                </svg>
                <p>Email Verification</p>
            </div>
            <div>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="20" height="20" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#FFF" stroke="none">
                    <path d="M406 5104 c-87 -21 -172 -71 -246 -144 -77 -78 -114 -141 -140 -246
                    -19 -75 -20 -115 -20 -1493 0 -1190 3 -1427 15 -1484 45 -212 235 -390 445
                    -417 43 -5 480 -10 1015 -10 l941 0 792 -650 c435 -357 794 -650 797 -650 3 0
                    5 293 5 650 l0 650 288 0 c158 0 321 5 362 10 210 27 400 205 445 417 12 57
                    15 294 15 1484 0 1378 -1 1418 -20 1493 -26 105 -63 168 -140 246 -75 75 -159
                    123 -251 145 -94 22 -4211 21 -4303 -1z m1054 -1409 c90 -22 112 -33 106 -53
                    -2 -9 -15 -55 -27 -102 -12 -47 -23 -86 -24 -88 -1 -1 -27 7 -56 19 -32 12
                    -87 23 -136 26 -81 6 -82 5 -112 -25 -17 -17 -31 -38 -31 -47 0 -46 32 -68
                    176 -124 167 -65 242 -148 252 -281 12 -169 -99 -292 -296 -331 -100 -19 -270
                    -7 -370 26 -70 24 -83 31 -79 47 3 10 15 61 28 112 l23 95 25 -14 c86 -44 222
                    -69 290 -54 58 13 81 34 81 73 -1 53 -27 73 -163 126 -176 68 -260 158 -261
                    279 -1 88 21 146 76 207 108 117 295 158 498 109z m1032 -1 c52 -18 103 -59
                    130 -103 12 -20 23 -38 24 -39 1 -2 27 21 57 51 64 63 122 94 204 107 147 24
                    283 -41 343 -164 48 -100 52 -131 57 -498 l5 -348 -156 0 -156 0 0 318 0 318
                    -25 51 c-43 87 -134 107 -206 46 -63 -54 -64 -56 -67 -410 l-3 -323 -149 0
                    -149 0 -3 328 c-3 349 -3 348 -56 404 -69 74 -200 23 -231 -89 -7 -23 -11
                    -160 -11 -340 l0 -303 -150 0 -150 0 0 398 c0 218 -3 441 -7 495 l-6 97 130 0
                    c146 0 143 2 143 -74 0 -24 3 -45 6 -48 3 -3 24 14 46 38 91 98 248 135 380
                    88z m1609 0 c106 -24 106 -24 79 -135 -12 -52 -25 -97 -29 -101 -3 -3 -37 4
                    -76 17 -121 42 -236 28 -251 -29 -14 -59 13 -83 159 -141 206 -81 289 -196
                    259 -358 -31 -165 -163 -254 -393 -265 -151 -7 -349 36 -349 75 0 14 11 60 41
                    176 l10 37 37 -19 c97 -50 256 -69 317 -40 40 19 54 69 31 105 -17 25 -47 41
                    -186 98 -181 74 -261 205 -216 357 57 199 280 286 567 223z"/>
                    </g>
                </svg>

                <p>Phone Verification</p>
            </div>
        </div>


        <button onClick={startLoading} className="next">Next-Test</button> 

       
    </>

        
    )
}

export default userRegistration