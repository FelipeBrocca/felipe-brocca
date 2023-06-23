import React, { useState, useRef, useEffect } from 'react'
import { useLang } from '../Context/LangContext'
import styles from './lang.module.css'
import { useTheme } from '../Context/ThemeContext'

const ButtonLanguage = () => {

    const { language, changeLanguage } = useLang()
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

    const manageLanguage = (curr) => {
        if (curr === 'es') {
            changeLanguage('en')
        } else {
            changeLanguage('es')
        }
    }

    return (
        <label
            onClick={() => manageLanguage(language)}
            className={`${styles.toggleButton} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}
            ref={ref}
        >
            <input type='checkbox' className={styles.lang} />
            <span className={styles.eng}></span>
            <span className={styles.esp}></span>
        </label>
    )
}

export default ButtonLanguage