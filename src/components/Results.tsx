interface ResultsProps {
    score: number;
    isVisible: boolean;
    setQuizStarted: (value: boolean) => void;
    setQuizFinished: (value: boolean) => void;
}

const Results = ({
    score,
    isVisible,
    setQuizStarted,
    setQuizFinished,
}: ResultsProps) => {
    return (
        <>
            <div
                className={`results-container w-full grid place-content-center opacity-0 translate-y-20 transition-all duration-[2s] absolute top-0 bottom-20 invisible ${
                    isVisible && "show"
                }`}
            >
                <div className="text-3xl font-bold mb-4">Quiz Finished!</div>
                <div className="text-2xl font-bold mb-8">
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
