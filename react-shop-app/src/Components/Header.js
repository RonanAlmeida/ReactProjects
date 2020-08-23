import React from 'react'
import Navigation from './Navigation'

function Header(){
    return(
        <header className="border-b p-3  bg-gray flex justify-between items-center bg-gray-900">
        <span className="font-bold  text-white	">ReactShop</span>
        <Navigation/>
        </header>
       
     )
}

export default Header