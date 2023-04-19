import React, { useState } from 'react';

import { account,chart , home } from '../../assets/img';
import { Analytics } from './Analytics';
import { Account } from './Account';
import { DashboardNav } from './DashboardNav';
import { HomeDashboard } from './HomeDashboard';

export const Dashboard = () => {
  const [tab,setTab] = useState(1);
  const [title , setTitle] = useState("Stephanie");

  const nameSwitch=(data)=>{
    setTitle(data);
  }
  return (
    <>
    <div className='bg-[#f8f9fb] min-h-screen  pb-[70px]'>
    <DashboardNav name={nameSwitch} />
    <div className="container mt-5 sm:mt-10 mx-auto md:mt-20 flex lg:flex-row flex-col gap-10">
    <div  className=' bg-white max-h-full rounded lg:w-[20%] w-full'>
      <div className='sideBar gap-[45vh] lg:pt-10'>
      <ul className='flex lg:flex-col mx-auto justify-center lg:justify-start text-center'>
       <a href='#'><li className={`lg:mb-2 sm:text-lg text-sm  px-4 sm:px-[35px] gap-2 sm:gap-[30px] ${tab===1?"text-[#6016FC] bg-[#f8f9fb]":"text-[gray]"}`} onClick={()=>setTab(1)}><img src={home} />Home</li></a>
      <a href='#'><li className={`lg:mb-2 sm:text-lg text-sm  px-4 sm:px-[35px] gap-2 sm:gap-[30px] ${tab==2?"text-[#6016FC] bg-[#f8f9fb]":"text-[gray]"}`} onClick={()=>setTab(2)}><img src={chart} className='w-[15px]'/> Analytics</li></a>
       <a href='#'><li className={`lg:mb-2 sm:text-lg text-sm  px-4 sm:px-[35px] gap-2 sm:gap-[30px] ${tab==3?"text-[#6016FC] bg-[#f8f9fb]":"text-[gray]"}`} onClick={()=>setTab(3)}><img src={account} /> Account</li></a> 
      </ul>
    </div>
   </div>
{
  tab===1 && <HomeDashboard title ={title} />
}
{
  tab===2 && <Analytics />
}
{
  tab===3 && <Account />
}
</div>
</div>

</>
    
  )
}
