import React from 'react'
import { Link } from 'react-router-dom'

export default function LatestNewsItem({ img, date, month, sender, title, desc, link }) {
    return (
        <Link className='flex flex-col gap-2 rounded-xl overflow-hidden p-3 bg-white group relative'>
            {
                date && month && <div className='absolute z-10 p-2 top-4 right-4 rounded bg-white text-black flex flex-col items-center gap-1'>
                    <div className='text-lg'>{date}</div>
                    <div className='text-xs text-gray-500'>{month}</div>
                </div>
            }
            <div className='relative overflow-hidden rounded-xl'>
                <img src={img} className='rounded-xl transition duration-300 hover:scale-110 w-full hover:blur-[1px]' alt="" />
            </div>
            <div className='flex gap-1 items-center text-gray-500 text-sm'>
                <span>
                    ارسال توسط:
                </span>
                <Link>
                    {sender}
                </Link>
            </div>
            <Link className='text-black'>{title}</Link>
            <div className='text-sm text-gray-500'>
                {desc}
            </div>
            <div>
                <Link className='px-4 py-1 rounded bg-white text-orange hover:text-white hover:bg-orange transition duration-300 group-hover:bg-orange group-hover:text-white'>ادامه مطلب</Link>
            </div>
        </Link>
    )
}
