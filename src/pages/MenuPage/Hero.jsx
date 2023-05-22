import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'
import heroImg from "../../asset/cover.jpg"




function Hero({ inputVal, onValueChange }) {
    return (
        <div name='home' className='grid grid-cols-6 
        lg:grid-cols-14 h-screen bg-[#212122] text-[#e3ff8a]
        px-[1rem] md:px-[0.5rem]'
        >
            <div className='col-span-full 
            md:col-start-5 md:col-end-7
            lg:col-start-9 lg:col-end-15 
            2xl:col-start-10 2xl:col-end-15 
            text-center md:text-left items-center
            md:items-start flex flex-col gap-[50px] 
            md:gap-[100px] lg:gap-[70px] 
            mt-[50px] md:mt-[100px] 
            lg:mt-[100px] z-[5]'>
                <Fade right>
                    <p className='text-[57px] md:text-5xl lg:text-[85px]
                    font-bold leading-none'>EXPLORE FOOD</p>
                </Fade>

                <div>
                    <Fade right delay={600}>
                        <h1 className='text-[40px] 
                    lg:text-6xl font-normal
                    leading-none'>
                            YOU CAN FIND THE MENU HERE
                        </h1>
                    </Fade>

                </div>

                <Zoom bottom delay={1200} duration={900}>
                    <form action="" className='text-[25px] mt-0 lg:text-[30px] w-fit px-[5px] 
                    py-[5px] lg:px-[5px] border-none outline-none text-[#212122] 
                    font-bold hover:bg-[#555b4e] hover:cursor-pointer hover:opacity-[0.9] rounded-[5px] hover:rounded-3xl '>

                        <input type="text"
                            className='px-5 rounded-3xl '
                            placeholder="Search here..."
                            value={inputVal}
                            onChange={(input) => { onValueChange(input.target.value) }} />
                    </form>
                </Zoom>


            </div>
            <div>
                <img className='h-screen w-full
                object-cover absolute top-0 left-0 z-[0]'
                    src={heroImg} alt="/" />
            </div>
        </div>
    )
}

export default Hero