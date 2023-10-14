import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <Layout title="حساب من">
      <div className="container">
        <h1 className="text-3xl mt-8">حساب من</h1>
        <div className='my-8 flex lg:gap-20 flex-col lg:flex-row gap-4 lg:justify-center'>
          <div className='flex-1 p-10'>
            <div className="text-xl text-gray-800 border-b p-2">ورود</div>
            <form action="mt-4">
              <div className='flex flex-col w-full mt-4'>
                <label htmlFor="input-1" className='text-gray-500 text-sm pb-1'>نام کاربری یا آدرس ایمیل <span className='text-red-700'>*</span></label>
                <input id='input-1' type="text" className='outline-none bg-gray-200 w-full p-2 rounded' />
              </div>
              <div className='flex flex-col w-full mt-4'>
                <label htmlFor="input-2" className='text-gray-500 text-sm pb-1'>کلمه عبور<span className='text-red-700'>*</span></label>
                <input id='input-2' type="password" className='outline-none bg-gray-200 w-full p-2 rounded' />
              </div>
              <div className='mt-4 flex items-center gap-2'>
                <input id='input-3' type="checkbox" />
                <label htmlFor="input-3" className='text-gray-500 text-sm pb-1 mt-1'>مرا به خاطر بسپار</label>
              </div>
              <div className='mt-4'>
                <button className='bg-orange text-white px-8 py-2 rounded'>ورود</button>
              </div>
              <Link className='text-orange text-xs mt-4 '>رمزعبور را فراموش کرده اید؟</Link>
            </form>
          </div>
          <div className='flex-1 p-10'>
            <div className="text-xl text-gray-800 border-b p-2">ثبت نام</div>
            <form action="mt-4">
              <div className='flex flex-col w-full mt-4'>
                <label htmlFor="input-4" className='text-gray-500 text-sm pb-1'>نام کاربری <span className='text-red-700'>*</span></label>
                <input id='input-4' type="text" className='outline-none bg-gray-200 w-full p-2 rounded' />
              </div>
              <div className='flex flex-col w-full mt-4'>
                <label htmlFor="input-5" className='text-gray-500 text-sm pb-1'>آدرس ایمیل<span className='text-red-700'>*</span></label>
                <input id='input-5' type="email" className='outline-none bg-gray-200 w-full p-2 rounded' />
              </div>
              <div className='flex flex-col w-full mt-4'>
                <label htmlFor="input-6" className='text-gray-500 text-sm pb-1'>کلمه عبور<span className='text-red-700'>*</span></label>
                <input id='input-6' type="password" className='outline-none bg-gray-200 w-full p-2 rounded' />
              </div>
              <div className='mt-4'>
                <button className='bg-orange text-white px-8 py-2 rounded'>ثبت نام</button>
              </div>
              <div className='text-gray-500 text-xs mt-4 '>اطلاعات شخصی شما برای پشتیبانی از تجربه شما در سراسر این وب سایت، مدیریت دسترسی به حساب شما، و برای اهداف دیگری که در ما توضیح داده شده است، استفاده خواهد شد. سیاست حفظ حریم خصوصی.</div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
