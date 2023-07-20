import React from "react";
import './FaceDetector.css'

const FaceDetector = () => {
    return (
        <div className="input-section flex max-w-[50svw] justify-center items-center mx-auto p-10 gap-5 rounded-xl shadow-2xl">
            <input type="text" className="w-[80%] bg-slate-200" />
            <button className="w-[20%] bg-orange-500 rounded-lg font-bold hover:bg-orange-800">Submit</button>
        </div>
    )
}

export default FaceDetector