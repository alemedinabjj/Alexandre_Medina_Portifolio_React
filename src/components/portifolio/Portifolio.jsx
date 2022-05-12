import React, { useEffect } from 'react'
import './portifolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'




const projectsDeveloper = [
  {
    id:1,
    image: IMG1,
    title: 'JL Higienizações',
    github: 'https://github.com/alemedinabjj/JL-hig-alt',
    demo: 'https://alemedinabjj.github.io/JL-hig-alt/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Burgos Engenharia',
    github: 'https://github.com/alemedinabjj/burgos_engenharia',
    demo: 'https://alemedinabjj.github.io/burgos_engenharia/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Ramiro Confecções',
    github: 'https://github.com/alemedinabjj/RamiroConfeccoes',
    demo: 'https://alemedinabjj.github.io/RamiroConfeccoes/'
  },
  {
    id:4,
    image: IMG4,
    title: 'Jogo da Velha',
    github: 'https://github.com/alemedinabjj/jogodaVelha',
    demo: 'https://alemedinabjj.github.io/jogodaVelha/'
  },
  {
    id:5,
    image: IMG5,
    title: 'Password Generator',
    github: 'https://github.com/alemedinabjj/passwordGenerator',
    demo: 'https://alemedinabjj.github.io/passwordgenerator/'
  },
  {
    id:6,
    image: IMG6,
    title: 'To do List',
    github: 'https://github.com/alemedinabjj/todolists',
    demo: 'https://alemedinabjj.github.io/todoLists/'
  },
]



const Portifolio = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <section id='portifolio'>
      <div className="divider2"></div>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portifólio</h2>

      <div className="container  portifolio__container">

        {
          projectsDeveloper.map(({id, image, title, github, demo}) => {
            return (
              <article  data-aos='fade-right' key={id} className="portifolio__item">
              <div  className="portifolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portifolio__item-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn  btn-primary' target='_blank'>DEMO</a>
              </div>
            
            </article>
            )
          })
        }

      </div>
      <div className="divider1"></div>
    </section>
  )
}

export default Portifolio