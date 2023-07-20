import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
const Navigation = () => {
    return (
        <>
        <div className="navbar flex justify-end w-[80svw] underline cursor-pointer mx-auto">
            <p className="text-3xl">Sign-out</p>
        </div>
        <ParticlesBg type="lines" bg={true} />
        </>
    )
}

export default Navigation