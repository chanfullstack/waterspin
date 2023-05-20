import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import banner from '../../asset/banner.jpg'

function Banner() {
    return (
        <ParallaxBanner
            layers={[
                {
                    image: banner,
                    speed: -20,
                    scale: [1, 1.2],
                    opacity: [0.9, 1]
                },
            ]}
            style={{ aspectRatio: '3 / 1', height: "500px" }}
        />
    )
}

export default Banner