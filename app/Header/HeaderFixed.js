import React from 'react'
import HeaderContent from './HeaderContent'
import styles from './header.module.css'
import { useTheme } from '../Context/ThemeContext'


const HeaderFixed = ({ scrolled, disToggle, toggleMenu, setToggleMenu }) => {

    const { isDarkMode } = useTheme()

    return (
        <div className={`${styles.headerFixedCont} ${isDarkMode ? styles.dark : ''} ${scrolled ? styles.active : ''}`} style={{display: toggleMenu ? 'none' : ''}}>
            <HeaderContent isActive={true} disToggle={disToggle} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </div>
    )
}

export default HeaderFixed