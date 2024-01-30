import styles from './parallaxprovider.module.css'

import { ParallaxBanner } from "react-scroll-parallax";

export default function ParallaxProvider() {
    return (
        <ParallaxBanner
            layers={[{ image: '../../../public/image/moneyment/banner2.webp', speed: -15 }]}
            className="aspect-[2/1]"
        />
    )
}