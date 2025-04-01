import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav-list bg-[#E8F0B8] flex items-center">
            <Link to="/">
                <img src="/img/lesCrudettesLogo.webp" className="site-title" alt="LesCrudettes" />
            </Link>
            <ul className="nav-list flex justify-evenly w-full text-2xl">
                <li>
                    <Link to="/">Acceuil</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link>
                </li>
                <li>
                    <Link to="/products">Produit</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
