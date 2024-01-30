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
            style={{
                minheight: '80rem', width: '100%'
            }}
        />

    )
}