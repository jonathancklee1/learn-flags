import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/landing-page/LandingPage";
import QuizPage from "./pages/quiz-page/QuizPage";
import PracticePage from "./pages/practice-page/PracticePage";
import { useState } from "react";
import React from "react";
interface QuizContextValue {
    quizStarted: boolean;
    setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
    quizFinished: boolean;
    setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QuizContext = React.createContext<QuizContextValue | null>(null);

function App() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <QuizContext.Provider
                    value={{
                        quizStarted,
                        setQuizStarted,
                        quizFinished,
                        setQuizFinished,
                    }}
                >
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/practice" element={<PracticePage />} />
                        <Route path="/quiz" element={<QuizPage />} />
                    </Routes>
                </QuizContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
