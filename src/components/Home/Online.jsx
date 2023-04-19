import React from 'react'

import { twittert,feature,avatar1,avatar2,avatar3 } from '../../assets/img'


export const Online = () => {
  return (
    <div>
          <div className="container online p-5 my-20 mx-auto justify-between items-start flex flex-col-reverse md:flex-row">
    <div className='md:w-2/6 w-full'>
    <h1 className='sm:text-4xl text-2xl font-bold md:mb-10 mb-10 '>Build your presence online throgh linkProfile.</h1>
    <p>Not only can you create social media links, but you can also analyze where the traffic is coming from so you can better understand your audience and your buisness.</p>
    </div>
    <img src={feature} alt="" className='md:w-3/6 w-full'/>
    </div>   
    <div className="container twitter p-5 my-20 justify-between flex-row hidden columns-3 gap-10 lg:flex mx-auto">
      <div className="card flex p-10 border-[2px] rounded-md w-2/6">
        <div className='flex flex-row justify-between gap-20 items-center'>
        <div className="profile flex flex-row items-center">
        <img src={avatar1} alt="" />
        <div className="name">
        <h4>Sara Smith</h4>
        <h5>@sara_smith</h5>
        </div>
        </div>
        <img src={twittert} />
        </div>
        <p className='mt-5'>I've been using <span className='text-sky-600'>@linkProfile</span> for the past 2 months and the amount of freelance work that I got from it is just overwhelming.</p>
      </div>
      <div className="card flex p-10 border-[2px] rounded-md w-2/6">
        <div className='flex flex-row justify-between gap-20 items-center'>
        <div className="profile flex flex-row items-center">
        <img src={avatar2} alt="" />
        <div className="name">
        <h4>Stephanie Mark</h4>
        <h5>@stephdesigns</h5>
        </div>
        </div>
        <img src={twittert} />
        </div>
        <p className='mt-5'>I've been using <span className='text-sky-600'>@linkProfile</span> for the past 2 months and the amount of freelance work that I got from it is just overwhelming.</p>
      </div> 
      <div className="card flex p-10 border-[2px] rounded-md w-2/6">
        <div className='flex flex-row justify-between gap-20 items-center'>
        <div className="profile flex flex-row items-center">
        <img src={avatar3} alt="" />
        <div className="name">
        <h4>Nathanial</h4>
        <h5>@nathan_bip</h5>
        </div>
        </div>
        <img src={twittert}/>
        </div>
        <p className='mt-5'>I've been using <span className='text-sky-600'>@linkProfile</span> for the past 2 months and the amount of freelance work that I got from it is just overwhelming.</p>
      </div>
    </div>
    </div>
  )
}
