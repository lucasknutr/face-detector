import { useEffect } from 'react';
import React from "react";
import './FaceDetector.css'

const FaceDetector = ({ imageURL, setImageURL, onSubmit }) => {

    useEffect(() => {
        let keyDownHandler = event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                onSubmit();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [imageURL])

    return (
        <div className="">
            <p className="text-center text-lg">This magic tool will detect faces in your pictures. Give it a try!</p>
        <div onSubmit={(x) => onSubmit(x)} className=" border-y border-x border-gray-700 flex max-w-[100svw] md:max-w-[50svw] justify-center items-center mx-auto p-10 gap-5 rounded-xl shadow-2xl" style={{background: 'rgba(0,0,0,.4)'}}>
            <input onChange={(value) =>  {
                setImageURL(value.target.value)
            }} type="text" className="w-[80%] bg-slate-200 text-gray-700" />
            <button className="w-[20%] bg-pink-500 rounded-lg font-bold hover:bg-pink-800" onClick={onSubmit}>Submit</button>
        </div>
        </div>
    )
}

export default FaceDetector