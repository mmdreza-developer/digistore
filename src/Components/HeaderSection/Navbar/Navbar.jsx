import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlineLocalGroceryStore } from "react-icons/md"
import { BiUser } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
export default function Navbar() {
  return (
    <div className='flex flex-col gap-2 md:flex-row justify-between items-center pt-6 container'>
      <div><img src="/images/logo.png" alt="" /></div>
      <div className=' relative w-full md:w-[50%] mx-6'>
        <input className='border border-orange outline-none rounded-xl text-orange p-3 w-full' type="text" placeholder='جستجو محصول ...' />
        <button className='text-white bg-orange p-2 absolute left-0 top-0 rounded-lg h-full w-14 flex justify-center items-center'><BsSearch /></button>
      </div>
      <div className='flex flex-1 gap-x-2 justify-between md:justify-end text-3xl p-2 md:p-0'>
        <Link to="" className='relative hover:text-orange transition'>
          <div className='absolute r-0 top-0 text-sm bg-orange text-white w-4 h-4 flex justify-center items-center rounded-full'>0</div>
          <AiOutlineHeart />
        </Link>
        <Link to="" className='relative hover:text-orange transition'>
          <div className='absolute r-0 top-0 text-sm bg-orange text-white w-4 h-4 flex justify-center items-center rounded-full'>0</div>
          <MdOutlineLocalGroceryStore />
        </Link>
        <Link to="" className='flex bg-orange text-white p-1 rounded items-center'><BiUser /></Link>
      </div>
    </div>
  )
}
