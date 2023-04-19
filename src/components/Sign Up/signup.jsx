import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo1 } from '../../assets/img';
import { Step1, Step2, Step3 } from './Steps';



export const SignUp = () => {

    const [step,setStep] = useState(1);

    const next = (e)=>{
        e.preventDefault();
        setStep(step+1)
    }
  return (
    <>
    <div className='bg-[#f8f9fb] min-h-screen'>
    <Link to='/' className='pt-10 flex justify-center'><img src={logo1} /></Link>
     <div className='mt-20 sm:w-1/3 mx-auto w-3/4 '>
        <hr />
        <div className='flex justify-center gap-10 relative'>
        <h2 className={`'border-2 rounded-full px-4 py-2 ${step===1?" bg-[#6016fc] border-[#6016fc] text-white":"bg-white" } font-bold absolute top-[-20px] left-0 cursor-pointer'`}>1</h2>
        <h2 className={`'border-2 rounded-full px-4 py-2 font-bold absolute top-[-20px] ${step===2?"bg-[#6016fc] border-[#6016fc] text-white": "bg-white"} cursor-pointer'`}>2</h2>
        <h2 className={`'border-2 rounded-full px-4 py-2 font-bold absolute right-0 top-[-20px] ${step === 3?"bg-[#6016fc] border-[#6016fc] text-white":"bg-white"}  cursor-pointer'`}>3</h2>
        </div>
     </div>
     {
        step === 1 &&   <Step1 next={next}/>
     }
     {
        step === 2 &&  <Step2 next={next}/>
     }
     {
        step == 3 && <Step3 />
     }
</div>
    </>
   
  )
}
