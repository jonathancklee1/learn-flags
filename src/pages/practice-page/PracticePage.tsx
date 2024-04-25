import OptionsQuizContainer from "../../components/OptionsQuizContainer";
import { useFetch } from "../../hooks/useFetch";

const PracticePage = () => {
    const { apiResponse } = useFetch("https://restcountries.com/v3.1/all");

    return (
        <>
            <div className="grid place-content-center min-h-[calc(100vh-56px)] text-center max-w-[1440px] mx-auto text-primary-text px-8 py-4 ">
                <h1 className="text-2xl font-bold mb-5">Practice here!</h1>
                <h2 className="text-lg mb-10">
                    Get ready for the quiz by practising with these questions
                </h2>
                <h2 className="text-lg mb-10">What is this country?</h2>
                <OptionsQuizContainer data={apiResponse} />
            </div>
        </>
    );
};

export default PracticePage;
