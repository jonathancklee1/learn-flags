interface CountryCard {
    flag: {
        png: string;
        alt: string;
    };
    name: {
        common: string;
    };
    capital: string;
    currency: string;
    languages: string[];
    region: string;
}
const Card = ({
    flag,
    name,
    capital,
    currency,
    languages,
    region,
}: CountryCard) => {
    return (
        <>
            <div className="card-container ">
                <div className="card relative p-4 rounded-xl  bg-gradient-to-br from-tertiary-color to-primary-color h-[500px] md:h-[400px] text-secondary-color shadow-lg transition-all duration-[1200ms]">
                    <div className="card-front absolute inset-0 grid place-items-center gap-4 p-8">
                        <img
                            src={flag.png}
                            alt={flag.alt}
                            className=" max-h-[130px]"
                        />
                        <p className="text-3xl font-bold text-center">
                            {name.common}
                        </p>
                    </div>
                    <div className="card-back absolute inset-0 text-gray text-lg font-medium  flex flex-col overflow-hidden rounded-xl">
                        <div className="flex  p-8 gap-3 items-center">
                            <img
                                src={flag.png}
                                alt={flag.alt}
                                className="w-1/3"
                            />
                            <p className="text-2xl font-bold w-2/3">
                                {name.common}
                            </p>
                        </div>
                        <div className="info-container  bg-tertiary-color grow  text-white px-10 py-6  rounded-xl">
                            <ul className="flex flex-col gap-3 list-disc">
                                <li>
                                    <p className="text-secondary-color">
                                        Continent:{" "}
                                        <span className="font-bold text-white">
                                            {region}
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-secondary-color">
                                        Capital city:{" "}
                                        <span className="font-bold text-white">
                                            {capital}
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-secondary-color">
                                        Languages:{" "}
                                        <span className="font-bold text-white">
                                            {" "}
                                            {languages && languages.join(", ")}
                                        </span>
                                    </p>
                                </li>

                                <li>
                                    <p className="text-secondary-color">
                                        Currency used:
                                        <span className="font-bold text-white">
                                            {" "}
                                            {currency}
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
