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

    const router = useRouter()

    const onThumbClick = useCallback(
        (index) => {
          if (!emblaMainApi || !emblaThumbsApi) return
          emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
      )

    useEffect(() => {
       userProfileData()
    //    switchProfile()
    }, []);

    const  userProfileData = async () =>  {
       const profile_loggedIn = localStorage.getItem('profile_loggedIn');
        var Token = ''
        if(profile_loggedIn) {
            Token = localStorage.getItem('profile_access_Token')
        } else {
             Token = localStorage.getItem('access_Token')
        }

        console.log("[+] ACCESS TOKEN", Token)

        await axios.request({
            method: 'get',
            url: profileData,
            headers:{
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+Token
            },
            // data:{
            //     id: 1,
            //     type: 
            // }
        })
        .then((response) => {
            console.log("User Data",response.data.data)
            setemail(response.data.data.email)
            setphoneNumber(response.data.data.phone)

        })
        .catch((error) => {
            console.log(error)
        })
    }



    return (
        <>
            <HeaderSignedIn />
            <SecondaryHeader />


            <div className="Home">
                <div className="top-left-Profile">
                <button onClick={() => {router.push('/createEvent')}} className="justAbutton" style={{zIndex: 1000000, marginTop: 90}}> <span style={{marginLeft: 18}}>Create Event</span> </button>
                    {/* <img className="userImage" src={image1.src} /> */}
                    <eventsHeader />
                <Table.Root style={{zindex: -1, marginTop: "15%", width: 1100, marginLeft: 20}}>
                    <Table.Header>
                        <Table.Row>
                        <Table.ColumnHeaderCell><a>#</a></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell><a>Preview</a></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell><a>Name</a></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell><a>Date</a></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell style={{background:"#2e3136", color:"#999999", fontSize: 11}}><a>Venue</a></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell><a>Sold</a></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell><a>Available</a></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell><a>Status</a></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell><a>Actions</a></Table.ColumnHeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                        <Table.RowHeaderCell>1</Table.RowHeaderCell>
                        <Table.Cell>SHOW IMAGE</Table.Cell>
                        <Table.Cell>Chris Kareh</Table.Cell>
                        <Table.Cell>19/09/2000</Table.Cell>
                        <Table.Cell style={{background:"#25282d"}}>3ammo Plaza</Table.Cell>
                        <Table.Cell>26</Table.Cell>
                        <Table.Cell>12</Table.Cell>
                        <Table.Cell>Published</Table.Cell>
                        <Table.Cell>Edit</Table.Cell> 
                        </Table.Row>
{/* 
                        <Table.Row>
                        <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                        <Table.Cell>zahra@example.com</Table.Cell>
                        <Table.Cell>Admin</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                        <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                        <Table.Cell>jasper@example.com</Table.Cell>
                        <Table.Cell>Developer</Table.Cell>
                        </Table.Row> */}
                    </Table.Body>
                </Table.Root>
                    

                </div>



                <div className="top-right-profile" style={{flexDirection:"column"}}>
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
                </div>

            </div>






        </>
    )
}
export default myEvents