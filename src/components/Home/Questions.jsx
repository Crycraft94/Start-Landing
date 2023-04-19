import React from 'react'
import { plusDark } from '../../assets/img'

export const Questions = () => {
  return (
    <div>
    <div className='container dashboard mx-auto w-full sm:p-20 p-10  pb-[100px] '>
      <h1 className='font-bold sm:text-3xl text-xl mb-10'>Frequently Asked Questions</h1>
      <div className='showHide w-full border-[2px] rounded-md mb-5'>
      <div className="collapse  collapse-plus ">
        <input type="checkbox" />
      <div className="collapse-title sm:text-xl text-md  font-medium flex justify-between">
      Am i able to cancel my subscription any time?
      </div>
      <div className="collapse-content ">
      <p>Yes, you are able to cancle your subscription by emailing at hello@linkprofile.com and we weill get back to you within 24 hours.</p>
      </div>
      </div>
      </div>
      <div className='showHide w-full border-[2px] rounded-md mb-5'>
      <div className="collapse collapse-plus ">
        <input type="checkbox" />
      <div className="collapse-title sm:text-xl text-md font-medium  flex justify-between ">
      do you offer discounts for students?
      </div>
      <div className="collapse-content">
      <p>Absolutley! Our whole vision revolves around enabling creators everywhere, if you are a student, please send any official proof of your enrollment to hello@linkprofile.com and we'll give you one full year of linkProfile!</p>
      </div>
      </div>
      </div>
      <div className='showHide w-full border-[2px] rounded-md mb-5'>
      <div className="collapse collapse-plus ">
        <input type="checkbox" />
      <div className="collapse-title sm:text-xl text-md  font-medium  flex justify-between">
       Can I use PayPal to subscribe to linkProfile?
      </div>
      <div className="collapse-content">
      <p>Yes! We support all major Credit Card companies as well as PayPal, Apple Pay, Google Pay , and other payment methods.
        You'll find all the supported methos in our checkout page.
      </p>
      </div>
      </div>
      </div>
      <p className='text-[gray] text-sm sm:text-base'>If you still can't find answes to one of your questions, please email us at hello@linkprofile.com and we'll be more than happy to assist you.</p>
  </div>
    </div>
  )
}
