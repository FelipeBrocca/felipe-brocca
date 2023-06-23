import React, { useEffect, useState, useRef } from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import { useLang } from '../Context/LangContext'
import { useTheme } from '../Context/ThemeContext'

const About = () => {

  const { isDarkMode } = useTheme()
  const { language } = useLang()
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsActive(true);
        observer.unobserve(entry.target);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.section} ${isDarkMode ? styles.dark : ''}`} id='about-section'>
      <h2 className={`${styles.title} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
        {
          language === 'es'
            ? 'Sobre mí'
            : 'About me'
        }
      </h2>
      <div ref={ref} className={`${styles.aboutCont} ${isDarkMode ? styles.dark : ''}`}>
        <div className={`${styles.imgCont} ${isDarkMode ? styles.dark : ''}`}>
          <Image
            src='/foto cv.jpg'
            width={400}
            height={400}
            alt='profile-im'
            className={`${styles.profileImage} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}
            priority={true}
          />
        </div>
        {
          language === 'es'
            ? <p className={`${styles.aboutText} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
              ¡Hola! Soy Felipe Brocca, un desarrollador fullstack ubicado en CABA, Argentina. Aparte de mi pasión por la tecnología, disfruto mucho del deporte, la música y pasar tiempo con mi familia y amigos. Me considero una persona muy sociable y me encanta trabajar en equipo en entornos laborales.
              <br /><br />
              Comencé mi trayectoria en 2021, aprendiendo de manera autodidacta a través de videos y cursos en línea. En 2022, completé y obtuve el certificado del curso Fullstack Web Developer de Digital House.
              <br /><br />
              Actualmente, trabajo como freelancer para clientes y también tengo proyectos propios. Siempre estoy buscando aprender y aplicar las últimas tendencias en tecnología. Mi objetivo es encontrar un lugar donde pueda seguir creciendo y aplicar mis habilidades de desarrollo.
            </p>
            : <p className={`${styles.aboutText} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
              Hello! I&apos;m Felipe Brocca, a full-stack developer based in Buenos Aires, Argentina. Besides my passion for technology, I greatly enjoy sports, music, and spending time with my family and friends. I consider myself a very sociable person and love working in team environments.
              <br /><br />
              I started my journey in 2021, learning self-taught through videos and online courses. In 2022, I completed and obtained the certificate for the Fullstack Web Developer course at Digital House.
              <br /><br />
              Currently, I work as a freelancer for clients and also have my own projects. I&apos;m always seeking to learn and apply the latest technology trends. My goal is to find a place where I can continue to grow and apply my development skills.
            </p>
        }
      </div>
    </section>
  )
}

export default About