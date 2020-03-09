import React, { useEffect } from "react";
import "./styles/App.scss";
import Header from "./components/header"
import gsap from 'gsap'
import Home from "./pages/home";




function App() {
  useEffect(() => {

    let vh = window.innerHeight * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    gsap.to('body', 0, { css: { visibility: 'visible' } })
  })


  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
