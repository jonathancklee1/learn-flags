import { Link } from "react-router-dom";
import Menu from "./Menu";
import Hamburger from "../assets/hamburger.svg";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenu() {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }
    return (
        <>
            <header className="flex justify-between px-8 py-4 sticky top-0 left-0 right-0 bg-primary-color text-white z-40">
                {/* Logo */}
                <div>IMG</div>
                <button onClick={toggleMenu} className="md:hidden">
                    <img
                        src={Hamburger}
                        alt="hamburger menu"
                        className="size-4"
                    />
                </button>
                <nav className="hidden md:block">
                    {/* Links */}

                    <ul className="gap-4 hidden xs:flex">
                        <Link to="/" className="cursor-pointer">
                            Learn
                        </Link>
                        <Link to="/practice" className="cursor-pointer">
                            Practice
                        </Link>
                        <Link to="/quiz" className="cursor-pointer">
                            Quiz Me
                        </Link>
                    </ul>
                </nav>
            </header>
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
    );
};

export default Navbar;
