import React, { useState, useRef, useEffect } from 'react'
import styles from './exp.module.css'
import { useLang } from '../Context/LangContext'
import Certifications from './Certifications'
import Languages from './Languages'
import Skills from './Skills'
import { useTheme } from '../Context/ThemeContext'

const Experience = () => {

    const { isDarkMode } = useTheme()
    const { language } = useLang()
    const [viewDigital, setViewDigital] = useState(false)
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

    const handleWatchDigital = () => {
        setViewDigital(viewDigital => !viewDigital)
    }

    return (
        <>
            <section className={`${styles.section} ${isDarkMode ? styles.dark : ''}`} id='education-section'>
                <h2 className={`${styles.title} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`} ref={ref}>
                    {
                        language === 'es'
                            ? 'Educación'
                            : 'Education'
                    }
                </h2>

                <Certifications
                    language={language}
                    handleWatchDigital={handleWatchDigital}
                    viewDigital={viewDigital}
                />

                <Languages
                    language={language}
                />

                <Skills
                    language={language}
                />

            </section>
        </>
    )
}

export default Experience