import { useContext } from "react";
import Footer from "../../components/Footer";
import OptionsQuizContainer from "../../components/OptionsQuizContainer";
import { useFetch } from "../../hooks/useFetch";
import Leaderboard from "../../components/Leaderboard";
import { QuizContext } from "../../App";
import Wave from "../../components/Wave";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const QuizPage = () => {
    const { apiResponse } = useFetch("https://restcountries.com/v3.1/all");

    const { quizStarted, setQuizStarted } = useContext(QuizContext)!;

    // Gsap Animation
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { duration: 1.75, ease: "power3.out" },
            repeat: -1,
        });
        tl.to(".start-button", {
            scale: 1.1,
        }).to(".start-button", {
            scale: 1,
        });

        gsap.from(".quiz-title", {
            y: -70,
            opacity: 0,
            duration: 1.75,
            ease: "bounce",
        });
    });

    return (
        <>
            <div className="grid place-content-center min-h-[calc(100svh-var(--header-height))] text-center mx-auto text-secondary-color px-8 py-4 bg-primary-color">
                <div className="relative max-w-[1440px] mx-auto">
                    <div
                        className={`transition-all duration-500 max-w-[600px] ${
                            !quizStarted
                                ? "relative visible opacity-100 translate-y-0"
                                : "absolute invisible opacity-0"
                        }`}
                    >
                        <h1 className="quiz-title text-2xl md:text-3xl uppercase font-bold mb-5">
                            Quiz Time!
                        </h1>
                        <h2 className="text-lg mb-10">
                            Race against the clock to see how many flags you get
                            correct. Your times will be recorded and your top
                            three scores will be displayed on your own
                            leaderboard.
                        </h2>
                        <button
                            className="start-button border-secondary-color text-primary-color bg-secondary-color border-2 px-5 py-3 text-center w-full mt-3  hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color max-w-[360px] mx-auto font-bold text-2xl"
                            onClick={() => setQuizStarted(true)}
                        >
                            Start
                        </button>
                    </div>

                    {quizStarted && apiResponse && (
                        <OptionsQuizContainer
                            data={apiResponse}
                            numOfOptions={4}
                            isQuiz={true}
                        />
                    )}
                </div>
            </div>
            {!quizStarted && (
                <>
                    <Wave />
                    <Leaderboard />
                </>
            )}
            <Footer />
        </>
    );
};

export default QuizPage;
