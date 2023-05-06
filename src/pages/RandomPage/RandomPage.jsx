import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CoverFood from './CoverFood'
import Ingredients from './Ingredients'
import Header from './Header'



const RandomPage = () => {


    const [foodDetail, setFoodDetail] = useState([])
    const [videoID, setVideoID] = useState("")


    async function GetFoodRecipe() {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        setFoodDetail(response.data.meals[0])
        setVideoID(response.data.meals[0].strYoutube.split("=")[1])
    }

    useEffect(() => {
        GetFoodRecipe()
    }, [])




    return (
        <div className='mx-auto' >
            <Header />

            <CoverFood foodDetail={foodDetail} />



            <div className='mx-auto md:grid  md:mt-10 md:grid-cols-12 pl-5 pr-5 max-w-7xl '>

                <div className='col-span-4'><Ingredients foodDetail={foodDetail} /></div>


                <div className='col-span-8'>
                    <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Instructions</h2>
                    <p className=''>{foodDetail.strInstructions}</p>
                </div>


            </div>

            <div className='mt-5'>
                <h1 className="text-3xl font-bold underline text-center mb-5">
                    {foodDetail.strMeal} Tutorial Video
                </h1>
                <div className='lg:w-3/6 mx-auto md:mt-10 md:mb-10 lg:mt-10 lg:mb-10 md:w-2/3 sm:w-full mt-0 '>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe src={`https://www.youtube.com/embed/${videoID}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomPage