import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav-list">
            <Link to="/">
                <img src="/img/lesCrudettesLogo.webp" className="site-title" alt="LesCrudettes" />
            </Link>
        </nav>
    );
}

export default Header;