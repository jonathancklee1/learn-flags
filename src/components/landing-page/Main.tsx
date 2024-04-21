import Card from "../Card";

const Main = () => {
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
                    <Card />
                </div>
            </section>
        </>
    );
};

export default Main;
