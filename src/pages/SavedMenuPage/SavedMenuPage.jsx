import React from 'react'
import Header from './Header'
import FoodList from './FoodList'
import { useContext } from 'react'
import { SaveToLocalContext } from '../../App'
import { useEffect } from 'react'




function SavedMenuPage() {


    const { localData, setLocalData } = useContext(SaveToLocalContext)
    console.log(localData)




    return (
        <div className='App container mx-auto'>

            <Header />
            <h1 className="text-3xl font-bold underline text-center mb-5">
                Your Menu
            </h1>

            <button onClick={(e) => {

                setLocalData([...localData, "1"])
            }}>ADD 1</button>
            <br />

            <button onClick={(e) => {
                setLocalData([])
            }}>clear</button>

            SavedMenuPage


            <FoodList />
        </div>
    )
}

export default SavedMenuPage