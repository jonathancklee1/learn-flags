import { useFetch } from "../hooks/useFetch";

import Card from "./Card";
interface countryRes {
    flags: {
        png: string;
        alt: string;
    };
    name: {
        common: string;
    };
    capital: string;
    region: string;
    languages: string[];
    currencies: {
        name: string;
    };
}
const CardContainer = () => {
    const { apiResponse, isPending } = useFetch(
        "https://restcountries.com/v3.1/all"
    );
    return (
        <>
            <section className="px-8 py-16 bg-secondary-color text-primary-text">
                <div className="max-w-[1440px] mx-auto">
                    <h3 className="text-center text-2xl font-bold uppercase mb-10">
                        Learn flags and country names here
                    </h3>
                    <p className="text-center mb-16">
                        Hover to learn more about the country!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
                        {apiResponse &&
                            apiResponse.map(
                                (country: countryRes, index: number) => {
                                    return (
                                        <Card
                                            key={index}
                                            flag={country.flags}
                                            name={country.name}
                                            capital={country.capital}
                                            region={country.region}
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
        </>
    );
};

export default CardContainer;
