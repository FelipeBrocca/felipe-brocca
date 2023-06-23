import React, { useState, useEffect } from 'react'
import styles from './header.module.css'
import { useTheme } from '../Context/ThemeContext'
import HeaderContent from './HeaderContent'
import HeaderFixed from './HeaderFixed'
import Navbar from './Navbar'



const Header = () => {

  const { isDarkMode } = useTheme()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setIsActive(true)
    }, 300)
  }, []);

  const disToggle = () => {
    setToggleMenu(togglemenu => !togglemenu)
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };


    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const headerElement = document.getElementById('headerCont');

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, []);

  return (
    <>
      {
        <div className={
          isDarkMode
            ? styles.backdropPopUpDark
            : styles.backdropPopUp
        }
          onClick={disToggle}
          style={{ display: toggleMenu ? 'flex' : 'none' }}
        ></div>
      }
      <div className={`${styles.headerCont} ${isActive ? styles.active : ''} ${isDarkMode ? '' : styles.bright}`} id='headerCont'>
        <HeaderContent disToggle={disToggle} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} isActive={isActive} />
      </div>
      <HeaderFixed scrolled={scrolled} disToggle={disToggle} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className={
        toggleMenu
          ? styles.menuCont
          : styles.menuContClosed
      } style={{ backgroundColor: isDarkMode ? 'var(--black)' : 'var(--white)' }}>
        <div
                    className={
                        `${isDarkMode
                            ? styles.hambMenuDark
                            : styles.hambMenu} ${toggleMenu ? styles.open : ''}`
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
        <Navbar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} isActive={isActive} />
      </div>
    </>
  )
}

export default Header






