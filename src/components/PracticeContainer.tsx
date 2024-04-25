import { useEffect, useState } from "react";

const PracticeContainer = ({ data }) => {
    console.log(data);
    const [correctCountry, setCorrectCountry] = useState({});
    const [answerList, setAnswerList] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [newQuestion, setNewQuestion] = useState(false);

    function getRandomCountry(data: []) {
        if (data && data.length > 0) {
            const randomNumber = Math.floor(Math.random() * data.length);
            return data[randomNumber];
        }
    }

    function populateAnswerList() {
        const optionsArray = [];
        optionsArray.push({
            name: correctCountry.name.common,
            isCorrect: true,
        });
        let secondOption = getRandomCountry(data)?.name.common;
        // Checks if the second option is the same as the first
        for (const option of optionsArray) {
            while (secondOption === option.name) {
                secondOption = getRandomCountry(data)?.name.common;
            }
        }
        optionsArray.push({ name: secondOption, isCorrect: false });

        // Checks if the third option is the same as the first or second
        let thirdOption = getRandomCountry(data)?.name.common;
        for (const option of optionsArray) {
            while (thirdOption === option.name) {
                thirdOption = getRandomCountry(data)?.name.common;
            }
        }
        optionsArray.push({ name: thirdOption, isCorrect: false });
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

    useEffect(() => {
        if (data) {
            setCorrectCountry(getRandomCountry(data));
        }
    }, [data, newQuestion]);

    useEffect(() => {
        if (Object.keys(correctCountry).length > 0) {
            const answerArray = populateAnswerList();
            setAnswerList(answerArray);
        }
    }, [correctCountry]);

    return (
        <>
            <div className="flex flex-col items-center w-[80vw] max-w-[600px]">
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
                                className={`border-primary-color text-primary-color border-2 px-5 py-3 text-center w-full font-semibold transition-all duration-500 hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color  ${
                                    isAnswered
                                        ? option.isCorrect
                                            ? " !bg-green-400 border-green-100 !text-secondary-color"
                                            : "!bg-red-400 border-red-100 !text-secondary-color"
                                        : ""
                                }`}
                                onClick={() => setIsAnswered(true)}
                            >
                                {option.name}
                            </button>
                        );
                    })}
                </div>
            </div>

            <button
                className={`border-primary-color text-primary-color border-2 px-5 py-3 text-center w-full mt-3 transition-all duration-500  hover:bg-primary-color focus:bg-primary-color hover:text-secondary-color focus:text-secondary-color${
                    isAnswered ? "visible opacity-100" : "invisible opacity-0"
                }`}
                onClick={() => {
                    setNewQuestion((prevNewQuestion) => !prevNewQuestion);
                    setIsAnswered(false);
                }}
            >
                Next Question
            </button>
        </>
    );
};

export default PracticeContainer;
