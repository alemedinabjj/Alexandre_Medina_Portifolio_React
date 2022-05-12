import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Alexandre Medina</a>

      <ul className="permalinks">
        <li><a href="#">Início</a></li>
        <li><a href="#about">Quem sou eu?</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portifolio">Portifólio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com/alexandremedina"><FaFacebookSquare /></a>
        <a href="https://instagram.com"><FaInstagramSquare /></a>
        <a href="https://twitter.com"><FaTwitterSquare /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Alexandre Medina </small>
        </div>
    </footer>
  )
}

export default Footer