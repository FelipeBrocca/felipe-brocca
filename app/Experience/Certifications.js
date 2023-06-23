import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './exp.module.css'
import { useTheme } from '../Context/ThemeContext'

const Certifications = ({ language, handleWatchDigital, viewDigital }) => {

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


    const handleLinkClick = () => {
        window.open('https://www.efset.org/cert/Ar3tom', '_blank');
    };

    return (
        <>
            <div className={styles.certifSection} ref={ref}>
                <div className={`${styles.certification} ${isActive ? styles.active : ''}`}>
                    <h3 className={styles.certTitle}>
                        {
                            language === 'es'
                                ? 'Certificado Digital House'
                                : 'Digital House Certificate'
                        }
                    </h3>
                    <p className={`${styles.certSubTit} ${isDarkMode ? styles.certSubTit : ''}`}>
                        {
                            language === 'es'
                                ? 'Desarrollador Web Fullstack'
                                : 'Fullstack Web Developer'
                        }
                    </p>
                    <div className={styles.certCont}>
                        {
                            viewDigital
                                ? null
                                : <p className={styles.watchCert}>
                                    <Image
                                        width={1096}
                                        height={791}
                                        priority={true}
                                        src='/digitalH.png'
                                        className={`${styles.digital} ${isDarkMode ? styles.dark : ''}`}
                                        alt='digital'
                                        onClick={handleWatchDigital}
                                    />
                                </p>
                        }
                    </div>
                </div>
                <div className={`${styles.certification} ${isActive ? styles.active : ''}`}>
                    <h3 className={styles.certTitle}>
                        {
                            language === 'es'
                                ? 'Certificado EF SET'
                                : 'EF SET Certificate'
                        }
                    </h3>
                    <p className={`${styles.certSubTit} ${isDarkMode ? styles.certSubTit : ''}`}>
                        {
                            language === 'es'
                                ? 'Examen de Inglés'
                                : 'English level exam'
                        }
                    </p>
                    <div className={styles.certCont}>
                        <a
                            onClick={handleLinkClick}
                            className={styles.watchCert}
                        >
                            <Image
                                width={1096}
                                height={791}
                                priority={true}
                                src='/efset1.png'
                                className={`${styles.efset} ${isDarkMode ? styles.dark : ''}`}
                                alt='efset'
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.backdropPopUpCert} style={{ display: viewDigital ? 'grid' : 'none' }} onClick={handleWatchDigital}>
                <Image
                    width={1096}
                    height={791}
                    priority={true}
                    src='/digitalH.png'
                    className={styles.digital}
                    alt='digital'
                />
            </div>
        </>
    )
}

export default Certifications