import PracticeContainer from "../../components/PracticeContainer";
import { useFetch } from "../../hooks/useFetch";

const PracticePage = () => {
    const { apiResponse } = useFetch("https://restcountries.com/v3.1/all");

    return (
        <>
            <div className="grid place-content-center h-[calc(100vh-56px)] text-center">
                <h1 className="text-2xl font-bold mb-5">Practice here!</h1>
                <h2 className="text-lg mb-10">What is this country?</h2>
                <PracticeContainer data={apiResponse} />
            </div>
        </>
    );
};

export default PracticePage;
