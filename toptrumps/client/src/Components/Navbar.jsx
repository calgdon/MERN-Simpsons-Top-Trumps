import { Link } from "react-router-dom";
import "../css/Master.css"

const NavBar = () => {

    return (
        <ul className="navbar">
                <Link className="general-button" to="/">Home</Link>
                <Link className="general-button" to="/play">Play</Link>
                <Link className="general-button" to="/cards">Cards</Link>
                <Link className="general-button"  to="/rules">Rules</Link>
        </ul>
    )

}

export default NavBar;