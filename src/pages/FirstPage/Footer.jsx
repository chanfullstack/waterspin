import React from 'react'
import { FaFacebook, FaInstagram, FaLine, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div name='footer' className='w-full'>
            <div className='flex flex-col gap-[20px] w-full py-4
            justify-between text-center bg-[#353630] px-[50px] -mt-[1px]'>
                <h1 className='text-gray-300 text-[30px]'>Thank you for your support</h1>
                <p className='text-gray-500 max-w-[700px] mx-auto my-[10px]'>
                    One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating.
                </p>
                <h2 className='text-gray-300 text-[30px]'>Find us on :</h2>
                <div className='flex justify-between m-auto w-full sm:w-[300px]
                pt-4 text-2xl text-gray-300 pb-[50px]'>
                    <FaFacebook className='hover:cursor-pointer' />
                    <FaInstagram className='hover:cursor-pointer' />
                    <FaLine className='hover:cursor-pointer' />
                    <FaTwitter className='hover:cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default Footer