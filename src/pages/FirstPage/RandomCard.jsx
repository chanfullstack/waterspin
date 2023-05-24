import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

const RandomCard = ({ water }) => {


    return (
        <Fade>
            <div className='bg-[#353630] shadow-2xl rounded-[10px] hover:cursor-pointer transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out h-full'>
                <div className='flex flex-col h-full'>
                    <div className='relative lg:h-[350px]'>
                        <img className='w-full h-full object-cover ' src={water.WaterPicture} alt="" />
                    </div>
                    <div className='p-4 md:p-8'>
                        <div className='flex flex-row justify-between'>
                            <h3 className='font-bold text-center text-2xl mb-6 text-[#a3b666]'>
                                {water.MenuName}
                            </h3>
                            <h3 className='font-bold text-center text-2xl mb-6 text-white'>
                                ฿{water.Price}
                            </h3>

                        </div>

                        <p className='text-white lg:text-xl w-full tab:w-[70%]
                                    md:w-full'>
                            {water.Descript}
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default RandomCard