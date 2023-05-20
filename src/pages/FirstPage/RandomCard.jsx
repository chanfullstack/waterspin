import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RandomCard = () => {

    let navigate = useNavigate()


    const [foodData, setFoodData] = useState([])
    async function GetFoodRecipe() {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        setFoodData(response.data.meals[0])
    }

    useEffect(() => {
        GetFoodRecipe()
    }, [])

    console.log(foodData)

    return (
        <div className='bg-[#353630] shadow-2xl rounded-[10px] hover:cursor-pointer transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out h-full' onClick={() => { navigate(`/${foodData.idMeal}`) }}>
            <div className='flex flex-col h-full'>
                <div className='relative lg:h-[350px]'>
                    <img className='w-full h-full object-cover ' src={foodData.strMealThumb} alt="" />
                </div>
                <div className='p-4 md:p-8'>
                    <h3 className='font-bold text-center text-2xl mb-6 text-[#a3b666]'>
                        {foodData.strMeal}
                    </h3>
                    <p className='text-white lg:text-xl w-full tab:w-[70%]
                                    md:w-full'>
                        The {foodData.strArea} foodData that made from {foodData.strIngredient1} , {foodData.strIngredient2} , {foodData.strIngredient3} , . . .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RandomCard