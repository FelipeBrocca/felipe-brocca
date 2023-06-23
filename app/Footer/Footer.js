import React from 'react'
import styles from './footer.module.css'
import { useLang } from '../Context/LangContext'
import SocialMedia from '../Contact/SocialMedia'
import { useTheme } from '../Context/ThemeContext'

const Footer = () => {

  const { isDarkMode } = useTheme()
  const { language } = useLang()

  return (
    <footer className={`${styles.footerCont} ${isDarkMode ? styles.dark : ''}`}>
      <SocialMedia />
      <p>
        {
          language === 'es'
            ? 'Desarrollado por '
            : 'Developed by '
        }
        <strong>EffeBe</strong></p>
    </footer>
  )
}

export default Footer