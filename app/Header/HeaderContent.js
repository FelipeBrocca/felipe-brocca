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
                        `${isDarkMode
                            ? styles.hambMenuDark
                            : styles.hambMenu} ${toggleMenu ? styles.open : ''}`
                    }
                    onClick={disToggle}
                >
                    <div
                        className={styles.hamb1}
                    ></div>
                    <div
                        className={styles.hamb2}
                    ></div>
                    <div
                        className={styles.hamb3}
                    ></div>
                </div>
                <div className={`${styles.navbarBig} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}>
                    <Navbar />
                </div>
            </div >
        </>
    )
}

export default HeaderContent