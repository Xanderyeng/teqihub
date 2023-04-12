import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Hero, Courses, Success, Contact, Footer, Home } from "./components/index";
import { About, Corporate, Partner, TermsOfUse, Policy } from "./pages";

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
          <Route path="/corporate" element={<Corporate scrollToId="corporate" />} />
          <Route path="/partner" element={<Partner scrollToId="partner" />} />
          <Route path="/courses" element={<Home scrollToId="courses"/>} />
          <Route path='/privacy-policy' element={<Policy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
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
