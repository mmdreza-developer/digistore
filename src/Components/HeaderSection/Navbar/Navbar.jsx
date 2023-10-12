import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlineLocalGroceryStore } from "react-icons/md"
import { BiUser } from "react-icons/bi"
import { BsFillTrash3Fill, BsSearch } from "react-icons/bs"
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
        <div to="" className='relative group hover:text-orange transition cursor-pointer'>
          <div className='absolute r-0 top-0 text-sm bg-orange text-white w-4 h-4 flex justify-center items-center rounded-full'>0</div>
          <MdOutlineLocalGroceryStore />
          <div className='absolute hidden group-hover:block bg-white text-black rounded-xl shadow-md z-20 w-[350px] -left-[150px] md:-right-[280px]'>
            <div className=' border-b text-gray-700 p-2 text-lg font-bold'>سبد خرید</div>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between items-center text-sm p-2 border'>
                <Link>
                  <img src="/images/products/1_Blazers.jpg" alt="" className='w-[90px] h-[90px] rounded' />
                </Link>
                <div className='flex flex-col gap-3'>
                  <Link>پیراهن مردانه</Link>
                  <div>1,200,000 تومان</div>
                </div>
                <Link className='text-gray-text text-lg'><BsFillTrash3Fill /></Link>
              </div>
              <div className='flex justify-between items-center text-sm p-2 border'>
                <Link>
                  <img src="/images/products/1_Sofa_Chair.jpg" alt="" className='w-[90px] h-[90px] rounded' />
                </Link>
                <div className='flex flex-col gap-3'>
                  <Link>مبل راحتی</Link>
                  <div>3,200,000 تومان</div>
                </div>
                <Link className='text-gray-text text-lg'><BsFillTrash3Fill /></Link>
              </div>
              <div className='p-4 flex justify-between items-center text-xl'>
                <div>جمع کل سبد خرید:</div>
                <div className='text-orange'>4,400,000 تومان</div>
              </div>
              <div className='p-4 flex justify-between items-center'>
                <button className='bg-white border border-black rounded px-4 py-2 text-black text-sm hover:bg-orange hover:text-white hover:border-orange transition duration-300'>مشاهده سبد خرید</button>
                <button className='bg-black rounded px-4 py-2 text-white text-sm hover:bg-orange transition duration-300'>تسویه حساب</button>
              </div>
            </div>
          </div>
        </div>
        <Link to="" className='flex bg-orange text-white hover:text-white hover:bg-orange p-1 rounded items-center'><BiUser /></Link>
      </div>
    </div>
  )
}
