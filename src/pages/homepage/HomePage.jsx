import React, { useEffect, useState } from 'react'

import FoodCard from './FoodCard'
import SearchFood from './SearchFood'
import Header from './Header'
import axios from 'axios'
import NotFound from './NotFound'
import RandomPage from '../RandomPage/RandomPage'





function HomePage() {
    const [foodData, setFoodData] = useState([])
    const [searchInput, setSearchInput] = useState("")



    // const GetFoodAPIFirst = async () => {
    //     const API = axios.create({ baseURL: "https:www.themealdb.com/" })
    //     const response = await API.get(`api/json/v1/1/search.php?s=${searchInput}`)
    //     return response
    // }

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
        return (<div className='grid gap-6 lg:grid-cols-4 mt-10 md:grid-cols-2 justify-items-center'>
            {ShowFoodResult}
        </div>
        )
    }




    return (
        <div className="App container mx-auto">


            <div className='homePage'>

                <Header />
                <SearchFood
                    inputVal={searchInput}
                    onValueChange={setSearchInput} />

                {
                    foodData ? ShowFood() : <NotFound setSearchInput={setSearchInput} />
                }



            </div>
        </div>
    )
}

export default HomePage