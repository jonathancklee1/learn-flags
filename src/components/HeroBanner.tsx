import Wave from "./Wave";

const HeroBanner = () => {
    return (
        <>
            <div className="flex min-h-[calc(100vh-var(--header-height))] px-8 py-4 bg-primary-color text-secondary-color">
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
            <Wave />
        </>
    );
};

export default HeroBanner;
