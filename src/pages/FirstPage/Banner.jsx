import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

function Banner() {
    return (
        <ParallaxBanner
            layers={[
                {
                    image: "https://cdn.tgdd.vn/2020/07/CookProduct/commercial0040-1200x676.jpg",
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