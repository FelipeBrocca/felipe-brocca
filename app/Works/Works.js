import React, { useState, useRef, useEffect } from 'react'
import styles from './work.module.css'
import Image from 'next/image'
import Carrousel from './Carrousel'
import { useLang } from '../Context/LangContext'
import { useTheme } from '../Context/ThemeContext'


const Works = () => {

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
        <section className={styles.section} id='works-section'>
            <h2 className={`${styles.title} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`} ref={ref}>{
                language === 'es'
                    ? 'Trabajo'
                    : 'Work'
            }</h2>
            <div className={styles.worksCont}>
                <div className={`${styles.unicred} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
                    <h3 className={`${styles.workTit} ${isDarkMode ? styles.dark : ''}`}>Unicred LTDA -</h3>
                    <Image
                        src='/logounicred2.png'
                        width={500}
                        height={180}
                        alt='unicred'
                        priority={true}
                        className={styles.unicredLogo}
                    />
                    {
                        language === 'es'
                            ? <>
                                <p className={`${styles.workTime} ${isDarkMode ? styles.dark : ''}`}>Septiembre 2022 - Actualidad</p>
                                <p className={`${styles.workDes} ${isDarkMode ? styles.dark : ''}`}>Desarrollo en sitios y app web de Unicred.</p>
                                <p className={`${styles.workTec} ${isDarkMode ? styles.dark : ''}`}>Algunas tecnologías: </p>
                            </>
                            : <>
                                <p className={`${styles.workTime} ${isDarkMode ? styles.dark : ''}`}>September 2022 - Present</p>
                                <p className={`${styles.workDes} ${isDarkMode ? styles.dark : ''}`}>Development in websites and web applications for Unicred.</p>
                                <p className={`${styles.workTec} ${isDarkMode ? styles.dark : ''}`}>Some technologies used: </p>
                            </>
                    }
                    <div className={`${styles.tecWorkCont} ${isDarkMode ? styles.dark : ''}`}>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>REACT</p>
                        <p>NODE JS</p>
                        <p>EXPRESS JS</p>
                    </div>
                </div>
            </div>
            <Carrousel />
        </section>
    )
}

export default Works