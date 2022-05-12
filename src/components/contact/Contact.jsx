import React, { useEffect } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r0o8v59', 'template_zmzm4dj', form.current, 'MgtiWpvmlm2X808Dd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5  data-aos="fade-right" >Fale comigo!</h5>
      <h2  data-aos="fade-right" >Contato</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option"  data-aos="fade-right" >
           <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>alesurf13@gmail.com</h5>
            <a href="mailto:alesurf13@gmail.com" target='_blank'>Mande um Email.</a>
          </article>
          <article className="contact__option"  data-aos="fade-right" >
           <BsMessenger className="contact__option-icon" />
            <h4>Mensagem</h4>
            <h5>Alexandre Medina Facebook</h5>
            <a href="https://m.me/alexandremedina" target='_blank'>Message Facebook</a>
          </article>
          <article className="contact__option"  data-aos="fade-right" >
           <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>11 9 9120-7155</h5>
            <a href="https://api.whatsapp.com/send?phone=+5511991207155&text=Oi Ale! Tudo bem?" target='_blank'>WhatsApp Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}  data-aos="fade-right" >
          <input type="text" name='name' placeholder='Nome completo' required />
          <input type="text" name='email' placeholder='Seu email' required />
          <textarea name="message" id="7" placeholder='Sua mensagem.' required rows={10}></textarea>
          <button type="submit" className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact