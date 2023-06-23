import React, { useState, useRef, useEffect } from 'react'
import styles from './exp.module.css'
import { useTheme } from '../Context/ThemeContext';

const Languages = ({ language }) => {

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
        <div className={`${styles.languageCont} ${isDarkMode ? styles.dark : ''}`} >
            <h3 className={isActive ? styles.active : ''}>
                {
                    language === 'es'
                        ? 'Idiomas'
                        : 'Languages'
                }
            </h3>
            <div ref={ref}>
                <span className={`${styles.langSpan} ${isActive ? styles.active : ''}`}>
                    <label className={styles.arg}></label>
                    <p>
                        {
                            language === 'es'
                                ? 'Nativo'
                                : 'Native'
                        }
                    </p>
                </span>
                <span className={`${styles.langSpan} ${isActive ? styles.active : ''}`}>
                    <label className={styles.usa}></label>
                    <p>C2</p>
                </span>
            </div>
        </div>
    )
}

export default Languages