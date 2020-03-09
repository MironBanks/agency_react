import React, { useEffect } from "react";
import "./styles/App.scss";
import Header from "./components/header"
import Banner from "./components/banner";
import Cases from "./components/cases";
import IntroOverlay from "./components/introOverlay";
import gsap from 'gsap'




function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    //prevents flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } })


    //timeline
    const tl = gsap.timeline()

    tl.from(".line span", 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }

    })



  }, [])



  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
