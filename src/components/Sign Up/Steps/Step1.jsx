import React, { useState } from 'react';

export const Step1 = ({next}) => {
  const [inputName , setInputName] = useState("");
  const [inputLink , setInputLink] = useState("");

  return (

    <>
       <form  onSubmit={next} className='flex flex-col justify-center items-center text-center mt-[100px]'>
        <h1 className='font-bold text-4xl sm:w-full w-11/12'>Let's get you setup in less than 5 minutes!</h1>
        <p className='text-[gray] mt-4'>You'll have a custom website after finishing this setup</p>

        <div className='flex flex-col text-start mt-12 sm:w-3/12 w-4/5'>
            <label>Full Name</label>
            <input placeholder='John Doe' className='p-2 border-2 rounded-md mb-6' required value={inputName} onChange={(e)=>setInputName(e.target.value)}></input>
            <label>Your linkProfile link</label>
            <input placeholder='https://linkProfile/steph' type='text' required className='p-2 border-2 rounded-md' value={inputLink} onChange={(e)=>setInputLink(e.target.value)}></input>
            <button className='bg-[#6016fc] text-lg text-[#c3a7fc] font-bold  p-3 w-full mt-8 rounded' type='submit'>Next</button>
        </div>
     </form>
    </>
  )
}
