import Image from "next/image"
import styles from "./intro.module.css"
import { useTheme } from "../Context/ThemeContext"

const Intro = () => {

    const { isDarkMode } = useTheme()

    return (
        <div className={
            isDarkMode
                ? styles.logoContDark
                : styles.logoCont
        }>
            <Image
                src='/logo.png'
                alt="logo"
                width={500}
                height={500}
                className={styles.logo}
                priority={true}
            />
        </div>
    )
}

export default Intro