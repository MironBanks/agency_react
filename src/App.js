import React, { useEffect } from "react";
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


const routes = [
  { path: "/", name: 'Home', Component: Home },
  { path: "/case-studies", name: 'Case Studies', Component: CaseStudies },
  { path: "/approach", name: 'Approach', Component: Approach },
  { path: "/about-us", name: 'About Us', Component: About },
  { path: "/services", name: 'Services', Component: Services }
]




function App() {
  useEffect(() => {

    let vh = window.innerHeight * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    gsap.to('body', 0, { css: { visibility: 'visible' } })
  })


  return (
    <>
      <Header />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
