import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faHeart, faCartShopping, faComment, faUser } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
    return (
        <div className="w-screen max-w-[450px] h-16 px-4 absolute left-0 bottom-0 grid grid-cols-5 bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.4)]">
            <div className="grid place-items-center text-gainsboro text-xl">
                <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className="grid place-items-center text-gainsboro text-xl">
                <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="grid place-items-center text-gainsboro text-xl">
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className="grid place-items-center text-gainsboro text-xl">
                <FontAwesomeIcon icon={faComment} />
            </div>
            <div className="grid place-items-center text-gainsboro text-xl">
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    )
}

export default Nav