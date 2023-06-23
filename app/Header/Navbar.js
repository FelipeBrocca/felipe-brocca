import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import styles from './header.module.css'
import { useLang } from '../Context/LangContext'
import SocialMedia from '../Contact/SocialMedia'

const Navbar = ({ toggleMenu, setToggleMenu }) => {

    const { isDarkMode } = useTheme()
    const { language } = useLang()

    const scrollToId = (id) => {
        if (document) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (toggleMenu) {
            setToggleMenu(toggleMenu => !toggleMenu)
        }
    }

    return (
        <nav className={styles.navbar}>
            <ul className={
                isDarkMode
                    ? styles.listNavbarDark
                    : styles.listNavbar
            }>
                {
                    language === 'es'
                        ? <>
                            <li className={`${styles.navBarItem} ${styles.firstbut}`} onClick={() => scrollToId('about-section')}>Sobre mí</li>
                            <li className={`${styles.navBarItem} ${styles.centerBut}`} id='centerBut' onClick={() => scrollToId('education-section')}>Educación</li>
                            <li className={`${styles.navBarItem} ${styles.centerBut}`} id='centerBut' onClick={() => scrollToId('works-section')}>Trabajo</li>
                            <li className={`${styles.navBarItem} ${styles.lastBut}`} onClick={() => scrollToId('contact-section')}>Contacto</li>
                        </>
                        : <>
                            <li className={`${styles.navBarItem} ${styles.firstbut}`} onClick={() => scrollToId('about-section')}>About</li>
                            <li className={`${styles.navBarItem} ${styles.centerBut}`} id='centerBut' onClick={() => scrollToId('education-section')}>Education</li>
                            <li className={`${styles.navBarItem} ${styles.centerBut}`} id='centerBut' onClick={() => scrollToId('works-section')}>Work</li>
                            <li className={`${styles.navBarItem} ${styles.lastBut}`} onClick={() => scrollToId('contact-section')}>Contact</li>
                        </>
                }
            </ul>
            <div className={styles.socMedNav}>
                <SocialMedia />
            </div>
            {/* <ControlsAudio /> */}
        </nav>
    )
}

export default Navbar