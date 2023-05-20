import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const FoodCard = ({ food }) => {


    let navigate = useNavigate()

    if (food.strTags != null) {
        const tagsToArray = food.strTags.split(",")
        const ShowTag = tagsToArray.map((tag, index) => {
            return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>#{tag}</span>
        })

        return (
            <div className="max-w-sm bg-[#353630] rounded-2xl overflow-hidden shadow-lg hover:cursor-pointer transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out " onClick={() => { navigate(`/${food.idMeal}`) }} >
                <img className="w-full" src={food.strMealThumb} alt="Food" />
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl lg:text-2xl mb-2 text-[#a3b666]">{food.strMeal}</div>
                    <p className="text-white lg:text-xl ">
                        The {food.strArea} food that made from {food.strIngredient1} , {food.strIngredient2} , {food.strIngredient3} , . . .
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {ShowTag}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Recipe</span>
                </div>

            </div>
        )

    }
    return (
        <div className="max-w-sm bg-[#353630] rounded-2xl overflow-hidden shadow-lg hover:cursor-pointer transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out" onClick={() => { navigate(`/${food.idMeal}`) }}>
            <img className="w-full" src={food.strMealThumb} alt="Food" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl lg:text-2xl mb-2 text-[#a3b666]">{food.strMeal}</div>
                <p className="text-white lg:text-xl">
                    The {food.strArea} food that made from {food.strIngredient1} , {food.strIngredient2} , {food.strIngredient3} , . . .
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Recipe</span>
            </div>
        </div>
    )
}

export default FoodCard