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
                        <div className="info-container flex flex-col gap-3 bg-tertiary-color grow  text-white p-8  rounded-xl">
                            <p className="">Continent: {region}</p>
                            <p className="">Capital city: {capital}</p>
                            <p className="">
                                Languages: {languages && languages.join(", ")}
                            </p>
                            <p className="">Currency used: {currency}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
