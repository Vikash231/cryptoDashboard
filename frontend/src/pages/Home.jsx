import React from 'react'
import List from '../components/List'
import Market from '../components/Market'
function Home() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-4'>
        <List />
        <Market />
    </div>
  )
}

export default Home