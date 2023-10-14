import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle, AiFillLock, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { MdOutlineLocalGroceryStore } from "react-icons/md"
import { BiUser } from "react-icons/bi"
import { FiKey } from "react-icons/fi"
import { BsDot, BsFillPersonVcardFill, BsFillTrash3Fill, BsSearch } from "react-icons/bs"
import { useState } from 'react'
export default function Navbar() {
  const [isFormShow, setIsFormShow] = useState(false)
  return (
    <div className='flex flex-col gap-2 md:flex-row justify-between items-center pt-6 container'>
      <div><img src="/images/logo.png" alt="" /></div>
      <div className=' relative w-full md:w-[50%] mx-6'>
        <input className='border border-orange outline-none rounded-xl text-orange p-3 w-full' type="text" placeholder='جستجو محصول ...' />
        <button className='text-white bg-orange p-2 absolute left-0 top-0 rounded-lg h-full w-14 flex justify-center items-center'><BsSearch /></button>
      </div>
      <div className='flex flex-1 gap-x-2 items-center justify-between md:justify-end p-2 md:p-0'>
        <Link to="" className='relative hover:text-orange transition'>
          <div className='absolute r-0 top-0 text-sm bg-orange text-white w-4 h-4 flex justify-center items-center rounded-full'>0</div>
          <AiOutlineHeart className=' text-3xl' />
        </Link>
        <div to="" className='relative group hover:text-orange transition cursor-pointer'>
          <div className='absolute r-0 top-0 text-sm bg-orange text-white w-4 h-4 flex justify-center items-center rounded-full'>0</div>
          <MdOutlineLocalGroceryStore className=' text-3xl' />
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
        <div className='flex gap-1 items-center'>
          <BiUser className='text-3xl' />
          <div className='flex flex-col text-sm justify-center text-gray-500 relative'>
            <Link to="" className='hover:text-orange' onClick={() => setIsFormShow(true)}>ورود</Link>
            <Link to="/my-account">ثبت نام</Link>
          </div>
          {isFormShow && (
            <div className={`${isFormShow ? "z-20 opacity-100" : " -z-10 opacity-0"} transition-all duration-500`}>
              <div className='fixed flex flex-col gap-4 bg-white shadow-md rounded-lg overflow-hidden transform right-[15%] md:right-[25%] lg:right-[35%] top-[200px] z-30'>
                <div className='flex justify-between items-center p-3 bg-orange text-white gap-3'>
                  <div className='flex items-center gap-3'>
                    <BsFillPersonVcardFill className='text-2xl' />
                    وارد شوید یا ثبت نام کنید
                  </div>
                  <div className='text-2xl cursor-pointer' onClick={()=>setIsFormShow(false)}>
                    <AiFillCloseCircle />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row p-2 justify-between gap-4'>
                  <form action="" className='flex flex-col gap-2'>
                    <div className='relative'>
                      <div className='text-xl bg-gray-500 text-white absolute p-[11px] rounded-l top-0'><AiOutlineUser /></div>
                      <input type="text" className='p-2 pr-12 placeholder:text-sm outline-none border rounded border-gray-300 focus:border-blue focus:shadow-md' placeholder='نام کاربری' />
                    </div>
                    <div className='relative'>
                      <div className='text-xl bg-gray-500 text-white absolute p-[11px] rounded-l top-0'><FiKey /></div>
                      <input type="text" className='p-2 pr-12 placeholder:text-sm outline-none border rounded border-gray-300 focus:border-blue focus:shadow-md' placeholder='کلمه عبور' />
                    </div>
                    <div>
                      <Link className='text-xs text-gray-500'>رمز عبور را فراموش کرد</Link>
                    </div>
                    <div>
                      <Link className='flex justify-center gap-2 items-center px-5 py-3 bg-orange hover:bg-orange-dark hover:text-white transition-all duration-300 text-white rounded'>
                        <AiFillLock className='text-2xl' />
                        ورود
                      </Link>
                    </div>
                  </form>
                  <div>
                    <div className='font-bold text-lg'>تازه وارد به اینجا؟</div>
                    <div className='text-sm text-gray-500'>ثبت نام رایگان و آسان است!</div>
                    <ul className='mt-3 text-gray-500 italic'>
                      <li className='flex gap-2 items-center'><BsDot /> سریعتر بررسی کنید</li>
                      <li className='flex gap-2 items-center'><BsDot /> چندین آدرس حمل و نقل را ذخیره کنید</li>
                      <li className='flex gap-2 items-center'><BsDot /> مشاهده و پیگیری سفارشات و موارد دیگر</li>
                    </ul>
                    <div className='mt-4 pb-4'>
                      <Link className='text-white flex items-center  bg-orange hover:text-white px-8 py-4 rounded hover:bg-orange-dark'>ساخت یک حساب کاربری</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` fixed top-0 bottom-0 left-0 right-0 bg-dark-bg`} onClick={() => setIsFormShow(false)}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
