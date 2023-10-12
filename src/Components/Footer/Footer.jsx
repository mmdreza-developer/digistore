import React from 'react'
import { AiFillLinkedin, AiFillPhone, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { CgMail } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { BiTimeFive } from 'react-icons/bi'

export default function Footer() {
    return (
        <div className='flex flex-col gap-2 bg-white'>
            <div className=' bg-blue flex gap-2 flex-col lg:grid grid-cols-3'>
                <div className='flex justify-center items-center gap-2 text-xl bg-dark-bg p-6'>
                    <Link className='text-black p-3 rounded-full bg-white hover:bg-orange hover:text-white transition-all duration-300 transform hover:-translate-y-2'><AiOutlineInstagram /></Link>
                    <Link className='text-black p-3 rounded-full bg-white hover:bg-orange hover:text-white transition-all duration-300 transform hover:-translate-y-2'><AiOutlineTwitter /></Link>
                    <Link className='text-black p-3 rounded-full bg-white hover:bg-orange hover:text-white transition-all duration-300 transform hover:-translate-y-2'><BsFacebook /></Link>
                    <Link className='text-black p-3 rounded-full bg-white hover:bg-orange hover:text-white transition-all duration-300 transform hover:-translate-y-2'><AiFillYoutube /></Link>
                    <Link className='text-black p-3 rounded-full bg-white hover:bg-orange hover:text-white transition-all duration-300 transform hover:-translate-y-2'><AiFillLinkedin /></Link>
                </div>
                <div className='text-white flex flex-col justify-center gap-1 items-center lg:items-start'>
                    <div className='text-lg'>کمک میخواهید؟ با ما تماس بگیرید</div>
                    <div className='text-sm'>تیم پشتیبانی 24/7 در 021-987654</div>
                </div>
                <div className='flex items-center p-2'>
                    <div className='relative lg:w-[60%] w-full'>
                        <input className='w-full p-3 outline-none placeholder:text-sm placeholder:text-gray-500 rounded-3xl' type="text" placeholder='آدرس ایمیل خود را وارد کنید' />
                        <button className='absolute left-0 top-1 rounded-3xl bg-orange text-white px-5 py-2'>عضویت</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 container pt-6">
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <div className="text-orange p-1 rounded shadow-md text-xl">
                            <FaLocationDot />
                        </div>
                        <div className='text-gray-500'>مازندران تنکابن خیابان فردوسی</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className="text-orange p-1 rounded shadow-md text-xl">
                            <AiFillPhone />
                        </div>
                        <div className='text-gray-500'>021-9876543</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className="text-orange p-1 rounded shadow-md text-xl">
                            <CgMail />
                        </div>
                        <div className='text-gray-500'>support@wpthemego.com</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className="text-orange p-1 rounded shadow-md text-xl">
                            <BiTimeFive />
                        </div>
                        <div className='text-gray-500'>7 روز در هفته از ساعت 10 صبح تا 6 بعد از ظهر</div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className="text-lg pb-2 relative mb-2">درباره ما <span className='absolute right-0 bottom-0 w-[35px] h-1 rounded bg-orange'></span></h1>
                    <ul className='text-gray-500 text-sm flex flex-col gap-2'>
                        <li>
                            <Link>ارسال و ضمانت</Link>
                        </li>
                        <li>
                            <Link>خرید ایمن</Link>
                        </li>
                        <li>
                            <Link>وضعیت سفارش</Link>
                        </li>
                        <li>
                            <Link>حمل و نقل بین المللی</Link>
                        </li>
                        <li>
                            <Link>درباره ما</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className="text-lg pb-2 relative mb-2">خدمات ما <span className='absolute right-0 bottom-0 w-[35px] h-1 rounded bg-orange'></span></h1>
                    <ul className='text-gray-500 text-sm flex flex-col gap-2'>
                        <li>
                            <Link>حریم خصوصی</Link>
                        </li>
                        <li>
                            <Link>خدمات مشتری</Link>
                        </li>
                        <li>
                            <Link>سفارشات و بازگشت</Link>
                        </li>
                        <li>
                            <Link>پیگیری سفارشات</Link>
                        </li>
                        <li>
                            <Link>تماس با ما</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className="text-lg pb-2 relative mb-2">اطلاعات<span className='absolute right-0 bottom-0 w-[35px] h-1 rounded bg-orange'></span></h1>
                    <ul className='text-gray-500 text-sm flex flex-col gap-2'>
                        <li>
                            <Link>حریم خصوصی</Link>
                        </li>
                        <li>
                            <Link>خرید ایمن</Link>
                        </li>
                        <li>
                            <Link>وضعیت سفارش</Link>
                        </li>
                        <li>
                            <Link>پیگیری سفارشات</Link>
                        </li>
                        <li>
                            <Link>روش پرداخت</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className="text-lg pb-2 relative mb-2">موارد اضافی<span className='absolute right-0 bottom-0 w-[35px] h-1 rounded bg-orange'></span></h1>
                    <ul className='text-gray-500 text-sm flex flex-col gap-2'>
                        <li>
                            <Link>ارسال و ضمانت</Link>
                        </li>
                        <li>
                            <Link>خرید ایمن</Link>
                        </li>
                        <li>
                            <Link>وضعیت سفارش</Link>
                        </li>
                        <li>
                            <Link>حمل و نقل بین المللی</Link>
                        </li>
                        <li>
                            <Link>درباره ما</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='p-2 mt-4 bg-gray-bg text-gray-500 text-sm'>
                <div className="container flex items-center justify-between">
                    <div>© تمامی حقوق برای این قالب محفوظ است.</div>
                    <img src="/images/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}
