import React from 'react'
import HistoryChart from '../components/HistoryChart' 
import Description from '../components/Description'

function Coindetails() {
  return (
    <div className="flex items-center justify-center">
      <div className='w-1/2'>
        <HistoryChart />
        <Description />
      </div>
    </div>
    
  )
}

export default Coindetails