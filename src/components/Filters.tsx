import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";

const Filters = ({ searchInput, setSearchInput }) => {
    const options = [
        "Asia",
        "Africa",
        "Europe",
        "Oceania",
        "Americas",
        "Antarctics",
    ];
    const defaultOption = options[0];

    return (
        <>
            <form className="flex flex-col md:flex-row gap-4 w-full px-8 pt-12 bg-secondary-color">
                <input
                    type="text"
                    placeholder="Search"
                    className=" py-3 px-5 border border-primary-color rounded-lg"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <Dropdown
                    options={options}
                    // onChange={onSelect}
                    value={defaultOption}
                    placeholder="Select an option"
                    className="py-3 px-5 border border-primary-color rounded-lg"
                />
            </form>
        </>
    );
};

export default Filters;
