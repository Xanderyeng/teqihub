import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./fonts/stylesheet.css";
import { Navbar, Hero, Courses, Contact, Footer, Success } from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App relative z-0'>
        {/* TEQihub */}
        <div></div>
        <Navbar />
        <Hero />
        <Courses />
        <Success />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
