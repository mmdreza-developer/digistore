import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

export default function Cart() {
  return (
    <Layout title="سبد خرید">
      <div className="container my-8 overflow-x-scroll">
        <h1 className="text-3xl">سبدخرید</h1>
        <table className='table-cart'>
          <thead>
            <tr className=''>
              <th></th>
              <th></th>
              <th>محصول</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>جمع جزء</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><AiOutlineClose className='text-red-700 text-5xl p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 cursor-pointer' /></td>
              <td><img src="/images/products/1_Blazers.jpg" className='w-[70px] h-[70px]' alt="" /></td>
              <td>
                <Link className='text-orange'>گوشی هوشمند</Link>
              </td>
              <td>400 تومان</td>
              <td className='flex items-center justify-center'>
                <button className='bg-gray-text px-3 py-1 rounded outline-none text-black'>+</button>
                <div className='w-[50px] border-y-2'>10</div>
                <button className='bg-gray-text px-3 py-1 rounded outline-none text-black'>-</button>
              </td>
              <td>1,200,000 تومان</td>
            </tr>
            <tr>
              <td><AiOutlineClose className='text-red-700 text-5xl p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 cursor-pointer' /></td>
              <td><img src="/images/products/1_Blazers.jpg" className='w-[70px] h-[70px]' alt="" /></td>
              <td>
                <Link className='text-orange'>گوشی هوشمند</Link>
              </td>
              <td>400 تومان</td>
              <td className='flex items-center justify-center'>
                <button className='bg-gray-text px-3 py-1 rounded outline-none text-black'>+</button>
                <div className='w-[50px] border-y-2'>10</div>
                <button className='bg-gray-text px-3 py-1 rounded outline-none text-black'>-</button>
              </td>
              <td>1,200,000 تومان</td>
            </tr>
            <tr>
              <td><AiOutlineClose className='text-red-700 text-5xl p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 cursor-pointer' /></td>
              <td><img src="/images/products/1_Blazers.jpg" className='w-[70px] h-[70px]' alt="" /></td>
              <td>
                <Link className='text-orange'>گوشی هوشمند</Link>
              </td>
              <td>400 تومان</td>
              <td className='flex items-center justify-center'>
                <button className='bg-gray-text px-3 py-1 rounded outline-none text-black'>+</button>
                <div className='w-[50px] border-y-2'>10</div>
                <button className='bg-gray-text px-3 py-1 rounded outline-none text-black'>-</button>
              </td>
              <td>1,200,000 تومان</td>
            </tr>
          </tbody>
        </table>
        <div className='my-6 flex gap-2 items-center justify-center flex-col md:flex-row'>
          <input type="text" placeholder='کد تخفیف' className='p-2 placeholder:text-gray-500 placeholder:text-sm rounded outline-none border border-gray-text' />
          <button className='p-2 rounded outline-none bg-orange text-white hover:bg-orange-dark transition-all duration-300'>اعمال کد تخفیف</button>
          <button className='p-2 rounded outline-none bg-orange text-white disabled:bg-gray-500 disabled:cursor-not-allowed' disabled>بروز رسانی سبد خرید</button>
        </div>
        <div className="my-6 flex flex-col gap-2 items-center justify-center">
          <div className='flex items-center gap-8'>
            <div>جمع جزء</div>
            <div className='text-sm text-gray-500'>1,465,000 تومان</div>
          </div>
          <div className='flex items-center gap-8'>
            <div>مجموع</div>
            <div className='text-orange text-xl'>1,465,000 تومان</div>
          </div>
          <div>
            <button className='px-4 py-2 rounded bg-orange text-white mt-2 text-sm hover:bg-orange-dark transition-all duration-300'>ادامه جهت تصویه حساب</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
