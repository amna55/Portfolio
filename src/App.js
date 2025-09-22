import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./component/header";
import About from "./component/about";
import Me from "./component/me";
import Projects from "./component/projects";
import Contact from "./component/contact";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

// Home layout
const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <>
      <section id="About"><About /></section>
      <section id="Projects"><Projects /></section>
      <section id="Contact"><Contact /></section>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/me" element={<Me />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
