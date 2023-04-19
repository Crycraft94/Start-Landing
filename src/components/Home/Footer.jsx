import React from 'react'
import { Link } from 'react-router-dom';
import { logo2 } from '../../assets/img';

export const Footer = () => {
  return (
    <div>
            <div className='bg-[#6016fc] '>
    <div className="container footer sm:p-20 p-10 pb-[100px] justify-between text-white mx-auto flex flex-col md:flex-row columns-5">
    <div className='flex flex-col md:w-1/3 w-full'>
    <p className='mb-3'><img src={logo2} /></p>
    <p>With linkProfile, you can create a one page website that links to all your social media profiles in less than 5 minutes of setup.</p>
    </div>
    <div className='flex sm:flex-row flex-col gap-4'>
    <div className='flex gap-3'>
    <div>
      <ul>
        <li className='font-bold mb-3'><a href="/">Sitemap</a></li>
        <li className='mb-2'><a href="/">Home</a></li>
        <li className='mb-2'><a href="/">Pricing</a></li>
        <li><a href="/">Testimonials</a></li>
      </ul>
    </div>
    <div>
      <ul>
        <li className='font-bold mb-3'><a href="/">Resources</a></li>
        <li className='mb-2'><a href="/">Support</a></li>
        <li className='mb-2'><a href="/">Contact</a></li>
        <li>FAQ</li>
      </ul>
    </div>
 </div>
    <div className='flex gap-3'>
    <div>
      <ul>
        <li className='font-bold mb-3'><a href="/">Company</a></li>
        <li className='mb-2'><a href="/">About</a></li>
        <li className='mb-2'><a href="/">Customers</a></li>
        <li><a href="/">Blog</a></li>
      </ul>
    </div>
    <div>
      <ul>
        <li className='font-bold mb-3'><a href="/">Account</a></li>
        <li className='mb-2'><Link to='/signup'><a href="/">Login</a></Link></li>
        <li><Link to='/signup'><a href="/">Register</a></Link></li>
      </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
