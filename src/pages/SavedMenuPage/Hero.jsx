import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'
import foodpicnobg from '../../asset/chickennobg.png'
import { useNavigate } from 'react-router-dom'


function Hero() {

    let navigate = useNavigate()
    return (
        <div className="flex flex-col xl:flex-row h-screen">
            <div className="w-full xl:w-1/2 my-4 h-3/4 flex items-center justify-center">
                <div className="w-4/6">
                    <h1 className="tracking-tight font-light text-gray-500 text-4xl ">This is your</h1>
                    <h1 className="text-5xl  md:text-8xl tracking-tight leading-none font-extrabold text-[#E50914]">SavedMenu</h1>
                    <p className="text-lg text-gray-500 mt-2">
                        If you haven't saved the menu yet. You can go to select the menu at the menu page.
                    </p>
                    <a href="#" onClick={() => { navigate(`/MenuPage`) }} className="inline-block bg-[#535353] hover:bg-[#E50914] hover:opacity-50 mt-3 px-6 py-3 rounded-md text-white">EXPLORE</a>
                </div>
            </div>
            <div className="sm:w-[400px] md:w-[500px] xl:w-1/2 h-1/2 mx-auto">
                <Fade right duration={1000} delay={500}>
                    <img className="w-full" src={foodpicnobg} alt="Robot Group" />
                </Fade>
            </div>
        </div>

    )
}

export default Hero