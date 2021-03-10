import React from 'react'
import { useSelector } from 'react-redux'
import { selectSignedIn } from '../features/UserSlice'
//
function Navbar() {
    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="navbar">
            <h1 className="navbar__header">
                Thecaptaion
            </h1> 
            { isSignedIn ? (<div></div>): (<div></div>) }           
        </div>
    )
}

export default Navbar

