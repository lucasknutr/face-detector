import { useState, useEffect } from 'react';
import './App.css';
// @ts-ignore
import Navigation from './components/Navigation/Navigation';
// @ts-ignore
import Logo from './components/Logo/Logo';
// @ts-ignore
import FaceDetector from './components/FaceDetector/FaceDetector';
// @ts-ignore
import Rank from './components/Rank/Rank';
// @ts-ignore
import Login from './components/Login/Login';
// @ts-ignore
import Register from './components/Register/Register'
// @ts-ignore
import Clarifai from 'clarifai'
// @ts-ignore
import ImageDisplay from './components/ImageDisplay/ImageDisplay'
// Set of highly customizable animated backgrounds with good performance
import ParticlesBg from 'particles-bg'

function App() {

    // All of my state updates
    // Todos os updates de estado

  const [ imageURL, setImageURL ] = useState("");
  const [ imageDisplay, setImageDisplay ] = useState('');
  const [ box, setBox ] = useState({});
  const [ route, setRoute ] = useState('login');
  const [user, setUser] = useState({
    name: '',
    email: '',
    date: '',
    id: '',
    detections: 0
  })

  useEffect(() => {
    fetch('http://localhost:3001/')
        .then(response => response.json())
        .then(console.log)
  }, [])


  const calculateFacesLocation = (data: any) => {
    const clarifaiFace = data.outputs[0].data.regions;
    const image = document.getElementById('image-display');
    const width = Number(image?.offsetWidth);
    const height = Number(image?.offsetHeight);

    return clarifaiFace.map((region: any) => {
        return {
              leftCol: region.region_info.bounding_box.left_col * width,
              topRow: region.region_info.bounding_box.top_row * height,
              rightCol: width - (region.region_info.bounding_box.right_col * width),
              bottomRow: height - (region.region_info.bounding_box.bottom_row * height)
        }
        
    })
    }

  // BR
  function onSubmit () {
    console.log('Submit suceeded! Your image url is: ' + imageURL);
    setImageDisplay(imageURL);

      ///////////////////////////////////////////////////////////////////////////////////////////////////
      // In this section, we set the user authentication, user and app ID, model details, and the URL
      // of the image we want as an input. Change these strings to run your own example.
      //////////////////////////////////////////////////////////////////////////////////////////////////

      // Your PAT (Personal Access Token) can be found in the portal under Authentification
      const PAT = '7e92221e59ee4b739a04fd81c3feda57';
      // Specify the correct user_id/app_id pairings
      // Since you're making inferences outside your app's scope
      const USER_ID = 'lucasknutr';       
      const APP_ID = 'facedetector';
      // Change these to whatever model and image URL you want to use
      const MODEL_ID = 'face-detection';
      const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
      const IMAGE_URL = imageURL;

      ///////////////////////////////////////////////////////////////////////////////////
      // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
      ///////////////////////////////////////////////////////////////////////////////////

      const raw = JSON.stringify({
          "user_app_id": {
              "user_id": USER_ID,
              "app_id": APP_ID
          },
          "inputs": [
              {
                  "data": {
                      "image": {
                          "url": IMAGE_URL
                      }
                  }
              }
          ]
      });

      const requestOptions = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Authorization': 'Key ' + PAT
          },
          body: raw
      };

      // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
      // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
      // this will default to the latest version_id

      fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
          .then(response => response.json())
          // .then(result => calculateFacesLocation(result))
          .then(data => setBox(calculateFacesLocation(data)))
          .catch(error => console.log('error', error));
      }

  return (
    <>
    <ParticlesBg type="lines" bg={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0
        }} />
    { route === 'login'
    ? <Login setRoute={setRoute} />
    : route === 'register'
    ? <Register setRoute={setRoute} />
    :
    <>
    <Navigation setRoute={setRoute} />
    <Logo />
    <Rank />
    <FaceDetector imageURL={imageURL} setImageURL={setImageURL} onSubmit={onSubmit} />
    <ImageDisplay imageURL={imageDisplay} box={box} />
    </>}
    </>
    
  )
}

export default App