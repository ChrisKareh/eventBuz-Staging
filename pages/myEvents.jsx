import HeaderSignedIn from "@/Components/HeaderSignedIn";
import image1 from '../public/image1.jpg'
import {useEffect, useState} from "react";
import imageByIndex from '../functions/imageByIndex'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {Thumb} from "@/Components/VerticalThumbSlider";
import EmblaCarousel from "../Components/EmblaCarousel";
import { useCallback } from "react";
import axios from "axios";
import { profileData, switchProfileURL } from "./api/auth/URL";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import SecondaryHeader from "@/Components/SecondaryHeader";
import ThirdHeader from "@/Components/ThirdHeader";
import { Table } from "@radix-ui/themes";
import eventsHeader from "@/Components/eventsHeader";
import { Router, useRouter } from "next/router";
import EventTable from "@/Components/eventsTable";
const myEvents = () => {

    const OPTIONS = {axis: 'y'}
    const OPTIONS2 = {}
    const [emblaRef] = useEmblaCarousel(OPTIONS)
    const [emblaRef2] = useEmblaCarousel({})
    const [emblaRef3] = useEmblaCarousel(OPTIONS2)
    const SLIDE_COUNT = 3
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const emblaApi = useEmblaCarousel(emblaRef);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(OPTIONS, [Autoplay()])
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })


    const [email, setemail] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [events, setEvents] = useState([])

    const router = useRouter()

    const onThumbClick = useCallback(
        (index) => {
          if (!emblaMainApi || !emblaThumbsApi) return
          emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
      )

    useEffect(() => {
    //    userProfileData();
    //    switchProfile()
    getEvents()
    }, []);

    const getEvents = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/events/all',
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json'
            }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data.data);
            // setEvents(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
    }
    


    return (
        <>
            <HeaderSignedIn />
            <SecondaryHeader />


            <div className="Home"style={{height: '100vh'}}>
                <div style={{paddingTop: 100}}className="top-left-Profile">
                <button onClick={() => {router.push('/createEvent')}} className="justAbutton" style={{zIndex: 1000000, marginTop: 90}}> <span style={{marginLeft: 18}}>Create Event</span> </button>
                    {/* <img className="userImage" src={image1.src} /> */}
                    <eventsHeader />
                    <EventTable events={events} />
    
                </div>



                {/* <div className="top-right-profile" style={{flexDirection:"column"}}>
                    <div className="emblaV" style={{marginTop:40, width: "100%"}}>
                        <div className="embla__viewportV" ref={emblaMainRef}>
                            <div className="embla__containerV">
                                {SLIDES.map((index) => (
                                    <div className="embla__slideV" key={index}>
                                        <div className="embla__slide__numberV">
                                            <span>{index + 1}</span>
                                        </div>
                                        <img
                                            className="embla__slide__imgV"
                                            src={imageByIndex(index)}
                                            alt="Your alt text"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="embla-thumbs" style={{width:"25%", height:"25%" ,marginLeft: 30}}>
                        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                            <div className="embla-thumbs__container">
                                {SLIDES.map((index) => (
                                    <Thumb
                                        onClick={() => onThumbClick(index)}
                                        selected={index === selectedIndex}
                                        index={index}
                                        imgSrc={imageByIndex(index)}
                                        key={index}
                                    />

                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>






        </>
    )
}
export default myEvents