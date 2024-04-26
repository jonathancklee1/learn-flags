import { useState } from "react";
import Footer from "../../components/Footer";
import OptionsQuizContainer from "../../components/OptionsQuizContainer";
import { useFetch } from "../../hooks/useFetch";

const QuizPage = () => {
    const { apiResponse } = useFetch("https://restcountries.com/v3.1/all");
    const [quizStarted, setQuizStarted] = useState(false);
    return (
        <>
            <div className="grid place-content-center min-h-[calc(100vh-56px)] text-center max-w-[1440px] mx-auto text-secondary-color px-8 py-4 bg-primary-color">
                <h1 className="text-2xl font-bold mb-5">Quiz Time!</h1>
                {!quizStarted && (
                    <h2 className="text-lg mb-10">
                        Race against the clock to see how many flags you get
                        correct. Your times will be recorded and your top three
                        scores will be displayed on your own leaderboard.
                    </h2>
                )}
                {quizStarted && (
                    <OptionsQuizContainer
                        data={apiResponse}
                        numOfOptions={4}
                        isQuiz={true}
                    />
                )}
                {!quizStarted && (
                    <button
                        className="border-primary-color text-primary-color bg-secondary-color border-2 px-5 py-3 text-center w-full mt-3 transition-all duration-500  hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color"
                        onClick={() => setQuizStarted(true)}
                    >
                        Start
                    </button>
                )}
            </div>
            <Footer />
        </>
    );
};

export default QuizPage;
