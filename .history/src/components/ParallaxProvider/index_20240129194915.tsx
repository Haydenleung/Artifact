import styles from './parallaxprovider.module.css'
import bg from './static/banner3.webp'
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
            style={{
                minHeight: '50vw', width: '100%'
            }}
        />

    )
}