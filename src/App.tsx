import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/landing-page/LandingPage";
import QuizPage from "./pages/quiz-page/QuizPage";
import PracticePage from "./pages/practice-page/PracticePage";
import { useState } from "react";
import React from "react";

export const QuizContext = React.createContext(null);

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
                        <Route path="/learn-flags/" element={<LandingPage />} />
                        <Route
                            path="/learn-flags/practice"
                            element={<PracticePage />}
                        />
                        <Route
                            path="/learn-flags/quiz"
                            element={<QuizPage />}
                        />
                    </Routes>
                </QuizContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
