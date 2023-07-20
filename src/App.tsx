import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <Logo />
    {/* // <Rank />
    // <FaceDetector /> */}
    </>
  )
}

export default App
