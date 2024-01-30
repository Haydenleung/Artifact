import styles from './parallaxprovider.module.css'

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function ParallaxProvider() {
    return (
        <ParallaxBanner
            layers={[
                {
                    image: 'https://t3.ftcdn.net/jpg/05/41/83/70/360_F_541837068_6Mp2TJrMcZIFPwR5bDMRNG2GVEF394UL.jpg',
                    speed: -20,
                },
            ]}
            style={{ aspectRatio: '2 / 1', zIndex: 999 }}
        />

    )
}