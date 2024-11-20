// import Home Page components here
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Locations from "./components/Locations";

function Home() {
    return (
        <div className="
            m-auto
            max-w-[1920px]
        ">
            <Hero/>
            <About/>
            <Menu/>
            <Locations/>
        </div>
    );
}

export default Home;
