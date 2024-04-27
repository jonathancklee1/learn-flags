import { useState } from "react";
import Footer from "../../components/Footer";
import OptionsQuizContainer from "../../components/OptionsQuizContainer";
import { useFetch } from "../../hooks/useFetch";

const QuizPage = () => {
    const { apiResponse } = useFetch("https://restcountries.com/v3.1/all");
    const [quizStarted, setQuizStarted] = useState(false);
    return (
        <>
            <div className="grid place-content-center min-h-[calc(100vh-var(--header-height))] text-center mx-auto text-secondary-color px-8 py-4 bg-primary-color">
                <div className="relative max-w-[1440px] mx-auto">
                    <div
                        className={`transition-all duration-500 max-w-[600px] ${
                            !quizStarted
                                ? "relative visible opacity-100 translate-y-0"
                                : "absolute invisible opacity-0"
                        }`}
                    >
                        <h1 className="text-2xl font-bold mb-5">Quiz Time!</h1>
                        <h2 className="text-lg mb-10">
                            Race against the clock to see how many flags you get
                            correct. Your times will be recorded and your top
                            three scores will be displayed on your own
                            leaderboard.
                        </h2>
                        <button
                            className="border-secondary-color text-primary-color bg-secondary-color border-2 px-5 py-3 text-center w-full mt-3 transition-all duration-500  hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color max-w-[360px] mx-auto font-bold text-2xl"
                            onClick={() => setQuizStarted(true)}
                        >
                            Start
                        </button>
                    </div>

                    {quizStarted && (
                        <OptionsQuizContainer
                            data={apiResponse}
                            numOfOptions={4}
                            isQuiz={true}
                            setQuizStarted={setQuizStarted}
                        />
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default QuizPage;
