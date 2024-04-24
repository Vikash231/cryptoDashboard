import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale, LineController, LineElement, PointElement, LinearScale, Title, Filler, Legend} from 'chart.js';

ChartJS.register(CategoryScale,LineController, LineElement, PointElement, LinearScale, Title, Filler, Legend,);

import { Line } from 'react-chartjs-2';
import moment from "moment";
import Skeleton from './Skeleton';
function HistoryChart() {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`);
        const data = res.data;
        setData(data);
      } 
      catch (err) {
        console.error("error", err);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if(data.length === 0) {
    return (<div className='mt-8'>
        <Skeleton className="h-72 w-full mb-10" />
    </div>)   
  }

  const coordinates = data.prices.map((price) => ({
    x: price[0],
    y: price[1].toFixed(2),
  }));

  const option = {
    responsive: true,
  }

  const userData = {
    labels: coordinates.map((co) => moment(co.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: id,
        data: coordinates.map((co) => co.y),
        borderColor: 'rgb(10, 99, 132)',
        backgroundColor: 'rgba(10, 99, 132, 0.5)',
      }
    ]
  }

  return (
      <div className='mt-3'>
        <Line options={option}  data={userData} />
      </div> 
  )
}

export default HistoryChart