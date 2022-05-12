import React, { useEffect } from 'react'
import './about.css'

import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Aos from 'aos'
import 'aos/dist/aos.css'



const About = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <section id='about'>
      <div className="divider1"></div>
      <h5>Quer me conhecer?</h5>
      <h2>Quem sou eu</h2>
      <div className="container about__container">
        <div className="about__me"  data-aos='fade-right'>
          <img className='about__me-image' src={ME} alt="About image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'  data-aos='fade-right'>
            <FaAward className='about__icon' />
            <h5>Experiência</h5>
            <small>Estudante</small>
          </article>
          <article className='about__card'  data-aos='fade-right'>
            <FiUsers className='about__icon' />
            <h5>Cursos</h5>
            <small>Meus cursos</small>
          </article>
          <article className='about__card'  data-aos='fade-right' >
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>Meus projetos.</small>
          </article>
          </div>
          <p data-aos='fade-right' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto aperiam, exercitationem aspernatur obcaecati, fugit impedit nam adipisci voluptas non omnis, blanditiis ullam ab incidunt culpa. Harum voluptatibus ipsa natus!</p>
          <a  data-aos='fade-right' href="#contact" className='btn btn-primary'>Contate-me</a>
        </div>
      </div>
      <div className="divider2"></div>
    </section>
    
  )
}

export default About