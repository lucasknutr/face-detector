import React from 'react'
import { useState } from 'react'

const Login = ({ setRoute }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        if(email.length > 1 && password.length > 1){
          fetch('http://localhost:3001/signin', {
            method: "post",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
              email: email,
              password: password
            }),
        })
        .then(response =>  {
            console.log(response.json())
          }
        )
        .catch(err => console.log('error while trying to sign in: ', err))
        }
      }
    

    function handleClickSign (email, pass) {
        // if(d){}
        setRoute('main');
    }

    function handleClickReg () {
        setRoute('register');
    }

  return (
    <div className='flex justify-center items-center w-[100svw] h-[100svh]'>
        <div className="md:w-[30%] sm:w-[60%] md:h-[50%] flex flex-col justify-center items-center gap-16 rounded-2xl" style={{background: 'rgba(0, 0, 0, 0.7)', border: '1px'}}>
            <div className="flex flex-col gap-5 justify-center align-center pt-10">
                <p className='w-[75%] text-lg mx-auto text-center'>Email<input type="text" className='w-full bg-slate-400' onChange={e => setEmail(e.target.value)} /></p>
                <p className='w-[75%] text-lg mx-auto text-center'>Password<input type="password" className='w-full bg-slate-400' onChange={e => setPassword(e.target.value)} /></p>
            </div>
            <div className="buttons flex justify-around items-center gap-10 pb-10">
                <button className='bg-pink-700 px-5 py-2 rounded-2xl font-extrabold capitalize hover:bg-white hover:text-black' onClick={handleClick} >Sign In</button>
                <button className='bg-pink-400 px-5 py-2 rounded-2xl font-extrabold capitalize hover:bg-white hover:text-black' onClick={() => setRoute('register')} >Register</button>
            </div>
        </div>
    </div>
  )
}

export default Login