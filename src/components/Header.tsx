import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header () {
    return(
        <header className="w-full flex items-center justify-center py-5 bg-gray-700 border-b border-gray-600">
            <Link to="/">
                <Logo/>
            </Link>
        </header>
    )
}
