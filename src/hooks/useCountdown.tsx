import { useEffect, useState } from "react";

export const useCountdown = (startingSeconds: number) => {
    const [remainingSeconds, setRemainingSeconds] = useState(startingSeconds);

    useEffect(() => {
        if (!remainingSeconds) return;
        const interval = setInterval(() => {
            setRemainingSeconds(remainingSeconds - 1);
        }, 1000);
        console.log(remainingSeconds);
        return () => clearInterval(interval);
    }, [remainingSeconds]);

    return remainingSeconds;
};
