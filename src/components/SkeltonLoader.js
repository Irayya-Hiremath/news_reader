import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function SkeltonLoader() {
  return (
    <div className="flex flex-wrap -m-4">
             {Array.from({ length: 4 }).map((_, index) => (
       <div key={index} className='my-2 p-4 w-full md:w-1/2 lg:w-1/4'>
       <Skeleton count={1} height={250} width="100%" className='mb-4 skeleton-back' />
       <Skeleton count={6} height={50} width="100%" className='mb-2 skeleton-back' />
     </div>
      ))}
  </div>)
}
