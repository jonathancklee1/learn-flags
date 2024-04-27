import { Link, NavLink } from "react-router-dom";
import Xmark from "../assets/xmark.svg";

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`flex flex-col fixed md:hidden inset-0 gap-20 w-[100svw] h-[100svh] px-8 py-4 bg-secondary-color text-primary-color ${
                    !isOpen ? "translate-x-full" : "translate-x-0"
                } transition-all z-50`}
            >
                <div className="flex justify-between pb-10  border-primary-color">
                    <span className="font-bold text-3xl">FlagGuesser</span>
                    <button onClick={toggleMenu}>
                        <img
                            src={Xmark}
                            alt="hamburger menu"
                            className="size-4"
                        />
                    </button>
                </div>
                <nav className="">
                    {/* Links */}
                    <ul className="flex flex-col  text-2xl">
                        <li className="py-10 px-4 border-b-2 border-primary-color ">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                                onClick={toggleMenu}
                            >
                                Learn
                            </NavLink>
                        </li>
                        <li className="py-10 px-4 border-b-2 border-primary-color ">
                            <NavLink
                                to="/practice"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                                onClick={toggleMenu}
                            >
                                Practice
                            </NavLink>
                        </li>
                        <li className="py-10 px-4 border-b-2 border-primary-color ">
                            <NavLink
                                to="/quiz"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                                onClick={toggleMenu}
                            >
                                Quiz Me
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Menu;
