import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <div className=' bg-gray-bg shadow-md'>
      <div className='flex flex-col gap-2 md:flex-row md:justify-between items-center p-2 container'>
        <div className='wc-secondary-text'>
          سلام به دیجی استور خوش آمدید!
        </div>
        <div className='text-sm flex gap-x-3 items-center'>
          <div className='hidden md:flex gap-x-3 items-center'>
            <Link className='wc-secondary-text hover:text-wc-primary' to="">محل فروشگاه</Link>
            <Link className='wc-secondary-text hover:text-wc-primary' to="">پیگیری سفارشات</Link>
            <Link className='wc-secondary-text hover:text-wc-primary' to="">سوالات متداول</Link>
          </div>
          <select name="" id="" className='outline-none p-1 text-xs rounded bg-transparent border border-white  hover:bg-blue hover:text-white focus:bg-blue focus:text-white '>
            <option value="">ARABIC <img src="/images/flags/flag-arabic.png" alt="" /></option>
            <option value="">EN <img src="/images/flags/flag-en.png" alt="" /></option>
          </select>
        </div>
      </div>
    </div>
  )
}
