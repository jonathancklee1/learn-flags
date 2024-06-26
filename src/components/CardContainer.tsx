import { useFetch } from "../hooks/useFetch";

import Card from "./Card";
import { useEffect, useState } from "react";
interface countryRes {
    flags: {
        png: string;
        alt: string;
    };
    name: {
        common: string;
    };
    capital: string;
    continents: string[];
    languages: string[];
    currencies: [
        {
            name: string;
        }
    ];
}
interface CardContainerProps {
    searchQuery: string;
    regionFilter: string;
}

const CardContainer = ({ searchQuery, regionFilter }: CardContainerProps) => {
    const displayCardsCount = 24;
    const [restructuredArray, setRestructuredArray] = useState([[]]);
    const [restructuredArrayDisplay, setRestructuredArrayDisplay] = useState(
        []
    );
    const [paginationCount, setPaginationCount] = useState(1);
    const endpoint =
        searchQuery !== ""
            ? `name/${searchQuery}`
            : regionFilter
            ? `region/${regionFilter}`
            : "all";
    const { apiResponse, errorMessage } = useFetch(
        `https://restcountries.com/v3.1/${endpoint}`
    );
    function restructureArray(array: [], displayCount: number) {
        const restructuredArray = [];
        while (array.length > 0) {
            const chunk = array.splice(0, displayCount);
            restructuredArray.push(chunk);
        }
        return restructuredArray;
    }
    function loadMore() {
        setPaginationCount((prevCount) => prevCount + 1);
        setRestructuredArrayDisplay([
            ...restructuredArrayDisplay,
            ...restructuredArray[paginationCount],
        ]);
    }

    useEffect(() => {
        if (apiResponse) {
            const restructuredArray = restructureArray(
                apiResponse,
                displayCardsCount
            );
            setRestructuredArray(restructuredArray);
            setRestructuredArrayDisplay(restructuredArray[0]);
            console.log(restructuredArray);
        }
        return () => {
            restructureArray;
        };
    }, [apiResponse]);

    return (
        <>
            <section className="px-8 md:px-16 py-16 bg-secondary-color text-primary-text transition-all">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {restructuredArrayDisplay &&
                            !errorMessage &&
                            restructuredArrayDisplay.map(
                                (country: countryRes, index: number) => {
                                    return (
                                        <Card
                                            key={index}
                                            flag={country.flags}
                                            name={country.name}
                                            capital={country.capital}
                                            region={country.continents[0]}
                                            languages={
                                                country.languages &&
                                                (Object.values(
                                                    country.languages
                                                ) as string[])
                                            }
                                            currency={
                                                country.currencies &&
                                                Object.values(
                                                    country.currencies
                                                )[0].name
                                            }
                                        />
                                    );
                                }
                            )}
                    </div>
                    {!errorMessage &&
                        restructuredArray.length > paginationCount && (
                            <button
                                className="font-semibold text-md text-center underline text-primary-color mx-auto w-full mt-10 hover:text-tertiary-color"
                                onClick={loadMore}
                            >
                                Load More
                            </button>
                        )}
                    {errorMessage && (
                        <p className="font-bold text-2xl text-center">
                            {errorMessage}
                        </p>
                    )}
                </div>
            </section>
        </>
    );
};

export default CardContainer;
