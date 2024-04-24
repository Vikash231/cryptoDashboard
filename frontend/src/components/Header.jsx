import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  return (
    <div className='bg-slate-800 flex justify-center items-center h-[8vh]'>
        <p className='font-bold text-3xl text-white cursor-pointer' onClick={() => navigate('/')}>Crypto world</p>
    </div>
  )
}

export default Header