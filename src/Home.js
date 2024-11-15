// import Home Page components here
import Tutorial from "./Tutorial";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Locations from "./components/Locations";

function Home() {
    return (
        <div className="Home">
            {/* <Tutorial
                colorProp='text-pink-500'
            /> */}
            <Hero/>
            <About/>
            <Menu/>
            <Locations/>
        </div>
    );
}

export default Home;
