import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faLocationDot, faMagnifyingGlass, faSliders, faPlus } from "@fortawesome/free-solid-svg-icons"
import Nav from "../components/Nav"
import avatar from "../assets/avatar.png"
import { Carousel } from "react-responsive-carousel"
import imgOfferBg from "../assets/offer1.png"
import imgOffer1 from "../assets/offer-1-1.png"
import imgOffer2 from "../assets/offer-1-2.png"
import imgOffer3 from "../assets/offer-2-1.png"
import iconCat1 from "../assets/icon-espresso-based.png"
import iconCat2 from "../assets/icon-non-coffee.png"
import iconCat3 from "../assets/icon-cold-drinks.png"
import iconCat4 from "../assets/icon-manual-brew.png"
import iconCat5 from "../assets/icon-traditional-coffee.png"
import suggest1 from "../assets/suggest-latte-milk-choco.png"
import suggest2 from "../assets/suggest-macchiato-milk-caramel.png"
import suggest3 from "../assets/suggest-latte-choco.png"
import suggest4 from "../assets/suggest-cappuccino-choco.png"

const Home = () => {
    return (
        <div className="w-full h-svh overflow-hidden bg-white relative">
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

            <div className="w-full h-[calc(100svh-266px)] pb-6 overflow-y-scroll absolute top-[202px]">
                <div className="w-full mt-4 px-6">
                    <div className="w-full px-2 mb-1 flex justify-between items-end text-darkslategray">
                        <h4 className="text-lg font-bold">Special Offers</h4>
                        <p className="text-sm font-semibold">See all</p>
                    </div>
                    <Carousel className="w-full aspect-[2/1] overflow-hidden relative rounded-2xl" showArrows={false} autoPlay={true} infiniteLoop={true} interval={4000} showThumbs={false} showStatus={false}>
                        <div className="w-full aspect-[2/1] bg-gradient-to-b from-burlywood to-darkslategray">
                            <div className="w-full h-full absolute z-0 flex justify-start">
                                <img src={imgOfferBg} alt="" className="h-[100%] relative -left-[12%]" />
                            </div>
                            <div className="w-full h-full absolute z-0">
                                <img src={imgOffer1} alt="" className="h-[70%] relative top-[32%] right-[-6%] object-contain" />
                            </div>
                            <div className="w-full h-full absolute z-0">
                                <img src={imgOffer2} alt="" className="h-[70%] relative right-[-32%] object-contain" />
                            </div>
                            <div className="w-full h-full px-4 relative z-10 flex flex-col items-start justify-center">
                                <h5 className="text-white text-xl font-bold">Get special offer</h5>
                                <p className="text-white text-md font-semibold">Buy 1 get 1 for FREE</p>
                                <button className="px-4 h-[36px] mt-4 grid place-items-center bg-burlywood rounded-full text-white text-md font-semibold">Shop now</button>
                            </div>
                        </div>
                        <div className="w-full aspect-[2/1] bg-gradient-to-b from-burlywood to-darkslategray">
                            <div className="w-full h-full absolute z-0 flex justify-start">
                                <img src={imgOfferBg} alt="" className="h-[100%] relative -left-[12%]" />
                            </div>
                            <div className="w-full h-full absolute z-0">
                                <img src={imgOffer3} alt="" className="h-[100%] relative right-[-25%] object-contain" />
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
                    <div className="w-full overflow-x-scroll no-scrollbar flex gap-4">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[72px] aspect-square grid place-items-center bg-darkslategray rounded-lg">
                                <img src={iconCat1} alt="espresso-based" className="h-[50%]" />
                            </div>
                            <p className="text-darkslategray text-center text-xs font-semibold">Espresso based</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[72px] aspect-square grid place-items-center bg-darkslategray rounded-lg">
                                <img src={iconCat2} alt="non-coffee" className="h-[50%]" />
                            </div>
                            <p className="text-darkslategray text-center text-xs font-semibold">Non-coffee</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[72px] aspect-square grid place-items-center bg-darkslategray rounded-lg">
                                <img src={iconCat3} alt="cold-drink" className="h-[50%]" />
                            </div>
                            <p className="text-darkslategray text-center text-xs font-semibold">Cold drinks</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[72px] aspect-square grid place-items-center bg-darkslategray rounded-lg">
                                <img src={iconCat4} alt="manual-brew" className="h-[50%]" />
                            </div>
                            <p className="text-darkslategray text-center text-xs font-semibold">Manual brew</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[72px] aspect-square grid place-items-center bg-darkslategray rounded-lg">
                                <img src={iconCat5} alt="traditional-coffe" className="h-[50%]" />
                            </div>
                            <p className="text-darkslategray text-center text-xs font-semibold">Traditional coffee</p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-4 px-6">
                    <div className="w-full px-2 mb-1 flex justify-between items-end text-darkslategray">
                        <h4 className="text-lg font-bold">Suggested For You</h4>
                        <p className="text-sm font-semibold">See all</p>
                    </div>
                    <div className="w-full overflow-x-scroll no-scrollbar flex">
                        <div className="w-auto flex gap-4">
                            <div className="w-[200px] h-[260px] p-3 relative flex flex-col bg-gainsboro rounded-lg text-black">
                                <div className="w-full grid place-items-center">
                                    <img src={suggest1} alt="espresso-based" className="w-[80%] aspect-square" />
                                </div>
                                <p className="mt-2 text-lg font-semibold">Latte</p>
                                <p className="text-xs">with milk and chocolate</p>
                                <div className="w-full px-3 absolute left-0 bottom-3 flex items-center justify-between">
                                    <p className="text-sm font-bold">Rp 37.500,00</p>
                                    <FontAwesomeIcon icon={faPlus} className="p-2 rounded-full bg-darkslategray text-white" />
                                </div>
                            </div>
                            <div className="w-[200px] h-[260px] p-3 relative flex flex-col bg-gainsboro rounded-lg text-black">
                                <div className="w-full grid place-items-center">
                                    <img src={suggest2} alt="espresso-based" className="w-[80%] aspect-square" />
                                </div>
                                <p className="mt-2 text-lg font-semibold">Macchiato</p>
                                <p className="text-xs">with milk and caramel</p>
                                <div className="w-full px-3 absolute left-0 bottom-3 flex items-center justify-between">
                                    <p className="text-sm font-bold">Rp 38.000,00</p>
                                    <FontAwesomeIcon icon={faPlus} className="p-2 rounded-full bg-darkslategray text-white" />
                                </div>
                            </div>
                            <div className="w-[200px] h-[260px] p-3 relative flex flex-col bg-gainsboro rounded-lg text-black">
                                <div className="w-full grid place-items-center">
                                    <img src={suggest3} alt="espresso-based" className="w-[80%] aspect-square" />
                                </div>
                                <p className="mt-2 text-lg font-semibold">Latte</p>
                                <p className="text-xs">with chocolate</p>
                                <div className="w-full px-3 absolute left-0 bottom-3 flex items-center justify-between">
                                    <p className="text-sm font-bold">Rp 28.000,00</p>
                                    <FontAwesomeIcon icon={faPlus} className="p-2 rounded-full bg-darkslategray text-white" />
                                </div>
                            </div>
                            <div className="w-[200px] h-[260px] p-3 relative flex flex-col bg-gainsboro rounded-lg text-black">
                                <div className="w-full grid place-items-center">
                                    <img src={suggest4} alt="espresso-based" className="w-[80%] aspect-square" />
                                </div>
                                <p className="mt-2 text-lg font-semibold">Cappuccino</p>
                                <p className="text-xs">with chocolate</p>
                                <div className="w-full px-3 absolute left-0 bottom-3 flex items-center justify-between">
                                    <p className="text-sm font-bold">Rp 26.000,00</p>
                                    <FontAwesomeIcon icon={faPlus} className="p-2 rounded-full bg-darkslategray text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Nav />
        </div>
    )
}

export default Home