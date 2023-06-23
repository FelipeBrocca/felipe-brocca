import React from 'react'
import HeaderContent from './HeaderContent'
import styles from './header.module.css'


const HeaderFixed = ({ scrolled, disToggle, toggleMenu, setToggleMenu }) => {
    return (
        <div className={`${styles.headerFixedCont} ${scrolled ? styles.active : ''}`}>
            <HeaderContent isActive={true} disToggle={disToggle} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </div>
    )
}

export default HeaderFixed