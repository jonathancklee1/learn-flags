import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/landing-page/LandingPage";
import QuizPage from "./pages/quiz-page/QuizPage";
import PracticePage from "./pages/practice-page/PracticePage";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/practice" element={<PracticePage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
