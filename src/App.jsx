import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonials'
import Portifolio from './components/portifolio/Portifolio'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portifolio />
        <Testimonials />
        <Contact />
        <Footer />
        
    </>
  )
}

export default App