import { useContext, useState } from "react";
import { QuizContext } from "../App";

interface ResultsProps {
    score: number;
    isVisible: boolean;
}

const Results = ({ score, isVisible }: ResultsProps) => {
    const { setQuizStarted, setQuizFinished } = useContext(QuizContext);
    const [isHighScore, setIsHighScore] = useState(false);
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }
    function checkHighscore(currentDate: string) {
        const scores = JSON.parse(localStorage.getItem("quiz-high-scores")!);
        let highScore = false;
        for (const arrayScore of scores) {
            if (arrayScore.score >= score) {
                highScore = false;
                return;
            } else {
                highScore = true;
            }
        }
        if (highScore) {
            scores.unshift({ date: currentDate, score: score });
            if (scores.length > 3) {
                scores.pop();
            }
            setIsHighScore(true);
        }
        localStorage.setItem("quiz-high-scores", JSON.stringify(scores));
    }

    if (isVisible) {
        const currentDate = getDate();
        if (localStorage.getItem("quiz-high-scores") === null) {
            localStorage.setItem(
                "quiz-high-scores",
                `[{"date": "${currentDate}", "score": ${score}}]`
            );
        } else {
            checkHighscore(currentDate);
        }
    }
    return (
        <>
            <div
                className={`results-container w-full grid place-content-center opacity-0 translate-y-20 transition-all duration-[2s] absolute top-0 bottom-20 invisible ${
                    isVisible && "show"
                }`}
            >
                <div className="text-4xl font-bold mb-10">Quiz Finished!</div>
                {isHighScore && (
                    <div className="text-4xl font-bold mb-4">
                        <span className="mr-2">&#127881;</span>
                        Congratulations, you got a high score!{" "}
                        <span className="ml-2">&#127881;</span>
                    </div>
                )}
                <div className=" bg-secondary-color text-primary-color p-6 rounded-lg text-2xl font-bold mb-8 max-w-[500px]">
                    Your Score: {score}
                </div>
                <button
                    className="border-primary-color text-primary-color bg-secondary-color border-2 px-5 py-3 text-center w-full mt-3 transition-all duration-500  hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color font-bold "
                    onClick={() => {
                        setQuizStarted(false);
                        setQuizFinished(false);
                    }}
                >
                    {/* Add pulsing animation */}
                    Play Again
                </button>
            </div>
        </>
    );
};

export default Results;
