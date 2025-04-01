import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

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
                    <li
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="focus:outline-none flex items-center">
                            <IoIosArrowDown className="mr-2" />
                            Produits
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute bg-white shadow-md mt-2">
                                <li>
                                    <Link to="/salade" className="block px-4 py-2 bg-[#E8F0B8] text-lg min-w-[200px]">Salade et Crudité</Link>
                                </li>
                                <li>
                                    <Link to="/vegetable" className="block px-4 py-2 bg-[#E8F0B8] text-lg min-w-[200px]">Légumes</Link>
                                </li>
                                <li>
                                    <Link to="/other" className="block px-4 py-2 bg-[#E8F0B8] text-lg min-w-[200px]">Herbes et autres</Link>
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