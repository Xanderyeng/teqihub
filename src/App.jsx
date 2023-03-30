import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./fonts/stylesheet.css";
import { Navbar, Hero, Courses, Contact, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* TEQihub */}
        <div>
          <Navbar />
        </div>
        <Hero />
        <Courses />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
