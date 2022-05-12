import React, { useEffect } from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const testimonialsClient = [
  { 
    idTestimonial: 1,
    img: AVTR1,
    name: 'Ramiro Gutierrez Ulloa',
    testimonial: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tempora sapiente ipsa vel debitis libero numquam dicta quia et alias, dolorum, accusantium obcaecati autem. Exercitationem laboriosam corrupti voluptate repudiandae obcaecati.'
  },
  {
    idTestimonial: 2,
    img: AVTR2,
    name: 'Jeferson Luiz dos Santos',
    testimonial: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tempora sapiente ipsa vel debitis libero numquam dicta quia et alias, dolorum, accusantium obcaecati autem. Exercitationem laboriosam corrupti voluptate repudiandae obcaecati.'
  },
  {
    idTestimonial: 3,
    img: AVTR3,
    name: 'Irton de Souza Medina',
    testimonial: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tempora sapiente ipsa vel debitis libero numquam dicta quia et alias, dolorum, accusantium obcaecati autem. Exercitationem laboriosam corrupti voluptate repudiandae obcaecati.'
  },
  {
    idTestimonial: 4,
    img: AVTR4,
    name: 'Jarbas Burgos',
    testimonial: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tempora sapiente ipsa vel debitis libero numquam dicta quia et alias, dolorum, accusantium obcaecati autem. Exercitationem laboriosam corrupti voluptate repudiandae obcaecati.'
  }
]


const Testimonials = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <section id='testimonials' data-aos="zoom-in">
      <h5>O que os clientes dizem?</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      
        {
          testimonialsClient.map(({idTestimonial, img, name, testimonial}) => {
            return (
              <SwiperSlide key={idTestimonial}  className="testimonial">
              <div className="client__avatar">
              <img src={img} alt="Foto de cliente 1" />
            </div>
            <small className="client__review">
            <h5 className='client__name'>{name}</h5>
              {testimonial}
              </small>
          </SwiperSlide>
            )
            
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials