import { useContext, useEffect, useState } from "react";
import Flag from "../assets/flag.png";
import { useCountdown } from "../hooks/useCountdown";
import Results from "./Results";
import QuizCountdown from "./QuizCountdown";
import { QuizContext } from "../App";
interface OptionsQuizContainerProps {
    data: any[];
    numOfOptions?: number;
    isQuiz?: boolean;
}

const OptionsQuizContainer = ({
    data,
    numOfOptions,
    isQuiz,
}: OptionsQuizContainerProps) => {
    const [correctCountry, setCorrectCountry] = useState({});
    const [answerList, setAnswerList] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [newQuestion, setNewQuestion] = useState(false);
    const [points, setPoints] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(1);
    const [startCountdown, setStartCountdown] = useState(true);

    const { quizFinished, setQuizFinished } = useContext(QuizContext);

    const optionsNumber = numOfOptions ? numOfOptions : 3;
    const startCountdownTime = isQuiz ? 3 : 0;
    const quizTime = isQuiz ? 10 : 0;
    const remainingSeconds = useCountdown(quizTime + startCountdownTime);

    function getRandomCountry(data: []) {
        if (data && data.length > 0) {
            const randomNumber = Math.floor(Math.random() * data.length);
            return data[randomNumber];
        }
    }

    function populateAnswerList(optionsNumber: number) {
        const optionsArray = [];
        optionsArray.push({
            name: correctCountry.name.common,
            isCorrect: true,
        });

        for (let i = 0; i < optionsNumber - 1; i++) {
            let currentOption = getRandomCountry(data)?.name.common;

            // Checks if the second option is the same as the first
            for (const option of optionsArray) {
                while (currentOption === option.name) {
                    currentOption = getRandomCountry(data)?.name.common;
                }
            }
            optionsArray.push({ name: currentOption, isCorrect: false });
        }
        shuffleArray(optionsArray);
        return optionsArray;
    }

    function shuffleArray<T>(array: T[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function checkSelected(name: string) {
        setIsAnswered(true);
        if (name === correctCountry.name.common) {
            setPoints((prevPoints) => prevPoints + 1);
        }
    }

    useEffect(() => {
        if (data) {
            setCorrectCountry(getRandomCountry(data));
        }
    }, [data, newQuestion]);

    useEffect(() => {
        if (Object.keys(correctCountry).length > 0) {
            const answerArray = populateAnswerList(optionsNumber);
            setAnswerList(answerArray);
        }
    }, [correctCountry]);
    useEffect(() => {
        if (remainingSeconds === 0 && isQuiz) {
            setQuizFinished(true);
        }
    }, [remainingSeconds]);

    return (
        <>
            {!quizFinished && (
                <div className="flex flex-col items-center w-[80vw] max-w-[600px] mx-auto">
                    {isQuiz && (
                        <>
                            <div className="bg-secondary-color text-primary-color text-4xl font-bold rounded-lg px-8 md:px-16 py-4 mb-8">
                                {remainingSeconds}s
                            </div>
                            <div className="flex  gap-6 justify-between w-full mb-8">
                                <div className="flex items-center gap-2 text-3xl font-bold ">
                                    <div className="rounded-xl  bg-secondary-color p-2">
                                        <img
                                            src={Flag}
                                            alt="flag icon"
                                            className="w-6"
                                        />
                                    </div>
                                    <span>#{numberOfQuestions}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xl font-semibold">
                                    Your Score:
                                    <span className="text-3xl">{points}</span>
                                </div>
                            </div>
                        </>
                    )}
                    <img
                        src={
                            correctCountry &&
                            correctCountry.flags &&
                            correctCountry.flags.png
                        }
                        alt="Why are you cheating?"
                        className="mb-10 max-h-36"
                    />
                    <div className="grid gap-3 w-full">
                        {answerList.map((option, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`border-secondary-color text-primary-color bg-secondary-color border-2 px-5 py-3 text-center w-full font-semibold transition-all duration-500 hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color  ${
                                        isAnswered
                                            ? option.isCorrect
                                                ? " !bg-correct-color border-green-100 !text-secondary-color"
                                                : "!bg-incorrect-color border-red-100 !text-secondary-color"
                                            : ""
                                    }`}
                                    onClick={() => checkSelected(option.name)}
                                >
                                    {option.name}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        className={`border-secondary-color text-primary-color bg-secondary-color border-2 px-5 py-3 text-center w-full mt-3 transition-all duration-500  hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color  font-bold text-2xl${
                            isAnswered
                                ? "visible opacity-100 pointer-events-auto"
                                : "invisible opacity-0 pointer-events-none"
                        }`}
                        onClick={() => {
                            setNewQuestion(
                                (prevNewQuestion) => !prevNewQuestion
                            );
                            setIsAnswered(false);
                            setNumberOfQuestions(
                                (prevQuestions) => prevQuestions + 1
                            );
                        }}
                    >
                        Next Question
                    </button>
                </div>
            )}
            {isQuiz && <Results score={points} isVisible={quizFinished} />}
            {isQuiz && startCountdown && (
                <QuizCountdown
                    setStartCountdown={setStartCountdown}
                    startCountdownTime={startCountdownTime}
                />
            )}
        </>
    );
};

export default OptionsQuizContainer;
