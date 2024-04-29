import { TailSpin } from "react-loader-spinner";
import { useFetch } from "../hooks/useFetch";

import Card from "./Card";
import { useState } from "react";
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
    currencies: {
        name: string;
    };
}
const CardContainer = (filters) => {
    // const [countriesList, setCountriesList] = useState([]);

    const { apiResponse, isPending } = useFetch(
        "https://restcountries.com/v3.1/all"
    );
    // if (apiResponse) {
    //     setCountriesList(apiResponse);
    // }
    return (
        <>
            {isPending && (
                <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="var(--primary-color)"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass="flex items-center justify-center w-full h-full mx-auto bg-secondary-color py-10"
                />
            )}
            {!isPending && (
                <section className="px-8 py-16 bg-secondary-color text-primary-text">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
                            {apiResponse &&
                                apiResponse.map(
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
                                                    Object.keys(
                                                        country.languages
                                                    ).map((key: string) => [
                                                        country.languages[key],
                                                    ])
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
                    </div>
                </section>
            )}
        </>
    );
};

export default CardContainer;
