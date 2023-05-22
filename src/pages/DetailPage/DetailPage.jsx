import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CoverFood from './CoverFood'
import Ingredients from './Ingredients'
import { SaveToLocalContext } from '../../App'
import Navbar from './Navbar'
import { GetFoodRecipe } from '../../utils/API'


const DetailPage = () => {
    const { MealID } = useParams()



    const [foodDetail, setFoodDetail] = useState([])
    const [videoID, setVideoID] = useState("")


    // async function GetFoodRecipe() {
    //     const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`)
    //     setFoodDetail(response.data.meals[0])
    //     setVideoID(response.data.meals[0].strYoutube.split("=")[1])
    // }

    async function callData(ID) {
        console.log("ID", ID)
        const response = await GetFoodRecipe(ID)
        setFoodDetail(response.data.meals[0])
        setVideoID(response.data.meals[0].strYoutube.split("=")[1])
    }

    useEffect(() => {
        callData(MealID)
    }, [])




    const { localData, setLocalData } = useContext(SaveToLocalContext)


    useEffect(() => {
        const checkSaved = localData.filter((food) =>
            food.idMeal === MealID)
        console.log(checkSaved)
        if (checkSaved.length > 0) {
            setSaveUnsave(false)
        } else {
            setSaveUnsave(true)
        }
    }, [localData])



    function addToLocal() {
        setLocalData([...localData, { ...foodDetail, id: localData.length + 1, note: "" }])
        setSaveUnsave(false)
    }

    function delteLocal(foodDetail) {
        const deletedResult = localData.filter((food) => {
            return foodDetail.idMeal !== food.idMeal
        }
        )
        setLocalData(deletedResult)
        setSaveUnsave(true)
    }


    const [saveUnsave, setSaveUnsave] = useState()




    return (
        <div className='mx-auto bg-[#EFEFEF] pb-20 flex flex-col ' >
            <Navbar />
            <CoverFood foodDetail={foodDetail} />


            {saveUnsave
                ? <button onClick={addToLocal} type="button" className="text-white  bg-green-700
             hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 w-2/4 sm:max-w-[200px] self-center
             font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600
              dark:hover:bg-green-700 dark:focus:ring-green-800">Save this menu</button>
                : <button type="button" onClick={() => delteLocal(foodDetail)} className="text-white
             bg-red-700 hover:bg-red-800 focus:outline-none 
             focus:ring-4 focus:ring-red-300 font-medium rounded-full 
             text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 w-2/4  sm:max-w-[200px] self-center
              dark:hover:bg-red-700 dark:focus:ring-red-900">Unsave this menu</button>
            }



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

export default DetailPage