import { Link } from "react-router-dom";
import "../css/Navbar.css"

const NavBar = () => {

    return (
        <ul className="navbar">
            <li className="nav-link">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
                <Link to="/play">Play</Link>
            </li>
            <li className="nav-link">
                <Link to="/cards">Cards</Link>
            </li>
            <li className="nav-link">
                <Link to="/rules">Rules</Link>
            </li>
        </ul>
    )

}

export default NavBar;