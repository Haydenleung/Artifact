import styles from './parallaxprovider.module.css'

import { ParallaxBanner } from "react-scroll-parallax";

export default function ParallaxProvider() {
    return (
        <ParallaxBanner>
            <ParallaxBannerLayer image="https://foo.com/foo.jpg" speed={-20} />
        </ParallaxBanner>

    )
}