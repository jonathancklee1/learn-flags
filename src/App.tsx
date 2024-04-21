import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/landing-page/HeroBanner";
import Main from "./components/landing-page/Main";
function App() {
    return (
        <>
            <Navbar />
            <HeroBanner />
            <Main />
            <Footer />
        </>
    );
}

export default App;
