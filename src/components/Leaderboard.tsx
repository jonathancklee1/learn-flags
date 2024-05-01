const Leaderboard = () => {
    const highScores = localStorage.getItem("quiz-high-scores")
        ? JSON.parse(localStorage.getItem("quiz-high-scores")!)
        : null;
    return (
        <>
            <section className="min-h-100vh text-center mx-auto text-primary-text px-8 py-8 md:py-20 bg-secondary-color flex flex-col justify-center gap-4">
                <h2 className="text-2xl md:text-3xl uppercase font-bold mb-6 upp">
                    Your best scores
                </h2>
                {highScores && highScores.length > 0 ? (
                    <div className="max-w-[1440px] w-full mx-auto">
                        <ul className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4 items-end md:h-[200px] max-w-[300px] md:max-w-none mx-auto">
                            {highScores.map(
                                (
                                    highScore: { date: string; score: number },
                                    index: number
                                ) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`flex flex-col justify-between p-6 border-4 ${
                                                index === 0
                                                    ? "border-[#ffdd45] bg-gradient-to-r from-[#ffe554] md:order-2 h-full"
                                                    : index === 1
                                                    ? "border-white bg-gradient-to-r from-[#bbb7aa] md:order-1 md:h-[calc(100%-1rem)]"
                                                    : "border-[#fc9349] bg-gradient-to-r from-[#b3642c] md:order-3 md:h-[calc(100%-2rem)]"
                                            }  from-50% to-white text-black rounded-2xl`}
                                        >
                                            <p className="text-2xl font-semibold mb-4">
                                                {index === 0
                                                    ? "🥇 1st"
                                                    : index === 1
                                                    ? "🥈 2nd"
                                                    : "🥉 3rd"}
                                            </p>
                                            <div>
                                                <p className="text-3xl font-semibold mb-2">
                                                    {highScore.score} points
                                                </p>
                                                <p className="text-xl font-medium">
                                                    On {highScore.date}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                ) : (
                    <p>No high scores yet. Play the quiz to see your score</p>
                )}
            </section>
        </>
    );
};

export default Leaderboard;
