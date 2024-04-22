interface CountryCard {
    flag: {
        png: string;
        alt: string;
    };
    name: {
        common: string;
    };
}
const Card = ({ flag, name }: CountryCard) => {
    return (
        <>
            <div className="grid place-items-center gap-4 p-4 rounded-xl bg-tertiary-color min-h-40 text-secondary-color">
                <img src={flag.png} alt={flag.alt} className="w-1/2" />
                <p className="text-xl font-medium text-center">{name.common}</p>
            </div>
        </>
    );
};

export default Card;
