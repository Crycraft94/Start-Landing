import React from 'react'
import { logo2 } from '../../assets/img';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
<div>
<div className='container mx-auto w-full p-5'>
  <div className="navbar bg-[transparent] items-center justify-center flex ">
   <div className="navbar-start items-center gap-5">
    <p className='mt-1'><img src={logo2} /></p>
    <ul className='justify-between items-center gap-5 text-white hidden md:flex'>
        <Link to='/dashboard'>Dashboard</Link>
        <li><a href='/'>Testimonials</a></li>
        <li><a href='/'>Pricing</a></li>
       
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/signup' className="btn rounded-3xl  bg-black font-thin normal-case hidden md:flex">Get Started for free</Link>
    <div className="dropdown lg:hidden md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
        <li><Link to='/'>Homepage</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li> 
        <li><p>Testimonials</p></li>
        <li><p>Pricing</p></li>
      </ul>
     </div>
    </div>
  </div>
  </div>
</div>
  )
}
