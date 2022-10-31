import React from 'react'
import {RiArrowDownSFill} from "react-icons/ri"

function ToDayStats() {
  return (
    <div className="p-4 border rounded-xl hover:shadow">
        <div className='mb-4 w-fit flex items-center gap-x-1 hover:border-b'>
            <h1 className='font-bold text-lg'>Total Income</h1>
            <RiArrowDownSFill className="text-lg"/>
        </div>
        <div className='flex flex-col gap-y-4 divide-y'>
            <div>
                <h1 className='mb-2 text-sm text-gray-700 font-semibold'>Today Income</h1>
                <h1 className='text-2xl font-semibold'>$12,418</h1>
            </div>
            <div className='pt-2'>
                <h1 className='mb-2 text-sm text-gray-700 font-semibold'>Last Month Income</h1>
                <h1 className='text-2xl font-semibold'>$12,418</h1>
            </div>
            <div className='pt-2'>
                <h1 className='mb-2 text-sm text-gray-700 font-semibold'>Last Year Income</h1>
                <h1 className='text-2xl font-semibold'>$12,418</h1>
            </div>
        </div>
    </div>
  )
}

export default ToDayStats