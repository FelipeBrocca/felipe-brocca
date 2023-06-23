import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '../Context/ThemeContext'
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const ButtonTheme = () => {

    const { setIsDarkMode } = useTheme()
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

    const changeTheme = () => {
        setIsDarkMode(isDarkMode => !isDarkMode)
    }

    return (
        <label
            onClick={changeTheme}
            className={`${styles.toggleButton} ${isActive ? styles.active : ''}`}
            ref={ref}
        >
            <input type='checkbox' id='theme' />
            <FontAwesomeIcon icon={faMoon} className={styles.moon} />
            <FontAwesomeIcon icon={faSun} className={styles.sun} />
            <span className={styles.toggle}></span>
        </label>
    )
}

export default ButtonTheme