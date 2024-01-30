import styles from './parallaxprovider.module.css'

import { ParallaxBanner } from "react-scroll-parallax";

export default function ParallaxProvider() {
    return (
        <ParallaxBanner
            layers={[{ image: '../../../public/image/moneyment/banner2.png', speed: -15 }]}
            className={styles.banner}
        />
    )
}