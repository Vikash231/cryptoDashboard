import React from 'react'
import { Link } from 'react-router-dom'
function Coindata({coin}) {

  return (
    <Link to={`/coin/${coin.id}`}>
      <div className='flex gap-2 mt-2 border-gray-200 border-2 items-center hover:bg-slate-50 cursor-pointer h-9'>
          <p className='ml-1'>{coin.score+1}.</p>
          <img src={coin.small} alt="image" className='w-6 h-6' />
          <p>{coin.name}</p>
          <p className='text-xs'>({coin.symbol})</p>
      </div>
    </Link>
  )
}

export default Coindata