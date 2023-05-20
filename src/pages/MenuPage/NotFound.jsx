import React from 'react'


function NotFound({ setSearchInput }) {


    return (
        <div className='w-full mx-auto'>
            <div
                className="
                
    flex
    items-center
    justify-center
    w-full
    h-screen
  "
            >
                <div className=" px-10 md:px-40 py-20 bg-white rounded-md shadow-xl border border-gray-600">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-orange-600 text-9xl">404</h1>

                        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            Menu not found
                        </h6>

                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            The menu you’re looking for doesn’t exist.
                        </p>

                        <a onClick={() => { setSearchInput("") }}
                            href="#"
                            className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                        >Try other menu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound