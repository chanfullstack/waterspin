import React, { useState } from 'react'
import useMediaQuery, { breakPoints } from '../../hooks/useMediaQuery'
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const isDesktop = useMediaQuery(breakPoints.md)
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)

    let navigate = useNavigate()

    return (
        <div className='grid grid-cols-6 
        lg:grid-cols-14 relative h-[80px] z-10 drop-shadow-lg 
        text-[#a3b666] mr-[30px]'>


            <div className='col-start-6 col-end-6 
            tab:col-start-6 tab:col-end-6 md:col-start-5 
            md:col-end-7 lg:col-start-8 xl:col-start-9
            lg:col-end-15 xl:col-end-15 flex gap-[30px]
            items-center justify-end mr-[20px]'>
                <h1 className='font-bold text-[20px] lg:text-[27px]
                mr-[60px] md:mr-0 '>
                    WATERSPIN
                </h1>
                <ul className='hidden md:flex gap-[20px]
                text-[20px] lg:text-[27px]'>
                    <li className='cursor-pointer hover:opacity-[0.7] p-0'>
                        <Link to='home' smooth={true.toString()}
                            duration={500}>
                            HOME
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:opacity-[0.7] p-0'>
                        <Link to='menu' smooth={true.toString()}

                            offset={0} duration={500}>
                            MENU
                        </Link>
                    </li>

                    <li className='cursor-pointer hover:opacity-[0.7] p-0'>
                        <Link to='footer' smooth={true.toString()}
                            offset={-100} duration={500}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
                {isDesktop ? null : (
                    <div className='absolute z-30'
                        onClick={handleClick}>
                        {!nav ?
                            (<Bars3Icon className='w-7 cursor-pointer' />)
                            :
                            (<XMarkIcon className='w-7 cursor-pointer' />)
                        }


                    </div>

                )}


            </div>

            {isDesktop ? null : (
                <div className={!nav ? "hidden" :
                    "flex flex-col gap-[10px] text-center font-semibold text-[30px] w-screen h-screen absolute top-0 p-[20px] pt-[80px] bg-[#000000f7] z-20"}>

                    <Link className='w-full cursor-pointer hover:opacity-[0.7]'
                        onClick={handleClose}
                        to='home' smooth={true.toString()}
                        duration={500}>
                        HOME
                    </Link>

                    <Link className='w-full cursor-pointer hover:opacity-[0.7]'

                        to='menu' smooth={true.toString()}
                        offset={0} duration={500}>
                        MENU
                    </Link>



                    <Link className='w-full cursor-pointer hover:opacity-[0.7]'
                        onClick={handleClose}
                        to='footer' smooth={true.toString()}
                        offset={-100} duration={500}>
                        CONTACT
                    </Link>

                </div>
            )}
        </div>
    )
}

export default Navbar


