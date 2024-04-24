import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Marketcard from './Marketcard';
import Skeleton from './Skeleton';
function Market() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
          try {
            setLoading(true);
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            const data = res.data;
            setCoins(data);
          } catch (err) {
            console.error("error", err);
          }
          finally {
            setLoading(false);
          }
        }
        fetchData();
    }, []);
    if(loading) {
        return (
          <div className="mt-8">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-full mt-2" />
            <Skeleton className="h-8 w-full mt-2" />
            <Skeleton className="h-8 w-full mt-2" />
            <Skeleton className="h-8 w-full mt-2" />
          </div>
        )
      
    }
  return (
    <div className='w-1/2'>
        <h1 className='font-bold text-2xl'>Market</h1>
        <div className='flex flex-col justify-center gap-2'>
            {
              coins.map((coin)=> {
                return <Marketcard id={coin.id} coin={coin} />
              })
                
            }
        </div>
        
    </div>
  )
}

export default Market