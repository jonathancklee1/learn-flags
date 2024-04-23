import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header className="flex justify-between px-8 py-4 sticky top-0 left-0 right-0 bg-primary-color text-white z-50">
                {/* Logo */}
                <div>IMG</div>
                <nav className="">
                    {/* Links */}
                    <div className="">
                        <ul className="flex gap-4">
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
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
