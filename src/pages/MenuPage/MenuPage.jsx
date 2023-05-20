import React, { useEffect, useState } from 'react'

import FoodCard from './FoodCard'
import SearchFood from './SearchFood'
import axios from 'axios'
import NotFound from './NotFound'
import Navbar from './Navbar'
import Hero from './Hero'
import { ParallaxProvider } from 'react-scroll-parallax'







function MenuPage() {
    const [foodData, setFoodData] = useState([])
    const [searchInput, setSearchInput] = useState("")


    const GetFoodAPIFirst = async () => {
        const response = await axios({
            method: 'get',
            url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`,
        })
        return response
    }

    useEffect(() => {
        GetFoodAPIFirst().then((response) => {
            setFoodData(response.data.meals)

        })
    }, [searchInput])






    function ShowFood() {
        const ShowFoodResult = foodData.map((food, index) => {
            return <FoodCard key={index}
                food={food}
            />
        })
        return (<div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2 lg:mx-10 mx-5 pb-20 justify-items-center'>
            {ShowFoodResult}
        </div>
        )
    }




    return (
        <ParallaxProvider>


            <Navbar />
            <Hero inputVal={searchInput}
                onValueChange={setSearchInput} />

            <div className='bg-[#212122]'>

                <h3 className='text-7xl font-semibold text-center mb-10 text-[#a3b666]'>
                    ENJOY KRUB
                </h3>

                {
                    foodData ? ShowFood() : <NotFound setSearchInput={setSearchInput} />
                }

            </div>





        </ParallaxProvider >
    )
}

export default MenuPage