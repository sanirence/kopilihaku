import { useState } from "react"
import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import image1 from "../assets/getstarted1.png"
import image2 from "../assets/getstarted2.png"
import GetStartedImagesCarousel from "../assets/StartPageCarouselImage"

const GetStarted = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleToggle = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="w-full h-screen px-12 py-20 overflow-hidden relative flex flex-col items-center justify-between bg-darkslategray font-poppins">
            <div className="flex flex-col items-center">
                <div className="w-full relative">
                    <img src={image1} alt="kopilihaku" className="relative left-3" />
                    <img src={image2} alt="kopilihaku" className="absolute -left-12 -bottom-10" />
                </div>
                <h1 className="font-bold text-4xl text-white tracking-wide">KOPILIHAKU</h1>
                <p className="pt-2 text-md text-center text-burlywood">Enjoy your choice of coffee <br/> from app to cup</p>
            </div>
            <button onClick={handleToggle} className="w-full h-16 mt-20 text-darkslategray bg-burlywood rounded-full font-semibold text-2xl">Let's Get Started</button>

            <div className={`w-full h-screen px-12 py-20 absolute top-0 left-0 z-50 bg-darkslategray flex flex-col items-center justify-between ${isVisible ? "translate-y-0" : "translate-y-full"} transition-all duration-1000 ease-in-out`}>
                <div className="w-full px-12 mt-10 absolute top-0 left-0">
                    <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={4000} showThumbs={false} showStatus={false}>
                        {
                            GetStartedImagesCarousel.map((img) => (
                                <div key={img.id}>
                                    <img src={img.src} alt={img.alt} className="pb-2" />
                                </div>
                            ))
                        }
                    </Carousel>
                    <h2 className="mt-4 font-semibold text-2xl text-center text-burlywood">Get the best coffee <br/> in town!</h2>
                </div>
                <div className="w-full px-12 mb-16 absolute bottom-0 flex flex-col gap-4">
                    <div className="w-full grid grid-cols-2 gap-2">
                        <Link to="/signup" className="w-full h-11 grid place-items-center font-semibold text-sm bg-burlywood rounded-full">Register</Link>
                        <Link to="/signin" className="w-full h-11 grid place-items-center font-semibold text-sm bg-white rounded-full">Log In</Link>
                    </div>
                    <button className="w-full h-11 flex items-center justify-center gap-2 font-semibold text-sm text-darkslategray bg-white rounded-full">
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                        Connect with Facebook
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted