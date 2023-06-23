import React, { useState, useRef, useEffect } from 'react'
import styles from './presentation.module.css'
import { useLang } from '../Context/LangContext'
import { useTheme } from '../Context/ThemeContext'


const Presentation = () => {

  const { language } = useLang()
  const { isDarkMode } = useTheme()
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
    <section ref={ref} className={styles.section} id='presentation-section' >
      {
        language === 'es'
          ? <>
            <div className={`${styles.pres1} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
              Hola, soy
            </div>
            <h1 className={`${styles.pres2} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
              Felipe Brocca.
            </h1>
            <div className={`${styles.pres3} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
              Desarrollador fullstack.
            </div>
            <div className={`${styles.pres4} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>Apasionado por lo que hago. Siempre en busca de nuevos conocimientos y crecimiento profesional. Mi objetivo es crear proyectos de alta calidad y brindar experiencias excepcionales a los usuarios.
            </div>
            <a
              className={`${styles.button56} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}
              href='/CV - Felipe Brocca (esp).pdf'
              download
            >
              Descargar CV
            </a>
          </>
          : <>
            <p className={`${styles.pres1} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
              Hi, I&apos;m
            </p>
            <h1 className={`${styles.pres2} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
              Felipe Brocca.
            </h1>
            <div className={`${styles.pres3} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
              Fullstack Developer.
            </div>
            <div className={`${styles.pres4} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>Passionate about what I do. Always in search of new knowledge and professional growth. My goal is to create high-quality projects and provide exceptional user experiences.
            </div>
            <a
              className={`${styles.button56} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}
              href='/CV - Felipe Brocca (eng).pdf'
              download
            >
              My Resume
            </a>
          </>
      }
      {/* <Speaker /> */}
    </ section>
  )
}

export default Presentation


