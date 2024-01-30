import styles from './parallaxprovider.module.css'
import bg from './static/banner.webp'
import { ParallaxBanner } from "react-scroll-parallax";

export default function ParallaxProvider() {
    return (
        <ParallaxBanner
            layers={[
                {
                    image: `${bg.src}`,
                    speed: -20,
                },
            ]}
            style={{ min- height: '80rem', width: '100%'
}}
/>

    )
}