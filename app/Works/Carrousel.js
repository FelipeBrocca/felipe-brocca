import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper'
import "swiper/css"
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow"
import styles from './work.module.css'
import Image from 'next/image'

import { freeJobs } from './freeJobs'
import { useTheme } from '../Context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useLang } from '../Context/LangContext'

const Carrousel = () => {

    const { isDarkMode } = useTheme()
    const { language } = useLang()
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

    const handleClick = (link) => {
        window.open(link, '_blank');
    }


    return (
        <div className={styles.ownBuilt}>
            <h2 className={`${styles.titleBuilt} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`} ref={ref}>
                {
                    language === 'es'
                        ? 'Algunos trabajos que hice'
                        : "Some things I've built"
                }
            </h2>
            <Swiper
                modules={[EffectCoverflow, Pagination]}
                pagination={{ type: 'fraction', clickable: true }}
                centeredSlides={true}
                slidesPerView="auto"
                loop
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                className={`${styles.sliderWrapper} ${isDarkMode ? styles.dark : ''} ${isActive ? styles.active : ''}`}
            >
                <div>
                    {
                        freeJobs.map((job, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.freeJobs} key={index}>
                                    <h3 className={`${styles.titleJob} ${isDarkMode ? styles.dark : ''}`}>{job.title}</h3>
                                    <p className={`${styles.about} ${isDarkMode ? styles.dark : ''}`}>
                                        {
                                            language === 'es'
                                                ? `${job.spanish.about}`
                                                : `${job.english.about}`
                                        }
                                    </p>
                                    <div className={`${styles.tasks} ${isDarkMode ? styles.dark : ''}`}>
                                        {
                                            language === 'es'
                                                ? job.spanish.tasks.map((task, index) => (
                                                    <p className={styles.liTask} key={index}>{task.desc}</p>
                                                ))
                                                : job.english.tasks.map((task, index) => (
                                                    <p className={styles.liTask} key={index}>{task.desc}</p>
                                                ))
                                        }
                                    </div>
                                    <div className={`${styles.techs} ${isDarkMode ? styles.dark : ''}`}>
                                        {
                                            job.tech.map((tech, index) => (
                                                <p key={index}>{tech.name}</p>
                                            ))
                                        }
                                    </div>
                                    {
                                        job.src
                                            ? job.src.bright
                                                ? <Image
                                                    src={
                                                        isDarkMode ? job.src.bright : job.src.dark
                                                    }
                                                    width={300}
                                                    height={300}
                                                    priority={true}
                                                    className={`${styles.freeImg} ${isDarkMode ? styles.dark : ''}`}
                                                    alt='free-im'
                                                />
                                                : <Image
                                                    src={job.src}
                                                    width={300}
                                                    height={300}
                                                    priority={true}
                                                    className={`${styles.freeImg} ${isDarkMode ? styles.dark : ''}`}
                                                    alt='free-im'
                                                />
                                            : null
                                    }
                                    <div className={styles.links}>
                                        <a className={
                                            isDarkMode
                                                ? styles.linkGitDark
                                                : styles.linkGit
                                        }
                                            onClick={() => handleClick(job.link.github)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512" className={`${styles.gitIcon} ${isDarkMode ? styles.dark : ''}`}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                        </a>
                                        {
                                            job.link.page
                                                ? <a
                                                    onClick={() => handleClick(job.link.page)}
                                                >
                                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}
                                                        className={`${styles.pageIcon} ${isDarkMode ? styles.dark : ''}`}
                                                    />
                                                </a>
                                                : null
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper >
                <span className={`${styles.slideHelp} ${isDarkMode ? styles.dark : ''}`}>
                <p>&lt;&lt;</p>
                <p>{language === 'es' ? 'Deslizar' : 'Slide'}</p>
                <p>&gt;&gt;</p>
            </span>
        </div>
    )
}

export default Carrousel