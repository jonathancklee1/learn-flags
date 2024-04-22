import { useEffect, useState } from "react";
import Card from "./Card";
interface countryRes {
    flags: {
        png: string;
        alt: string;
    };
    name: {
        common: string;
    };
}
const CardContainer = () => {
    const [apiResponse, setApiResponse] = useState([]);
    useEffect(() => {
        async function getCountries() {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const body = await response.json();
            console.log(body);
            setApiResponse(body);
        }
        getCountries();
    }, []);

    return (
        <>
            <section className="px-8 py-16 bg-secondary-color text-primary-text">
                <h3 className="text-center text-2xl font-bold uppercase mb-10">
                    Learn flags and country names here
                </h3>
                <p className="text-center mb-16">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore pariatur perferendis iure sit fugit cumque!
                </p>
                <div className="grid grid-cols-1 gap-8">
                    {apiResponse &&
                        apiResponse.map((country: countryRes) => {
                            return (
                                <Card
                                    flag={country.flags}
                                    name={country.name}
                                />
                            );
                        })}
                </div>
            </section>
        </>
    );
};

export default CardContainer;
