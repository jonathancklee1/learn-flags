import { useRef } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

interface FiltersProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    setRegionFilter: (value: string) => void;
    regionFilter: string;
}

const Filters = ({
    searchInput,
    setSearchInput,
    setRegionFilter,
    regionFilter,
}: FiltersProps) => {
    const options = [
        "Africa",
        "Asia",
        "Americas",
        "North America",
        "South America",
        "Antarctic",
        "Europe",
        "Oceania",
    ];
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    const inputRef = useRef<HTMLInputElement>(null);
    function onSelect(value: string) {
        if (inputRef && inputRef.current) {
            inputRef.current.value = "";
        }
        setRegionFilter(value);
        setSearchInput("");
    }
    function clearFilters() {
        setRegionFilter("");
        setSearchInput("");
    }
    return (
        <>
            <form
                className=" w-full px-8 md:px-16 pt-12 bg-secondary-color mx-auto"
                onSubmit={submitHandler}
            >
                <div className=" flex flex-col md:flex-row md:justify-between items-start gap-4 max-w-[1440px] mx-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        className="py-3 px-5 border border-primary-color rounded-lg w-full md:basis-1/3"
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                        ref={inputRef}
                    />
                    <div className="md:basis-1/3 inline-flex flex-col items-end w-full">
                        <Dropdown
                            options={options}
                            onChange={(e) => onSelect(e.value)}
                            value={
                                regionFilter ? regionFilter : "Select Region"
                            }
                            placeholder="Select an option"
                            className="w-full mb-2"
                        />
                        <button
                            className="p-3 border border-primary-color rounded-lg max-w-fit bg-primary-color text-white text-sm font-semibold transition-all duration-500  hover:bg-white focus:bg-white hover:text-black focus:text-black"
                            onClick={clearFilters}
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Filters;
