import React, { useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Header = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <header>
      <div className="container header__container" data-aos='fade-right'>
        <h5>Hello World!</h5>
        <h1>Alexandre Medina</h1>
        <h5 className="text-light">Front-end Developer</h5>
       <CTA />
        <HeaderSocials />
       <div className="me">
         <img src={ME} alt="me" />
       </div>

       <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      
    </header>
    
  )
}

export default Header