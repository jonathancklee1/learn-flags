import { Link, NavLink } from "react-router-dom";
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
            <header className=" px-8 py-4 sticky top-0 left-0 right-0 bg-primary-color text-white z-40">
                <div className="flex justify-between w-full max-w-[1440px] mx-auto">
                    {/* Logo */}
                    <span className="font-bold text-3xl">FlagGuesser</span>
                    <button onClick={toggleMenu} className="md:hidden">
                        <img
                            src={Hamburger}
                            alt="hamburger menu"
                            className="size-4"
                        />
                    </button>
                    <nav className="hidden md:block">
                        {/* Links */}

                        <ul className="gap-8 hidden md:flex">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                            >
                                Learn
                            </NavLink>
                            <NavLink
                                to="/practice"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                            >
                                Practice
                            </NavLink>
                            <NavLink
                                to="/quiz"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                            >
                                Quiz Me
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </header>
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
    );
};

export default Navbar;
