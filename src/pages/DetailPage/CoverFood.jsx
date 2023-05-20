import React from 'react'


function CoverFood({ foodDetail }) {
    return (
        <div className="px-3 py-5 bg-[#EFEFEF] lg:py-10 mb-20">

            <div className="grid lg:grid-cols-2 items-start justify-items-center gap-5 pt-[20px] ">
                <div className="order-2 lg:order-1 flex flex-col justify-center items-center z-10 lg:pt-20 xl:pt-0">
                    <p className="text-4xl font-bold md:text-7xl text-[#E50914] ">{foodDetail.strArea} Food !</p>
                    <p className="text-4xl font-extrabold md:text-7xl text-white" >{foodDetail.strMeal}</p>
                    <p className="mt-3 text-sm md:text-lg text-white">Let's do and enjoy it!</p>
                </div>
                <div className="order-1 lg:order-2 z-10">
                    <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src={foodDetail.strMealThumb} alt="" />
                </div>
            </div>

            <div>
                <img className='md:h-[700px] w-full sm:h-[630px] 
                object-cover absolute top-0 left-0 z-0'
                    src="https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_1280.jpg" alt="/" />
            </div>
        </div>
    )
}

export default CoverFood

