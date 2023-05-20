import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Navbar from './Navbar'
import Hero from './Hero'
import Promo from './Promo'
import Banner from './Banner'
import Menu from './Menu'
import Footer from './Footer'

const FirstPage = () => {
    return (
        <ParallaxProvider>
            <Navbar />
            <Hero />
            <Promo />
            <Banner />
            <Menu />
            <Footer />
        </ParallaxProvider>
    )
}

export default FirstPage