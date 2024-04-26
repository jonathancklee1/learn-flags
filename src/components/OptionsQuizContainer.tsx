import { useEffect, useState } from "react";
import Flag from "../assets/flag.png";
import { useCountdown } from "../hooks/useCountdown";
import Results from "./Results";
interface OptionsQuizContainerProps {
    data: any[];
    numOfOptions?: number;
    isQuiz?: boolean;
    setQuizStarted: (value: boolean) => void;
}

const OptionsQuizContainer = ({
    data,
    numOfOptions,
    isQuiz,
    setQuizStarted,
}: OptionsQuizContainerProps) => {
    console.log(data);
    const [correctCountry, setCorrectCountry] = useState({});
    const [answerList, setAnswerList] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [newQuestion, setNewQuestion] = useState(false);
    const [points, setPoints] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(1);
    const [quizFinished, setQuizFinished] = useState(false);
    const optionsNumber = numOfOptions ? numOfOptions : 3;
    const remainingSeconds = useCountdown(10);
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
            console.log(currentOption);

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

    function shuffleArray(array: string[]) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
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
        if (remainingSeconds === 0) {
            setQuizFinished(true);
        }
    }, [remainingSeconds]);

    return (
        <>
            {" "}
            {!quizFinished && (
                <div className="flex flex-col items-center w-[80vw] max-w-[600px] mx-auto">
                    {isQuiz && (
                        <>
                            <div className="bg-secondary-color text-primary-color text-4xl font-bold rounded-lg px-4 py-1 mb-4">
                                {remainingSeconds}s
                            </div>
                            <div className="flex gap-6 justify-between w-full mb-8">
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
                                <div className="flex items-center gap-2 text-xl font-bold ">
                                    Score: <span>{points}</span>
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
                                    className={`border-primary-color text-primary-color bg-secondary-color border-2 px-5 py-3 text-center w-full font-semibold transition-all duration-500 hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color  ${
                                        isAnswered
                                            ? option.isCorrect
                                                ? " !bg-green-400 border-green-100 !text-secondary-color"
                                                : "!bg-red-400 border-red-100 !text-secondary-color"
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
                        className={`border-primary-color text-primary-color bg-secondary-color border-2 px-5 py-3 text-center w-full mt-3 transition-all duration-500  hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color ${
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
            {quizFinished && (
                <Results
                    score={points}
                    isVisible={true}
                    setQuizStarted={setQuizStarted}
                    setQuizFinished={setQuizFinished}
                />
            )}
        </>
    );
};

export default OptionsQuizContainer;