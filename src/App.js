import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Aside from "./components/Aside";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./Pages/Exchanges";
import CryptoDetails from "./components/CryptoDetails";
import Footer from "./components/Footer";
import News from "./components/News";

const App = () => {
  const [display, setDisplay] = useState({ nav: false, aside: true });

  useEffect(() => {
    const resize = () => {
      let width = window.innerWidth;
      if (width > 992) {
        setDisplay({ ...display, nav: false, aside: true });
      } else {
        setDisplay({ ...display, nav: true, aside: false });
      }
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Wrapper>
      <Router>
        <div className='app-container'>
          {display.aside && <Aside />}
          {display.nav && <Navbar />}

          <Routes>
            <Route path='/' exact element={<HomePage />}></Route>
            <Route
              path='/cryptocurrencies'
              exact
              element={<Cryptocurrencies />}
            ></Route>
            <Route path='/exchanges' exact element={<Exchanges />}></Route>
            <Route
              path='/singleCrypto/:id'
              exact
              element={<CryptoDetails />}
            ></Route>
            <Route path='/news' exact element={<News />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media screen and (min-width: 992px) {
    .app-container {
      display: grid;
      grid-template-columns: 400px 1fr;
    }
  }
`;

export default App;
