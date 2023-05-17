import React, { useState } from 'react'
import { useContext } from 'react'
import { SaveToLocalContext } from '../../App'

function FoodList({ food }) {

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
            <h1>NO. {food.id}</h1>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={food.strMealThumb} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food.strMeal}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your note</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{food.note}</p>
                </div>
            </a>

            <button onClick={() => deleteThisMenu(food.idMeal)}>Delete</button>
            <button onClick={() => openEdit(food)}>Edit note</button>



            {isEditNote
                ?
                <form onSubmit={submitEdit} >
                    <h2>Edit Note</h2>
                    <label htmlFor="editNote">Edit Note:</label>
                    <input type="text"
                        name='editNote'
                        placeholder='Edit Note'
                        value={currentNote.note}
                        onChange={changeNoteInput}
                    />
                    <button type='submit'>Save</button>
                    <button onClick={() => { setIsEditNote(false) }}>Cancel</button>
                </form>
                :
                <div>No Edit</div>
            }


        </div>
    )
}

export default FoodList