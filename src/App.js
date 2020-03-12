import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom'
import "./styles/App.scss";
import Header from "./components/header"
import gsap from 'gsap'


//pages
import Home from "./pages/home";
import CaseStudies from './pages/caseStudies'
import Approach from './pages/approach'
import About from './pages/about'
import Services from './pages/services'
import Navigation from "./components/navigation";


const routes = [
  { path: "/", name: 'Home', Component: Home },
  { path: "/case-studies", name: 'Case Studies', Component: CaseStudies },
  { path: "/approach", name: 'Approach', Component: Approach },
  { path: "/about-us", name: 'About Us', Component: About },
  { path: "/services", name: 'Services', Component: Services }
]


function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments)
    }, ms)
  }
}



function App() {
  gsap.to('body', 0, { css: { visibility: 'visible' } })
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {

    let vh = dimensions.height * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)



    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }

  })


  return (
    <>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
