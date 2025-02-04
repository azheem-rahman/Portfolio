import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <BrowserRouter>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
