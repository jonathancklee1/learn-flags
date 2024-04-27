import { useEffect, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";

const QuizCountdown = ({ setStartCountdown, startCountdownTime }) => {
    const remainingSeconds = useCountdown(startCountdownTime);
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        if (remainingSeconds === 0) {
            setStartCountdown(false);
            setIsVisible(false);
        }
    }, [remainingSeconds]);

    return (
        <>
            {isVisible && (
                <div className="absolute top-0 bottom-0 left-0 right-0 grid place-content-center min-h-[calc(100vh-68px)] bg-primary-color text-secondary-color">
                    <div className="text-3xl font-bold mb-10">Get Ready!</div>
                    <div className="relative bg-secondary-color text-primary-color text-4xl font-bold rounded-full p-14 mb-4 w-min mx-auto">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {remainingSeconds}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default QuizCountdown;
