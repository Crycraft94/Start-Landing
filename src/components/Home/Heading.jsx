import React from 'react'
import { Link } from 'react-router-dom';
import { award , website } from '../../assets/img';

export const Heading = () => {
  return (
<div>
  <div className="container heading text-white p-5 mx-auto mt-20 justify-between items-start flex flex-col-reverse md:flex-row">
    <div className='justify-start flex items-start flex-col'>
    <h1 className='md:text-6xl sm:text-5xl text-2xl font-bold mb-10'>One page websites to all your social profiles.</h1>
    <p className='mb-10'>with linkProfile, you can create a one page website that links to all your social media profiles in less than 5 minutes of setup.</p>
    <Link to='/signup' className="btn rounded-3xl  bg-black font-thin normal-case mb-20">Get Started for free</Link>
    <div className='flex flex-row items-center'>
    <img src={award} alt="" className='bg-white p-2 rounded-full' />
    <a href="#" className='font-normal ml-4 underline'>Awarded Website of the Year</a>
    </div>
    </div>
    <img src={website} className='md:w-3/6 w-full mb-20' />
  </div>
</div>
  )
}
