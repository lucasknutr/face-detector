import { useEffect, useState } from "react"
import React from 'react'
import './ImageDisplay.css'

const ImageDisplay = ({ imageURL, box }) => {

  const  [newBoxes, setNewBoxes] = useState("");

useEffect(() => {
  if (!box[0]) {
    // do nothing
  } else {
    
    setNewBoxes(box.map(each => {
      return (
        <div className="bounding-box" style={{top: each.topRow, left: each.leftCol, right: each.rightCol, bottom: each.bottomRow, zIndex: `20`}}></div>
      )
    }))
  
  }
}, [box]) 
  
    
  return (
    <div className="flex justify-center mt-5">
    <div className='text-center md:max-w-[50%] md:mx-auto absolute'>
        {/* <div className="bounding-box" style={{top: box.topRow, left: box.leftCol, right: box.rightCol, bottom: box.bottomRow, zIndex: `20`}}></div> */}
        {newBoxes}
        <img src={imageURL} id='image-display' alt=""  />
    </div>
    </div>
  )
}

export default ImageDisplay