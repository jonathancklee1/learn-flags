const HeroBanner = () => {
    return (
        <>
            <div className="flex h-[calc(100vh-56px)] px-8 py-4 bg-primary-color text-secondary-color">
                <div className="mt-10 max-w-[1440px] mx-auto">
                    <h1 className="font-bold text-2xl md:text-5xl w-3/4 mb-10 uppercase">
                        Know your countries
                    </h1>
                    <h2 className="md:text-2xl md:w-2/3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Praesentium atque at harum soluta sequi animi
                        consequatur placeat corporis natus culpa dolorem quas
                        dolore sed quo expedit
                    </h2>
                </div>
            </div>
            <div className="wave">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
        </>
    );
};

export default HeroBanner;
