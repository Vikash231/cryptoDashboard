import React from 'react'
import {Up, Down} from '../icons/icon.jsx'
import { Link } from 'react-router-dom'
function Marketcard({coin}) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className='grid grid-cols-4 gap-4 border h-[10vh] items-center justify-center hover:bg-slate-50 cursor-pointer'>
        <div className='flex gap-1 items-center'>
          <img src={coin.image} alt="image" className='w-6 h-6 ml-2'/>
          <p className='text-red'>{coin.name}</p>
          <p className='text-xs'>({coin.symbol})</p>
        </div>
        <p>{coin.current_price}</p>
        <div className={`flex ${coin.price_change_percentage_24h > 0 ? 'text-green-800' : 'text-red-800'}`}>
          {coin.price_change_percentage_24h > 0 ? <Up /> : <Down />}
          {coin.price_change_percentage_24h}
        </div>
        <div>
          <p className='font-bold'>Market Cap</p>
          <p>{coin.market_cap}</p>
        </div>
      </div>
    </Link>
  )
}

export default Marketcard
