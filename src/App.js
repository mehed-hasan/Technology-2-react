
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Common/Footer";
import SearchModal from "./components/Common/SearchModal";
import NavBar from "./components/Common/NavBar";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import CaseStudy from "./pages/casestudy";
import Portfolio from "./pages/portfolio";
import CaseDetails from "./pages/casestudy/CaseDetails";
import PortfolioDetails from "./pages/portfolio/PortfolioDetails";

import { useState } from "react";
import Contact from "./pages/contact";



function App() {
  const [active, setActive] = useState(false);

  const isClicked = () =>{
      setActive(!active);
  }

  return (
    <>
      <BrowserRouter>
          <main id="main">
          <NavBar isClicked={isClicked}/>

            {/* Preloader  */}

            <SearchModal isClicked={isClicked} isActive={active}/>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/about" element={<AboutPage/>}></Route>
              <Route path="/casestudy" element={<CaseStudy/>}></Route>
              <Route path="/portfolio" element={<Portfolio/>}></Route>
              <Route path='/case_study/:id/:cat/:slug' element={<CaseDetails/>}></Route>
              <Route path='/portfolio/:id/:cat/:slug' element={<PortfolioDetails/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
            <Footer/>

          </main>
      </BrowserRouter>
    </>
  );
}

export default App;
