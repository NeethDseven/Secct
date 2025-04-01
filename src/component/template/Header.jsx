import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div>
            <nav className="nav-list bg-[#E8F0B8] flex flex-col md:flex-row items-center">
                <Link to="/" className="mb-4 md:mb-0">
                    <img src="/img/lesCrudettesLogo.webp" className="site-title" alt="LesCrudettes" />
                </Link>
                <ul className="nav-list flex flex-col md:flex-row justify-evenly w-full text-2xl">
                    <li className="mb-2 md:mb-0">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="mb-2 md:mb-0">
                        <Link to="/about">A propos</Link>
                    </li>
                    <li
                        className="relative mb-2 md:mb-0"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="focus:outline-none flex items-center w-full justify-between">
                            Produits
                            <IoIosArrowDown className="ml-auto" />
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute bg-white shadow-md w-full top-full left-0">
                                <li>
                                    <Link to="/salade" className="block px-4 py-2 bg-[#E8F0B8] text-lg">Salade et Crudité</Link>
                                </li>
                                <li>
                                    <Link to="/vegetable" className="block px-4 py-2 bg-[#E8F0B8] text-lg">Légumes</Link>
                                </li>
                                <li>
                                    <Link to="/other" className="block px-4 py-2 bg-[#E8F0B8] text-lg">Herbes et autres</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;