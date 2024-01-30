import styles from './parallaxprovider.module.css'

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function ParallaxProvider() {
    return (
        <ParallaxBanner>
            <ParallaxBannerLayer image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" speed={-20} />
        </ParallaxBanner>

    )
}