import React, { useState, useEffect } from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import Navbar from './Navbar'
import { useTheme } from '../Context/ThemeContext'
import ButtonTheme from './ButtonTheme'
import ButtonLanguage from './ButtonLanguage'

const HeaderContent = ({ toggleMenu, disToggle, setToggleMenu, isActive }) => {
    const { isDarkMode } = useTheme()

    const scrollToId = (id) => {
        if (document) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <>
            <Image
                src='/logo.png'
                width={500}
                height={500}
                alt='logo-principal'
                priority={true}
                className={styles.logo}
                onClick={() => scrollToId('presentation-section')}
            />
            <div className={`${styles.headerContent} ${isDarkMode ? styles.dark : ''}`}>
                <div className={styles.contextMang}>
                    <ButtonTheme />
                    <ButtonLanguage />
                </div>
                <div
                    className={
                        isDarkMode
                            ? styles.hambMenuDark
                            : styles.hambMenu
                    }
                    onClick={disToggle}
                    style={{ justifyContent: toggleMenu ? 'center' : 'space-around' }}
                >
                    <div
                        className={styles.hamb1}
                        style={{ rotate: toggleMenu ? '45deg' : '0deg' }}
                    ></div>
                    <div
                        className={styles.hamb2}
                        style={{ display: toggleMenu ? 'none' : 'block' }}
                    ></div>
                    <div
                        className={styles.hamb3}
                        style={{ rotate: toggleMenu ? '-45deg' : '0deg' }}
                    ></div>
                </div>
                <div className={`${styles.navbarBig} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
                    <Navbar />
                </div>
            </div >
            <div className={
                toggleMenu
                    ? styles.menuCont
                    : styles.menuContClosed
            } style={{ backgroundColor: isDarkMode ? 'var(--black)' : 'var(--white)' }}>
                <Navbar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} isActive={isActive} />
            </div>
        </>
    )
}

export default HeaderContent