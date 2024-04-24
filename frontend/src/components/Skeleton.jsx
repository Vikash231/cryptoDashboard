import React from 'react'

function Skeleton({props}) {
  return (
    <div className='animate-pulse'>
        <div className={`bg-grey-500 rounded-md ${props}`}></div>
    </div>
  )
}

export default Skeleton