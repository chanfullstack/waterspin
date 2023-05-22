import React from 'react'
import FoodList from './FoodList'
import { useContext } from 'react'
import { SaveToLocalContext } from '../../App'
import Navbar from './Navbar'
import Hero from './Hero'





function SavedMenuPage() {


    const { localData, setLocalData } = useContext(SaveToLocalContext)
    console.log(localData)



    const showSavedMenu = localData.map((food, index) => {
        return <FoodList key={index}
            food={food} />
    })


    return (
        <div className='App mx-auto bg-[#EFEFEF]'>

            <Navbar />
            <Hero />

            <div className='flex flex-col justify-center items-center'>
                <h1 className=" text-7xl text-[#a3b666] font-bold text-center mb-5 mt-[50px] md:mt-[50px] xl:mt-[-50px] 2xl:mt-[-120px]">
                    Your saved menu
                </h1>


                {showSavedMenu.length > 0
                    ?

                    <div className='flex flex-col'>
                        <div className='flex flex-col justify-center mt-10'>

                            {showSavedMenu}

                        </div >
                        <button className="bg-red-500 hover:bg-red-700 my-4 text-white font-bold max-w-[200px] self-center py-2 px-4 rounded-full" onClick={(e) => { setLocalData([]) }}>
                            Clear all
                        </button>
                    </div>
                    :
                    <div className='h-[100px]'>
                        <h1 className='mt-5 text-gray-500 text-2xl'>No saved menu yet</h1>
                    </div>
                }

            </div>

        </div>
    )
}

export default SavedMenuPage