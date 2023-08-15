import React, { Component } from 'react'

const Navigation = ({ setRoute }) => {
    const handleClick = () => {
        setRoute('login');
    }
    return (
        <>
        <div className="navbar flex justify-end w-[80svw] underline cursor-pointer mx-auto my-5">
            <p className="text-xl" onClick={handleClick}>Sign-out</p>
        </div>
        
        </>
    )
}

export default Navigation