import React from 'react'
import { topLinks, pagesOverview, countries,overview } from '../../assets/img'
export const Analytics = () => {
  return (
    <div className='w-full'>
            <div className='flex md:flex-row flex-col  gap-2 lg:gap-6 mb-2 lg:mb-6 items-center'>
                <img src={overview} alt="" className=' w-1/2'/>
                <img src={pagesOverview} alt="" className=' w-1/2' />
            </div>
            <div className='flex md:flex-row flex-col gap-2 lg:gap-6 items-center'>
                <img src={topLinks} alt="" className=' w-1/2' />
                <img src={countries} alt=""  className=' w-1/2'/>
            </div>
    </div>
  )
}
