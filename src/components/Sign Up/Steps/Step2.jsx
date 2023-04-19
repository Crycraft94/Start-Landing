import React, { useState } from 'react';
import { dribble,blogger,discord,youtube,linkedin,twitter,plus } from '../../../assets/img';

export const Step2 = ({next}) => {
    const [selected, setSelected] = useState([]);
    const [all, setAll] = useState([
        {
            text: "dribble",
            img: dribble,
            color:"bg-[#ea4c89] ",
            id: 0
        },
        {
            text: "blogger",
            img: blogger,
            color:"bg-[#fc4f08]",
            id: 1
        },
        {
            text: "disocrd",
            img: discord,
            color:"bg-[#7289da]",
            id: 2
        },
        {
            text: "youtube",
            img: youtube,
            color:"bg-[#ff0000]",
            id: 3
        },
        {
            text: "linkedin",
            img: linkedin,
            color:"bg-[#0e76a8]",
            id: 4
        },
        {
            text: "twitter",
            img: twitter,
            color:"bg-[#00acee]",
            id: 5
        },
      
    ]);
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
        <form  onSubmit={next} className='flex flex-col justify-center items-center text-center mt-[100px]'>
        <h1 className='font-bold text-4xl px-[40px]'>Choose you social media profiles</h1>
        <p className='text-[gray] mt-4 px-[40px]'>and the social media profiles you'd like to be displayed on your website.</p>
        <div className='flex md:flex-row flex-col gap-3 columns-2 mt-10 md:w-[60%] w-full justify-center items-center'>
            <div className='bg-white border-2 rounded-md p-5 w-[70%] md:w-[40%]  h-[440px] min-h-[40vh]'>
                <p className='font-bold mb-4  text-[14px]'>Availabale Social Media Platforms</p>
                {
                    all.map((items)=>     
                    <div className={`${items.color} items-center flex justify-between text-white p-2 rounded-md mb-4`} key={items.id} onClick={()=>add(items)} >
                    <div className='flex gap-2 items-center'>
                    <img src={items.img} alt="" />
                    <p>{items.text}</p>
                    </div>
                    <img src={plus} alt="" className='w-[20px]'/>
                 
                     </div>)
                }
            </div>
            <div className='bg-white border-2 rounded-md p-5 w-[70%] md:w-[40%] h-[440px] min-h-[40vh]'>
                <p className=' text-[14px] mb-4 font-bold'>Currently added</p>
                {
                    selected.map((items)=>     
                    <div className={`${items.color} items-center flex justify-between text-white p-2 rounded-md mb-4`} key={items.id}  onClick={()=>remove(items)}>
                    <div className='flex gap-2 items-center'>
                    <img src={items.img} alt="" />
                    <p>{items.text}</p>
                    </div>
                    <img src={plus} alt="" className='w-[20px]'/>
                 
                     </div>)
                }
                
            </div>
        </div>
        <div className='block ustify-end items-end max-w-full w-full my-10'>
        <button className='bg-[#6016fc] text-lg text-[#c3a7fc] font-bold p-3 rounded w-1/5' type='submit'>Next</button>
        </div>
   </form>
    </>
  )
}
