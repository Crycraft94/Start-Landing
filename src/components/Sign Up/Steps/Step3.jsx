import React from 'react'
import { Link } from 'react-router-dom';
import { check } from '../../../assets/img';

export const Step3 = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center text-center mt-[100px]'>
    <div className='flex flex-col my-12 justify-center items-center gap-4'>
     <img src={check} alt=""  className='w-[70px]'/>
     <h2 className='font-bold text-4xl'>That's it!</h2>
     <p className='text-[gray]'>You'll have more customixation in your dashboard.</p>
     <Link to="/dashboard">
     <button  className='bg-[#6016fc] text-lg text-[#c3a7fc] font-bold w-full p-3 mt-8 mb-[100px] rounded'>Go to dashboard</button>
     </Link>
    </div>
    </div>
</>
  )
}
