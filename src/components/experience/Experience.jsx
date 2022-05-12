import React, { useEffect } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Experience = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <section id='experience' data-aos='fade-right'>
      
      <h5>Quais skills eu tenho?</h5>
      <h2>Minha Experiência</h2>
        
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />  
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Iniciante</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Iniciante</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="divider1"></div>
    </section>
  )
}

export default Experience