"use client"
import styles from './page.module.css'
import { useTheme } from './Context/ThemeContext'
import { useEffect, useState } from 'react'

import Head from 'next/head'
import Intro from './Intro/Intro'
import Header from './Header/Header'
import Presentation from './Presentation/Presentation'
import About from './About/About'
import Experience from './Experience/Experience'
import Works from './Works/Works'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

export default function Home() {

  const [loading, setLoading] = useState(true)
  const { isDarkMode } = useTheme()

  setTimeout(() => {
    setLoading(false)
  }, 4000)

  useEffect(() => {
    if (typeof document !== 'undefined') {

      let body = document.getElementById('body');

      if (isDarkMode) {
        body.style.backgroundColor = 'var(--black)';
      } else {
        body.style.backgroundColor = 'var(--white)';
      }
    }
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu:wght@100&display=swap" rel="stylesheet" />
      </Head>
      {
        loading
          ? isDarkMode !== null
            ? <main className={
              isDarkMode
                ? styles.mainIntroDark
                : styles.mainIntro
            }
            >
              <Intro />
            </main>
            : null
          :
          <main className={
            isDarkMode
              ? styles.mainPageDark
              : styles.mainPageBright
          }>
            <Header />
            <Presentation />
            <About />
            <Experience />
            <Works />
            <Contact />
            <Footer />
          </main>
      }
    </>
  )
}
