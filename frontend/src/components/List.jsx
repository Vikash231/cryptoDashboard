import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import Coindata from './Coindata';
import { useState } from 'react';
import Skeleton from './Skeleton';
function List() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await axios.get("https://api.coingecko.com/api/v3/search/trending");
                const data = res.data.coins;
                setCoins(data);
            }
            catch(err) {
                console.error("error",  err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    
    if(loading) {
        return (<div className='mt-8'>
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-full mt-2" />
            <Skeleton className="h-8 w-full mt-2" />
            <Skeleton className="h-8 w-full mt-2" />
            <Skeleton className="h-8 w-full mt-2" />
        </div>)
    }

  return (
        <div className='w-1/2' >
            <h1 className='font-bold text-2xl'>Trending</h1>
            {
                coins &&  
                coins.slice(0,10).map((coin) => (
                    <Coindata key={coin.item.id} coin={coin.item} />
                ))
            }
        </div>
  )
}

export default List