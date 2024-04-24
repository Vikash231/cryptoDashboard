import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Skeleton from './Skeleton';

function Description() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);
        const data = res.data;
        setData(data);
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
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    )
  }
  if(data.length === 0) {
    return (
      <Skeleton className="h-10 w-10" />
    )
  }
  return (
    <div className='mt-5'>
      <div className='flex gap-2' >
        <img src={`${data.image.small}`} alt="image" className='w-9 cursor-pointer' onClick={() => navigate('/')}/>
        <h1 className='font-bold text-4xl'>{data.name}</h1>
      </div>
      <p className='text-gray-500 [&>a]:text-blue-500 [&>a]:underline' dangerouslySetInnerHTML={{__html: data.description.en}}></p>
    </div>
  )
}

export default Description