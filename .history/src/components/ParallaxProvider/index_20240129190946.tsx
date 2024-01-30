import { ParallaxBanner } from "react-scroll-parallax";

export default function ParallaxProvider() {
    <ParallaxBanner
        layers={[{ image: '/static/banner.jpg', speed: -15 }]}
        className="aspect-[2/1]"
    />
}