import { useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import Filters from "../../components/Filters";
import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";

const LandingPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [regionFilter, setRegionFilter] = useState("");

    useEffect(() => {
        // Adds delay to search input so it doesn't fire on every keystroke
        const timeOutId = setTimeout(() => setSearchQuery(searchInput), 500);
        return () => clearTimeout(timeOutId);
    }, [searchInput]);

    return (
        <>
            <HeroBanner />
            <div className="px-8 md:px-16 pt-16 pb-6  bg-secondary-color text-primary-text">
                <h3 className="text-center text-xl md:text-3xl font-bold uppercase mb-10">
                    Learn flags and country names here
                </h3>
                <p className="text-center md:text-lg">
                    Hover to flip the card and learn more about the country!
                </p>
            </div>
            <Filters
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setRegionFilter={setRegionFilter}
                regionFilter={regionFilter}
            />
            <CardContainer
                searchQuery={searchQuery}
                regionFilter={regionFilter}
            />
            <Footer />
        </>
    );
};

export default LandingPage;
