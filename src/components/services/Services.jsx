import React, { useEffect } from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Services = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <section id='services' data-aos="fade-right">
      <h5>O que eu ofereço?</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>website Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, dolores?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, dolores?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, dolores?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, dolores?</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services