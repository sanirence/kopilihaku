import { useState } from "react"
import { Link } from "react-router-dom"
import bg from "../assets/bg-sign-in-up.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons"

const SignIn = () => {
    const [isOn, setIsOn] = useState(false)

    const handleToggle = () => {
        setIsOn((prevState) => !prevState);
    }

    return (
        <div className="w-full h-screen overflow-hidden flex flex-col items-center bg-darkslategray">
            <img src={bg} alt="kopilihaku" className="w-full mt-4" />
            <div className="w-full max-w-[450px] h-auto min-h-[70%] absolute left-0 bottom-0 flex flex-col justify-between bg-white rounded-t-[40px] ml-[50%] -translate-x-[50%]">
                <div className="w-full flex flex-col justify-center">
                    <div className="w-full py-8 text-center text-darkslategray">
                        <h2 className="text-4xl font-bold">Log In</h2>
                        <p className="mt-2 text-md font-semibold tracking-wider">Please sign in to continue</p>
                    </div>
                    <div className="px-12 flex flex-col">
                        <div className="w-full h-16 px-8 flex items-center justify-between gap-4 bg-gainsboro rounded-[20px] group">
                            <FontAwesomeIcon icon={faUser} className="group-focus-within:hidden" />
                            <input type="text" placeholder="Username" className="w-full h-full bg-transparent outline-none border-none focus:w-full" />
                        </div>
                        <div className="w-full mt-4 h-16 px-8 flex items-center justify-between gap-4 bg-gainsboro rounded-[20px] group">
                            <FontAwesomeIcon icon={faLock} className="group-focus-within:hidden" />
                            <input type="password" placeholder="Password" className="w-full h-full bg-transparent outline-none border-none focus:w-full" />
                        </div>
                        <div onClick={handleToggle} className="w-full mt-2 px-4 flex items-center justify-between">
                            <p>Reminder me realtime</p>
                            <FontAwesomeIcon icon={isOn ? faToggleOn : faToggleOff} />
                        </div>
                    </div>
                </div>
                <div className="px-12 pt-8 pb-12">
                    <Link to="/home" className="w-full h-12 grid place-items-center bg-darkslategray rounded-full text-white font-semibold">Sign in</Link>
                    <p className="mt-2 text-center text-md text-gray-400">Don't have account? <Link to="/signup" className="text-darkslategray font-semibold">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn