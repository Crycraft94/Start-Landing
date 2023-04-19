import React from 'react'

export const Account = () => {
  return (
    <div className='w-full'>
        <div className='flex md:flex-row flex-col gap-5 mb-10 px-10'>
            <div className='md:w-1/3 w-full'>
            <h2 className='font-bold text-xl'>General</h2>
            <p>Change general settings for your account.</p>
            </div>
            <div className='bg-white p-10 flex-col flex rounded-md shadow-md w-full md:w-2/3'>
                <div className='flex flex-col md:flex-row lg:gap-8 md:gap-2 justify-around'>
                <div className='flex flex-col'>
                <label className='mb-2'>Full Name</label>
                <input placeholder='John Doe' className='p-2 border-2 rounded-md mb-6'/>
                </div>
                <div className='flex flex-col'>
                <label className='mb-2' >Your linkProfile link</label>
                <input placeholder='https://linkprofile/steph' className='p-2 border-2 rounded-md mb-6' />
                </div>
                </div>
            
                <p className='mt-6'>Your email is stephaniemark@example.com <span className='text-sky-500 cursor-pointer'>Change email</span></p>
            </div>
        </div>
        <hr />
        <div className='flex md:flex-row flex-col gap-5 mb-10 mt-10  px-10'>
            <div className='md:w-1/3 w-full'>
            <h2 className='font-bold text-xl'>Preferred Language</h2>
            <p>This is your account's language, not your linkProfile website.</p>
            </div>
            <div className='bg-white p-10 flex-col flex rounded-md shadow-mdw-full md:w-2/3 w-full'>
               <label className='mb-2'>Language</label>
               <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>What language do you choose?</option>
                    <option>English</option>
                    <option>Persian</option>
                </select>
            </div>
        </div>
        <hr />
        <div className='flex md:flex-row flex-col gap-5 mb-10 mt-10  px-10'>
            <div className='md:w-1/3 w-full'>
            <h2 className='font-bold text-xl'>Timezone</h2>
            </div>
            <div className='bg-white p-10 flex-col flex rounded-md shadow-md w-full md:w-2/3'>
               <label className='mb-2'>Timezone</label>
               <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </div>
        </div>
    </div>
  )
}
