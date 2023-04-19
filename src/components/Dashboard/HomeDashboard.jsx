import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import {blogger,dashboard,discord,dribble,linkedin,overview,play,plus,twitter, youtube } from '../../assets/img';

export const HomeDashboard = ({title}) => {

    const [selected, setSelected] = useState([]);
    const [mediaName , setName] = useState("");
    const [mediaColor , setColor] = useState("");
    const [mediaIcon, setIcon] = useState("");
    const [all, setAll] = useState([
        {
            text: "dribble",
            img: dribble,
            color:"#ea4c89",
            id: 0
        },
        {
            text: "blogger",
            img: blogger,
            color:"#fc4f08",
            id: 1
        },
        {
            text: "disocrd",
            img: discord,
            color:"#7289da",
            id: 2
        },
        {
            text: "youtube",
            img: youtube,
            color:"#ff0000",
            id: 3
        },
        {
            text: "linkedin",
            img: linkedin,
            color:"#0e76a8",
            id: 4
        },
        {
            text: "twitter",
            img: twitter,
            color:"#00acee",
            id: 5
        },
      
    ]);
    const custom=(data)=>{
      data.preventDefault()
      let customData ={
        text: mediaName,
        img : mediaIcon,
        color : mediaColor
      }
      setSelected([...selected,customData]);
    }
    const add=(data)=>{
       
        setSelected([...selected,data]);
        setAll(all.filter((item)=>item.id != data.id))
    }
    const remove=(data)=>{
        setAll([...all , data]);
        setSelected(selected.filter((item)=>item.id != data.id)) 
    }
  return (
    
    <>
<div className='main w-full flex flex-col p-10 sm:p-0'>
  <h2 className='mb-8 font-bold text-2xl'>Welcome, {title}!</h2>
  <div className='flex flex-col sm:flex-row'>
  <div className='pics relative w-full sm:w-[40%]'>
    <img src={dashboard} className='h-full object-cover w-full'/>
    <img src={play} className='absolute top-[45%] left-[45%]'/>
  </div>
  <div className='bg-white flex flex-col w-full sm:w-[60%] p-[20px]'>
      <h2 className='font-bold text-sm lg:text-lg'>How Freelancing Has Changed My Life with Andereson Matthew</h2>
      <p className='text-[gray] text-xs lg:text-base'>Tune in to this episode of interviewing freelancers from around the world and how linkProfile has helped. In this episode, Anderson goes over his strategies to get your first online client and how to do ooutreach.</p>
      <span className='text-[gray] mb-4 text-xs  lg:text-base'>Anderson also goes over how linkProfile managed to secure a $60k client.</span>
      
      <div className='flex justify-start'>
      <button className='watch px-10 py-2 border-2 rounded font-bold'>Watch Video Now</button>
      </div>
  </div>
  </div>
  <div className='flex lg:flex-row flex-col sm:mt-5 mt-10 justify-between'>
  <div className='flex flex-col justify-start items-start text-center lg:w-[57%] mb-10 lg:mb-0'>
        <div className='flex md:flex-row flex-col lg:gap-3 sm:gap-4 lg:columns-2  w-full justify-center sm:justify-start items-center sm:items-start '>
            <div className='bg-white border-2 rounded-md p-5 w-full h-auto min-h-[40vh] mb-4 sm:mb-0'>
                <p className='font-bold mb-4  text-[14px]'>Availabale Social Media Platforms</p>
                {
                    all.map((items)=>     
                    <div className={` items-center flex justify-between text-white p-2 rounded-md mb-4`} style={{backgroundColor:`${items.color}`}} key={items.id} onClick={()=>add(items)} >
                    <div className='flex gap-2 items-center'>
                    <img src={items.img} alt="" />
                    <p>{items.text}</p>
                    </div>
                    <img src={plus} alt="" className='w-[20px]'/>
                     </div>)
                }
                <hr />
                     <label htmlFor="my-modal-4" className="btn bg-white hover:text-white border-2 font-bold mt-4 p-2 w-full text-black">Create Custome Link</label>
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                    <form onSubmit={custom}>
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold text-start">Create a custome social media link</h3>
                        <div className='flex flex-col text-start mt-10 text-lg'>
                        <label className='mb-2'>Social Media Name</label>
                        <input type="text" placeholder='i.e Behance' className='p-2 border-2 rounded-md mb-6' required value={mediaName} onChange={(e)=>setName(e.target.value)} />
                        <label  className='mb-2'>Color</label>
                        <input type="text"placeholder='i.e #053eff' className='p-2 border-2 rounded-md mb-6' required value={mediaColor} onChange={(e)=>setColor(e.target.value)}/>
                        <label  className='mb-2'>Link</label>
                        <input type="text"  placeholder='i.e https://behance.net' className='p-2 border-2 rounded-md mb-6' required/>
                        <label  className='mb-2'>Icon Link</label>
                        <input type="text" placeholder='i.e https://cdn.com/behance.svg' className='p-2 border-2 rounded-md mb-6' required value={mediaIcon} onChange={(e)=>setIcon(e.target.value)}/>
                        <button type='submit' className='bg-[#6016fc] text-lg text-[#c3a7fc] font-bold  p-3 w-full rounded'>Add Custom Link</button>
                        </div>
                    </form>
                    </label>
                    </label>
            </div>
            <div className='bg-white border-2 rounded-md p-5 w-full h-auto min-h-[40vh]'>
                <p className=' text-[14px] mb-4 font-bold'>Currently added</p>
                {
                    selected.map((items)=>     
                    <div className={` items-center flex justify-between text-white p-2 rounded-md mb-4`} style={{backgroundColor:`${items.color}`}} key={items.id} onClick={()=>remove(items)}>
                    <div className='flex gap-2 items-center'>
                    <img src={items.img} alt="" />
                    <p>{items.text}</p>
                    </div>
                    <img src={plus} alt="" className='w-[20px]'/>
                 
                     </div>)
                }
            </div>
        </div>
   </div>
   <img src={overview} alt="" className='lg:w-[40%] sm:w-[60%] w-full'/>
  </div>

</div>
    </>
  )
}
