import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { logo1,avatar1,avatar2,avatar3 } from '../../assets/img';

export const DashboardNav = ({name}) => {
    const [tab,setTab] = useState(1);
    

    useEffect(()=>{
        name(tab===1?"Stephanie": tab===2 ? "Nathanial" : "Sara Smith")
    },[tab])

    let imgSrc = tab===1 ? avatar2 : tab===2 ? avatar3 : avatar1;
    let names = tab===1 ? "Stephanie Mark" :tab===2 ? "Nathanial" : "Sara Smith" 
  return (
    <div>
        <div className="navbar bg-base-100 shadow px-14">
  <div className="flex-1">
    <Link to="/"><p className="btn btn-ghost normal-case text-basic sm:text-xl hidden sm:flex">
        <img src={logo1} alt="" />
    </p></Link>
  </div>
  <div className="flex-none justify-center w-full sm:justify-end  md:w-[20%]">
    <ul className="menu menu-horizontal px-1 absolute">
      <li tabIndex={0}> 
      <p className='font-bold'><img src={imgSrc} />{names}  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg></p>
        
        <ul className="p-2 bg-base-100">
          <li onClick={()=>setTab(1)}><p><img src={avatar2} />Stephanie Mark</p></li>
          <li  onClick={()=>setTab(2)}><p><img src={avatar3} />Nathanial</p></li>
          <li  onClick={()=>setTab(3)}><p><img src={avatar1} />Sara Smith</p></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}
