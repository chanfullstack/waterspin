import React from 'react'

function CoverFood({ foodDetail }) {
    return (
        <div className="px-3 py-5 bg-neutral-100 lg:py-10">

            <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                    <p className="text-4xl font-bold md:text-7xl text-orange-600">{foodDetail.strArea} Food !</p>
                    <p className="text-4xl font-extrabold md:text-7xl " >{foodDetail.strMeal}</p>
                    <p className="mt-3 text-sm md:text-lg">Let's do and enjoy it!</p>

                </div>
                <div className="order-1 lg:order-2">
                    <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src={foodDetail.strMealThumb} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CoverFood