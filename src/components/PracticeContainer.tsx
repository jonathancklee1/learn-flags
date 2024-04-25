import { useEffect, useState } from "react";

const PracticeContainer = ({ data }) => {
    console.log(data);
    const [correctCountry, setCorrectCountry] = useState({});
    const [answerList, setAnswerList] = useState([]);
    const [correctIndex, setCorrectIndex] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    function getRandomCountry(data: []) {
        if (data && data.length > 0) {
            const randomNumber = Math.floor(Math.random() * data.length);
            return data[randomNumber];
        }
    }

    function populateAnswerList() {
        const optionsArray = [];
        optionsArray.push(correctCountry.name.common);
        let secondOption = getRandomCountry(data)?.name.common;
        // Checks if the second option is the same as the first
        for (const option of optionsArray) {
            while (secondOption === option) {
                secondOption = getRandomCountry(data)?.name.common;
            }
        }
        optionsArray.push(secondOption);

        // Checks if the third option is the same as the first or second
        let thirdOption = getRandomCountry(data)?.name.common;
        for (const option of optionsArray) {
            while (thirdOption === option) {
                thirdOption = getRandomCountry(data)?.name.common;
            }
        }
        optionsArray.push(thirdOption);
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
    function checkAnswer(name: string, index: number) {
        if (name === correctCountry.name.common) {
            setCorrectIndex(index);
            setIsAnswered(true);
        }
    }

    useEffect(() => {
        if (data) {
            setCorrectCountry(getRandomCountry(data));
        }
    }, [data]);

    useEffect(() => {
        if (Object.keys(correctCountry).length > 0) {
            const answerArray = populateAnswerList();
            setAnswerList(answerArray);
        }
    }, [correctCountry]);

    return (
        <>
            <div className="flex flex-col items-center w-[80vw] ">
                <img
                    src={
                        correctCountry &&
                        correctCountry.flags &&
                        correctCountry.flags.png
                    }
                    alt="Why are you cheating?"
                    className="w-2/3 mb-10"
                />
                <div className="grid gap-3 w-full">
                    {answerList.map((option, index) => {
                        return (
                            <button
                                key={index}
                                className={`border-primary-color text-primary-color border-2 px-5 py-3 text-center w-full ${
                                    index === correctIndex &&
                                    isAnswered &&
                                    "border-green-100"
                                }`}
                                onClick={() => checkAnswer(option, index)}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default PracticeContainer;
