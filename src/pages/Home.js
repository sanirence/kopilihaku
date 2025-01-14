import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faLocationDot, faMagnifyingGlass, faSliders } from "@fortawesome/free-solid-svg-icons"
import Nav from "../components/Nav"
import avatar from "../assets/avatar.svg"
import { Carousel } from "react-responsive-carousel"
import imgOffer1 from "../assets/offers1.svg"
import imgOffer2 from "../assets/offers2.svg"
import imgOffer3 from "../assets/offers3.svg"

const Home = () => {
    return (
        <div className="w-full min-h-screen relative">
            <div className="w-full pt-8 px-6 pb-4 bg-darkslategray rounded-b-[30px]">
                <div className="w-full flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <img className="w-[50px] aspect-square rounded-full" src={avatar} alt="" />
                        <div className="text-white">
                            <h3 className="text-lg font-bold">Hello, Henzie</h3>
                            <p className="text-sm">Your perfect cup is just a tap away!</p>
                        </div>
                    </div>
                    <div className="text-white text-2xl">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-gainsboro text-sm">Location</p>
                    <div className="flex items-center gap-1 text-sm text-white">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className="w-full h-[40px] mt-3 flex justify-between gap-2">
                    <div className="w-full px-4 flex items-center gap-2 group bg-white rounded-lg text-darkslategray">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="group-focus-within:hidden" />
                        <input type="text" placeholder="Search" className="outline-none border-none focus:w-full" />
                    </div>
                    <div className="h-full aspect-square grid place-items-center bg-white rounded-lg text-darkslategray">
                        <FontAwesomeIcon icon={faSliders} />
                    </div>
                </div>
            </div>

            <div className="w-full mt-4 px-6">
                <div className="w-full px-2 mb-1 flex justify-between items-end text-darkslategray">
                    <h4 className="text-lg font-bold">Special Offers</h4>
                    <p className="text-sm font-semibold">See all</p>
                </div>
                <Carousel className="w-full aspect-[2/1] overflow-hidden relative rounded-2xl" showArrows={false} autoPlay={true} infiniteLoop={true} interval={4000} showThumbs={false} showStatus={false}>
                    <div className="w-full rounded-2xl aspect-[2/1] bg-gradient-to-b from-burlywood to-darkslategray">
                        <div className="w-full h-full absolute z-0 flex justify-start">
                            <img src={imgOffer2} alt="" className="h-[100%] relative -left-[12%]" />
                        </div>
                        <div className="w-full h-full absolute z-0">
                            <img src={imgOffer1} alt="" className="h-[70%] relative top-[32%] right-[-6%]" />
                        </div>
                        <div className="w-full h-full absolute z-0">
                            <img src={imgOffer1} alt="" className="h-[70%] relative right-[-32%]" />
                        </div>
                        <div className="w-full h-full px-4 relative z-10 flex flex-col items-start justify-center">
                            <h5 className="text-white text-xl font-bold">Get special offer</h5>
                            <p className="text-white text-md font-semibold">Buy 1 get 1 for FREE</p>
                            <button className="px-4 h-[36px] mt-4 grid place-items-center bg-burlywood rounded-full text-white text-md font-semibold">Shop now</button>
                        </div>
                    </div>
                    <div className="w-full rounded-2xl aspect-[2/1] bg-gradient-to-b from-burlywood to-darkslategray">
                        <div className="w-full h-full absolute z-0 flex justify-start">
                            <img src={imgOffer2} alt="" className="h-[100%] relative -left-[12%]" />
                        </div>
                        <div className="w-full h-full absolute z-0">
                            <img src={imgOffer3} alt="" className="h-[100%] relative right-[-25%]" />
                        </div>
                        <div className="w-full h-full px-4 relative z-10 flex flex-col items-start justify-center">
                            <h5 className="text-white text-xl font-bold"><span className="text-darkslategray text-3xl">20%</span> Discount</h5>
                            <p className="text-white text-md font-semibold">in 3 orders in a item</p>
                            <button className="px-4 h-[36px] mt-4 grid place-items-center bg-burlywood rounded-full text-white text-md font-semibold">Shop now</button>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className="w-full mt-4 px-6">
                <div className="w-full px-2 mb-1 text-darkslategray">
                    <h4 className="text-lg font-bold">Categories</h4>
                </div>
                <div className="w-full overflow-x-scroll flex gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-[72px] aspect-square bg-darkslategray rounded-lg">
                            <img src="" alt="" />
                        </div>
                        <p className="text-darkslategray text-center text-xs font-semibold">Espresso based</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-[72px] aspect-square bg-darkslategray rounded-lg">
                            <img src="" alt="" />
                        </div>
                        <p className="text-darkslategray text-center text-xs font-semibold">Non-coffee</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-[72px] aspect-square bg-darkslategray rounded-lg">
                            <img src="" alt="" />
                        </div>
                        <p className="text-darkslategray text-center text-xs font-semibold">Cold drinks</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-[72px] aspect-square bg-darkslategray rounded-lg">
                            <img src="" alt="" />
                        </div>
                        <p className="text-darkslategray text-center text-xs font-semibold">Manual brew</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-[72px] aspect-square bg-darkslategray rounded-lg">
                            <img src="" alt="" />
                        </div>
                        <p className="text-darkslategray text-center text-xs font-semibold">Traditional coffee</p>
                    </div>
                </div>
            </div>

            <Nav />
        </div>
    )
}

export default Home