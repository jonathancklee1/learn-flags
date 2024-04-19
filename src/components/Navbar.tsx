const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between px-8 py-4 sticky top-0 left-0 right-0 bg-blue-800 text-white">
                {/* Logo */}
                <div>IMG</div>
                {/* Links */}
                <div className="">
                    <ul className="flex gap-4">
                        <li className="cursor-pointer">Learn</li>
                        <li className="cursor-pointer">Quiz Me</li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
