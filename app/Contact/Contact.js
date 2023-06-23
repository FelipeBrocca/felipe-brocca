import React, { useRef, useState, useEffect } from 'react'
import styles from './contact.module.css'
import { useLang } from '../Context/LangContext'
import { useTheme } from '../Context/ThemeContext'

const Contact = () => {


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
        <section className={styles.section} id='contact-section'>
            {
                language === 'es'
                    ? <>
                        <h2 className={`${styles.title} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`} ref={ref}>Contacto</h2>
                        <h2 className={`${styles.subTitle} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>Sigamos en contacto!</h2>
                        <p className={`${styles.text} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
                            Estoy en busca de un entorno laboral que me brinde la oportunidad de seguir desarrollándome como profesional, donde pueda continuar aprendiendo y, a su vez, compartir mis conocimientos. Disfruto colaborar en equipo y tengo un gran interés por adquirir nuevos conocimientos. Si crees que encajo en alguno de sus equipos, le agradecería que se ponga en contacto conmigo.
                            <br></br><br></br>
                            Gracias por pasar!
                        </p>
                        <a
                            className={`${styles.button56} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}
                            href='mailto:brocca.felipe@gmail.com'
                            rel='noopener noreferrer'
                            target='_blanck'
                        >
                            Escribime!
                        </a>
                    </>
                    : <>
                        <h2 className={`${styles.title} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>Contact</h2>
                        <h2 className={`${styles.subTitle} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>Let&apos;s keep in touch!</h2>
                        <p className={`${styles.text} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
                            I&apos;m seeking a work environment that provides me with the opportunity to continue developing as a professional, where I can keep learning and, at the same time, share my knowledge. I enjoy collaborating in teams and have a strong interest in acquiring new skills. If you believe that I would be a good fit for any of your teams, I would appreciate it if you could get in touch with me.
                            <br></br><br></br>
                            Thanks for passing by!
                        </p>
                        <a
                            className={`${styles.button56} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}
                            href='mailto:brocca.felipe@gmail.com'
                            rel='noopener noreferrer'
                            target='_blanck'
                        >
                            Say Hi!
                        </a>
                    </>
            }
        </section>
    )
}

export default Contact