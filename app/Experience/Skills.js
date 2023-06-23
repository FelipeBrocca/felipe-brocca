import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './exp.module.css'
import { useTheme } from '../Context/ThemeContext'

const Skills = ({ language }) => {

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

    const logos = [
        {
            src: 'javascript.png',
            label: 'Javascript'
        },
        {
            src: 'html.png',
            label: 'HTML'
        },
        {
            src: 'nodejs.png',
            label: 'Node JS'
        },
        {
            src: 'css.png',
            label: 'CSS'
        },
        {
            src: 'express.png',
            label: 'Express JS'
        },
        {
            src: 'native.jpg',
            label: 'React Native'
        },
        {
            src: 'mySql.png',
            label: 'MySQL'
        },
        {
            src: 'react.png',
            label: 'React JS'
        },
        {
            src: 'mongoDB.png',
            label: 'MongoDB'
        },
        {
            src: 'next.png',
            label: 'Next JS'
        },
        {
            src: 'sequelize.png',
            label: 'Sequelize'
        },
        {
            src: 'angular.png',
            label: 'Angular'
        }
    ]

    return (
        <div className={styles.skillsCont}>
            <p className={`${styles.skillTitle} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`} ref={ref}>
                {
                    language === 'es'
                        ? "Tecnologías que usé recientemente."
                        : "Technologies I've recently used."
                }
            </p>
            <ul className={`${styles.skillsList} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
                {
                    logos.map((logo, index) => (

                        <li key={index}>
                            <Image
                                priority={true}
                                width={200}
                                height={200}
                                src={`/${logo.src}`}
                                alt='logo'
                            />
                            <label>{logo.label}</label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Skills