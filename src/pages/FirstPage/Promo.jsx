import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'


function Promo() {
    return (
        <div name='promo' className='grid 
        grid-cols-6 lg:grid-cols-14 gap-[50px]
        relative bg-[#212122] px-8 md:px-[0.5rem]
        lg:pt-[50px] 2xl:pt-[50px] pb-[120px] -mt-[1px] z-20'>
            <div className='col-span-full md:col-start-2
            md:col-end-8 mx-auto flex'>
                <div className='flex flex-col gap-[50px]
                justify-center text-center md:text-left'>
                    <div className='flex flex-col gap-[10px]'>
                        <Fade left >

                            <h1 className='text-[50px] md:text-[60px] 
                        font-semibold text-[#e3ff8a]
                        leading-none'>Enjoy the new taste</h1>
                        </Fade>
                    </div>
                    <Fade delay={1000}>
                        <p className='text-white'>Unique taste, can't remember the recipe, Delicious, pleasing, hygiene forgotten.</p>
                    </Fade>
                </div>
            </div>
            <div className='relatibe col-span-full 
            mx-auto md:col-start-9 md:col-end-15'>

                <Zoom delay={1000}>
                    <img className='object-cover drop-shadow-2xl' src="https://www.transparentpng.com/thumb/cocktail/Wn0aLv-cocktail-free-cut-out.png" alt="/" />
                </Zoom>

            </div>

        </div>
    )
}

export default Promo

