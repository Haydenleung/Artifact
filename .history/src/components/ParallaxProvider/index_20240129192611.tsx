import styles from './parallaxprovider.module.css'

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function ParallaxProvider() {
    return (
        <ParallaxBanner
            layers={[
                {
                    image: './static/banner.png',
                    speed: -20,
                },
            ]}
            style={{ aspectRatio: '2 / 1', zIndex: 999 }}
        />

    )
}