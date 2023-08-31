import HanapBuhayLogo from "../assets/images/logo.png"
import "../assets/styles/index.css"

export default function logo(){
    return(
        <img
            alt = "Hanap Buhay Logo"
            className="mr-3 h-10 sm:h-14"
            src = {HanapBuhayLogo}
        />
    )
}