import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
    const [apiResponse, setApiResponse] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    useEffect(() => {
        async function getCountries() {
            setIsPending(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const body = await response.json();
                console.log(body);
                setIsPending(false);
                setApiResponse(body);
                setErrorMessage(null);
            } catch (error) {
                setIsPending(false);
                setErrorMessage("No Countries Found. Please try again.");
            }
        }
        getCountries();
    }, [url]);
    return { apiResponse, isPending, errorMessage };
};
