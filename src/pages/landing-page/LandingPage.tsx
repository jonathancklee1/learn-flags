import { useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import Filters from "../../components/Filters";
import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";

const LandingPage = () => {
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        console.log(searchInput);
    }, [searchInput]);
    return (
        <>
            <HeroBanner />
            <div className="px-8 pt-16 pb-6  bg-secondary-color text-primary-text">
                <h3 className="text-center text-2xl font-bold uppercase mb-10">
                    Learn flags and country names here
                </h3>
                <p className="text-center">
                    Hover to learn more about the country!
                </p>
            </div>
            <Filters
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <CardContainer />
            <Footer />
        </>
    );
};

export default LandingPage;
