import { Link } from "react-router-dom";
import Xmark from "../assets/xmark.svg";

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`flex flex-col fixed md:hidden inset-0 gap-20 w-[100svw] h-[100svh] px-8 py-4 bg-white  ${
                    !isOpen ? "translate-x-full" : "translate-x-0"
                } transition-all z-50`}
            >
                <div className="flex justify-between pb-10 border-b-2 border-primary-color">
                    <div className="text-3xl">IMG</div>
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
                    <ul className="flex flex-col gap-12 text-xl underline">
                        <Link
                            to="/"
                            className="cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Learn
                        </Link>
                        <Link
                            to="/practice"
                            className="cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Practice
                        </Link>
                        <Link
                            to="/quiz"
                            className="cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Quiz Me
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Menu;
