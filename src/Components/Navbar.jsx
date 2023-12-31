import React from 'react'
import Img from '/figma.png'
import ProfileImg from '/likepic.png'
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between px-10 py-5 w-full h-14 bg-white pl-14'>
        <div><Link to={"/"}><img src={Img} alt="" /></Link></div>
        <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <p className='font-bold text-black text-[18px]'>Free Trial</p>
                <p className='font-bold text-black'>|</p>
                <p className='text-black text-[14px]'>2 days left</p>
              </div>
              <div>
                <p className='text-red-500 text-[15px] cursor-pointer'>Extend free trial</p>
              </div>
            </div>
            <div className='w-10 h-10 rounded-full'>
                <img src={ProfileImg} alt="" className='rounded-full cursor-pointer'/>
            </div>
            <div className='cursor-pointer'><IoMdArrowDropdown/></div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Navbar