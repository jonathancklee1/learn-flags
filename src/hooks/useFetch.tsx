import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
    const [apiResponse, setApiResponse] = useState(null);
    const [isPending, setIsPending] = useState(false);
    useEffect(() => {
        async function getCountries() {
            setIsPending(true);
            try {
                const response = await fetch(url);
                const body = await response.json();
                console.log(body);
                setIsPending(false);
                setApiResponse(body);
            } catch (error) {
                setIsPending(false);
                throw console.error(error);
            }
        }
        getCountries();
    }, [url]);
    return { apiResponse, isPending };
};
