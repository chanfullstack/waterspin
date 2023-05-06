import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const [menuToggle, setMenuToggle] = useState("hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0")
    let navigate = useNavigate()

    function toggle() {
        if (menuToggle == "hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0") {
            setMenuToggle("flex md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0")
        }
        if (menuToggle == "flex md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0") {
            setMenuToggle("hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0")
        }
    }

    return (

        <div className="header-2 ">

            <nav className="bg-white py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-between items-center">
                        <a href="#" className="font-bold text-xl text-red-600">Food Recipe</a>
                        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle"
                            onClick={toggle}>
                            Menu
                        </button>
                    </div>

                    <div className={menuToggle} id="navbar-collapse">
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-red-600">Home</a>
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" onClick={() => { navigate(`/Random`) }}>Random Menu</a>
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" onClick={() => { navigate(`/SavedMenu`) }}>Your Menu</a>
                        <a href="https://www.linkedin.com/in/chan-sitthikhun-a92759248/" target="_blank" className="p-2 lg:px-4 md:mx-2 text-red-600 text-center border border-solid border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header