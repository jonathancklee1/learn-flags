import avatar from "../assets/profile-picture.jpg";
const Footer = () => {
    return (
        <>
            <footer className="flex justify-center items-center gap-2 mx-auto px-12 py-8 bg-tertiary-color text-secondary-color">
                <p className="text-center">
                    A website made by&nbsp;
                    <a
                        href="https://github.com/jonathancklee1"
                        className="underline hover:text-primary-color"
                    >
                        Jonathan Lee
                    </a>
                </p>
                <div className="size-8 rounded-full overflow-hidden">
                    <img src={avatar} alt="profile picture" />
                </div>
            </footer>
        </>
    );
};

export default Footer;
