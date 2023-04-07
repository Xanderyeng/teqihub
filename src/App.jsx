import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Hero, Courses, Success, Contact, Footer, Home } from "./components/index";
import { About, Corporate, Partner } from "./pages";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <div className='relative z-0'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/courses" element={<Home scrollToId="courses"/>} />
        </Routes>
        <Footer />
      </div>
      {/* <div className='relative z-0'>
        <Navbar />
        <Hero />
        <Courses />
        <Success />
        <Contact />
        <Footer />
      </div> */}
      </>
  );
};

export default App;
