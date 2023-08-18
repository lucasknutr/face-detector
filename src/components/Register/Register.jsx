import React, { useState } from 'react'

const Register = ({ setRoute }) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const handleClick = () => {
    if(name && email && password){
      fetch('http://localhost:3001/register', {
        method: "post",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        }),

      }).then(setRoute('main'))
    } else{
      console.log('perdeu a bdv e a bds :((((');
    }
  }


  return (
    <div className='flex justify-center items-center w-[100svw] h-[100svh]'>
        <div className="md:w-[30%] md:h-[50%] flex flex-col justify-center items-center gap-16 rounded-2xl" style={{background: 'rgba(0, 0, 0, 0.5)', border: '1px'}}>
            <div className="flex flex-col gap-5">
                <p className='w-[75%] text-lg mx-auto'>Name:<input type="text" className='w-full' placeholder='Ex: Vladmir Ilitch' onChange={e => setName(e.target.value)} /></p>
                <p className='w-[75%] text-lg mx-auto'>Email:<input type="text" className='w-full' placeholder='Ex: yourname@example.com' onChange={e => setEmail(e.target.value)} /></p>
                <p className='w-[75%] text-lg mx-auto'>Password:<input type="password" className='w-full' placeholder='Ex: mypAsSword@32' onChange={e => setPassword(e.target.value)} /></p>
            </div>
            <div className="buttons flex justify-around items-center gap-10">
                <button className='bg-pink-400 px-5 py-2 rounded-2xl font-extrabold capitalize hover:bg-white hover:text-black' onClick={handleClick}>Register</button>
                <button className='bg-pink-800 px-5 py-2 rounded-2xl font-extrabold capitalize hover:bg-white hover:text-black' >Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Register;
