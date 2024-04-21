import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/landing-page/LandingPage";
import QuizPage from "./components/quiz-page/QuizPage";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
