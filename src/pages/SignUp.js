import { useState } from "react"
import bg from "../assets/image7.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faPhone, faLock, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons"

const SignUp = () => {
    const [isOn, setIsOn] = useState(false)

    const handleToggle = () => {
        setIsOn((prevState) => !prevState);
    }

    return (
        <div className="w-full h-screen overflow-hidden flex flex-col items-center bg-darkslategray">
            <img src={bg} className="w-full mt-4" />
            <div className="w-full h-auto min-h-[70%] absolute left-0 bottom-0 flex flex-col justify-between bg-white rounded-t-[40px]">
                <div className="w-full flex flex-col justify-center">
                    <div className="w-full py-8 text-center text-darkslategray">
                        <h2 className="text-4xl font-bold">Register</h2>
                        <p className="mt-2 text-md font-semibold tracking-wider">Please register to login</p>
                    </div>
                    <div className="px-12 flex flex-col">
                        <div className="w-full h-16 px-8 flex items-center justify-between bg-gainsboro rounded-[20px]">
                            <FontAwesomeIcon icon={faUser} />
                            <input type="text" placeholder="Username" className="h-full bg-transparent outline-none border-none" />
                        </div>
                        <div className="w-full h-16 mt-4 px-8 flex items-center justify-between bg-gainsboro rounded-[20px]">
                            <FontAwesomeIcon icon={faPhone} />
                            <input type="number" placeholder="Mobile Number" className="h-full bg-transparent outline-none border-none" />
                        </div>
                        <div className="w-full mt-4 h-16 px-8 flex items-center justify-between bg-gainsboro rounded-[20px]">
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" placeholder="Password" className="h-full bg-transparent outline-none border-none" />
                        </div>
                        <div onClick={handleToggle} className="w-full mt-2 px-4 flex items-center justify-between">
                            <p>Reminder me realtime</p>
                            <FontAwesomeIcon icon={isOn ? faToggleOn : faToggleOff} />
                        </div>
                    </div>
                </div>
                <div className="px-12 pt-8 pb-12">
                    <a href="/signup" className="w-full h-12 grid place-items-center bg-darkslategray rounded-full text-white font-semibold">Sign up</a>
                    <p className="mt-2 text-center text-md text-gray-400">Already have account? <a href="/signin" className="text-darkslategray font-semibold">Sign In</a></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp