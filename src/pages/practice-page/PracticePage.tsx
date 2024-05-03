import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "../../components/Footer";
import OptionsQuizContainer from "../../components/OptionsQuizContainer";
import { useFetch } from "../../hooks/useFetch";
import { useRef } from "react";

const PracticePage = () => {
    const { apiResponse } = useFetch("https://restcountries.com/v3.1/all");
    const practiceContainer = useRef(null);
    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: { opacity: 0, duration: 0.7, ease: "power3.out" },
            });
            tl.from("h1", {
                x: -30,
            })
                .from("h2", { y: -30 })
                .from("img", {});
        },
        { scope: practiceContainer }
    );

    return (
        <>
            <div
                className="grid place-content-center min-h-[calc(100vh-var(--header-height))] text-center max-w-[1440px] mx-auto text-primary-text px-8 md:px-16 py-4"
                ref={practiceContainer}
            >
                <h1 className="text-2xl font-bold mb-5">Practice here!</h1>
                <h2 className="text-lg mb-10">
                    Get ready for the quiz by practising with these questions
                </h2>
                <h2 className="text-lg mb-10 font-bold">
                    What is this country?
                </h2>
                {apiResponse && <OptionsQuizContainer data={apiResponse} />}
            </div>
            <Footer />
        </>
    );
};

export default PracticePage;
