import React, { useState } from 'react'
import { useContext } from 'react'
import { SaveToLocalContext } from '../../App'
import { useNavigate } from 'react-router-dom'

function FoodList({ food }) {

    let navigate = useNavigate()

    const { localData, setLocalData } = useContext(SaveToLocalContext)

    function deleteThisMenu(id) {
        const deletedMenu = localData.filter((food) => {
            return id != food.idMeal
        })

        setLocalData(deletedMenu)
    }

    const [isEditNote, setIsEditNote] = useState(false)
    const [currentNote, setCurrentNote] = useState({})


    function changeNoteInput(e) {
        setCurrentNote({ ...currentNote, note: e.target.value })
    }

    function openEdit(food) {
        setIsEditNote(true)
        setCurrentNote({ ...food })
    }

    function updateNote(id, updatedNote) {
        const updatedItem = localData.map((food) => {
            return id == food.id ? updatedNote : food
        })

        setIsEditNote(false)
        setLocalData(updatedItem)
    }


    function submitEdit(e) {
        e.preventDefault()

        updateNote(food.id, currentNote)
    }

    return (
        <div>


            {isEditNote
                ?
                <div className="flex flex-col items-center my-4 bg-white border border-gray-200 mx-8 rounded-lg shadow md:flex-row md:w-[800px] lg:w-[900px] xl:w-[1200] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={food.strMealThumb} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food.strMeal}</h5>
                        <div className=''>
                            <form onSubmit={submitEdit} >
                                <label htmlFor="editNote">Note :</label>
                                <textarea type="text"
                                    className='rounded-md ml-3 w-auto md:w-[500px] lg:w-[600px] '
                                    name='editNote'
                                    placeholder='Edit note'
                                    value={currentNote.note}
                                    onChange={changeNoteInput}
                                />
                                <div className='mt-5'>
                                    <button class="bg-green-500 hover:bg-green-700 mr-3 text-white font-bold py-2 px-4 rounded-full" type='submit'>Save</button>
                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => { setIsEditNote(false) }}>Cancel</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
                :
                <div className="flex flex-col items-center my-4 bg-white border border-gray-200 mx-8 rounded-lg shadow md:flex-row md:w-[800px] lg:w-[900px] xl:w-[1200] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover hover:cursor-pointer w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={food.strMealThumb} alt="" onClick={() => { navigate(`/${food.idMeal}`) }} />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food.strMeal}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:cursor-pointer " onClick={() => openEdit(food)}>Note : {food.note}</p>
                        <div className=''>
                            <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 mr-3 px-4 rounded-full" onClick={() => openEdit(food)}>
                                Edit
                            </button>
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => deleteThisMenu(food.idMeal)}>
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            }


        </div>
    )
}

export default FoodList

