import React from 'react'
import { pattern,check,wrong,checkLight } from '../../assets/img'

export const Subscribe = () => {
  return (
    <div>
         <div className='container subscribe sm:p-5 p-0 mx-auto my-10 flex w-9/12 columns-2 items-start'>
    <img src={pattern} alt="" className='lg:w-1/3 lg:block hidden' />
    <div className='lg:w-4/5 lg:ml-20 w-full ml-0'>
      <h1 className='sm:text-3xl text-xl font-bold mb-5'>Simple, transparent pricing to support creators everywhere around the world.</h1>
      <p>our pricing is competitive, and that's intentional. It emphasizes more on our vision and that's to support creators from all around the world.</p>
      <div className='columns-2 flex flex-col md:flex-row mt-10 md:mt-[90px] gap-[20px]'>
        <div className="free md:w-3/6 w-full p-5">
          <p className='text-lg'>Free</p>
          <h1 className='text-6xl mb-4'>Free</h1>
          <p className='text-lg mb-10'>perfect for people starting out content creation.</p>
          <div className='flex flex-row'>
          <img src={check}  className='w-5 mr-5 mb-3'/><p>Access to Preset Links</p>
          </div>
          <div className='flex flex-row'>
          <img src={check}  className='w-5 mr-5  mb-3'/><p>Create Share Links</p>
          </div>
          <div className='flex flex-row'>
          <img src={wrong} className='w-5 mr-5  mb-3'/><p>Custom domains and links.</p>
          </div>
          <div className='flex flex-row'>
          <img src={wrong} className='w-5 mr-5  mb-3'/><p>User analytics.</p>
          </div>
          <button className='bg-[#6016fc] text-lg text-white font-bold  p-3 w-full mt-8 rounded'>Subscribe</button>
        </div>
        <div className="starter md:w-3/6 w-full  p-5 bg-[#6016fc] text-[#c3a7fc] rounded-md">
          <p className='text-lg'>Starter</p>
          <h1 className='text-6xl mb-4 text-[#ffffff]'>$19<span className='text-lg'>/mo</span></h1>
          <p className='text-lg mb-10'>perfect for people who already create content.</p>
          <div className='flex flex-row'>
          <img src={checkLight}  className='w-5 mr-5 mb-3'/><p>Access to Preset Links</p>
          </div>
          <div className='flex flex-row'>
          <img src={checkLight}  className='w-5 mr-5  mb-3'/><p>Create Share Links</p>
          </div>
          <div className='flex flex-row'>
          <img src={checkLight} className='w-5 mr-5  mb-3'/><p>Custom domains and links.</p>
          </div>
          <div className='flex flex-row'>
          <img src={checkLight} className='w-5 mr-5  mb-3'/><p>User analytics.</p>
          </div>
          <button className='bg-[#e5d9fc] text-lg text-[#6016fc] font-bold p-3 w-full mt-8 rounded'>Subscribe</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
