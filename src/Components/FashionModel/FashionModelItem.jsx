import React from 'react'
import { Link } from 'react-router-dom'

export default function FashionModelItem({ img, title, countItem }) {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <Link className=' rounded-full transition-all duration-300 hover:rounded-lg shadow-md overflow-hidden flex justify-center'>
                <img src={img} alt="" />
            </Link>
            <Link className='text-dark-bg'>{title}</Link>
            <div className='text-sm text-gray-500'>{countItem} مورد</div>
        </div>
    )
}
