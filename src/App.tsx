import "./App.css";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import VideoSection from "./components/Middle";
import NavBar from "./components/Navebar";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Hero></Hero>
            <VideoSection></VideoSection>
            <Footer></Footer>
            <BackToTopButton></BackToTopButton>
        </>
    );
}

export default App;
