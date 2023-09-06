import HeaderSignedIn from "@/Components/HeaderSignedIn";
import image1 from '../public/image1.jpg'
import {useEffect, useState} from "react";
import HorizontalCaroussel from "@/Components/HorizontalCaroussel";
import imageByIndex from '../functions/imageByIndex'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {Thumb} from "@/Components/VerticalThumbSlider";

const userProfile = () => {
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




    useEffect(() => {
        console.log(image1.src)
    }, []);

    return (
    <>
        <HeaderSignedIn />
        <div className="secondary-et-hero-tabs-container">

            <a className="secondary-et-hero-tab" href="#tab-es6">My Panel</a>
            <a className="secondary-et-hero-tab" href="#tab-flexbox">My Profile</a>
            <a className="secondary-et-hero-tab" href="#tab-react">My Contacts</a>
            <a className="secondary-et-hero-tab" href="#tab-angular">My Notifications</a>
            <a className="secondary-et-hero-tab" href="#tab-other">My Invitations</a>
            <a className="secondary-et-hero-tab" href="#tab-other"> My Events</a>
            <a className="secondary-et-hero-tab" href="#tab-other"> LogOut</a>

        </div>




            <div className="Home">
                <div className="top-left">
                    <div className="third-et-hero-tabs-container">

                        <a className="third-et-hero-tab" href="#tab-es6">My Profile</a>
                        <a className="third-et-hero-tab" href="#tab-flexbox">My Supplier</a>
                        <a className="third-et-hero-tab" href="#tab-react">My Places</a>

                        <a className="third-et-hero-tab-edit"> Edit Profile </a>

                    </div>
                    <img className="userImage" src={image1.src} />
                </div>



                <div className="top-right" style={{flexDirection:"column"}}>
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
export default userProfile