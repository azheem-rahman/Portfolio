import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <br />
      <div>
        <LandingPage />
      </div>
      <br />
      <div>
        <AboutMe />
      </div>
      <br />
      <div>
        <Portfolio />
      </div>
      <br />
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
