import React from 'react'
import { dashboardDesktop } from '../../assets/img'

export const Dash = () => {
  return (
    <div>
    <div className='bg-[#4338CA]'>
        <div className='container dashboard mx-auto w-full px-5'>
        <div className='title flex justify-center flex-col items-center text-white'>
        <h1 className='sm:text-4xl text-2xl  text-center font-bold mb-5 mt-20'>An easy to use dashboard.</h1>
        <p className='sm:w-2/5 w-4/5 text-center'>Managing your social profiles has never been easier with the linkProfile dashboard.</p>
        </div>
        <img src={dashboardDesktop} alt="" />
        </div>
    </div>
    </div>
  )
}
