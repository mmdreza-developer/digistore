import React from 'react'
import { Link } from 'react-router-dom'

export default function ElectronicBanners() {
    return (
        <div className='container my-14 bg-white p-4 shadow-md shadow-gray-text rounded'>
            <h1 className='text-center py-4 transform -translate-y-12'>
                <span className="text-2xl px-6 py-2 text-center bg-white rounded-full shadow-md shadow-gray-text">الکترونیکی</span>
            </h1>
            <div className='flex justify-center flex-col lg:flex-row gap-6 mb-7 overflow-hidden'>
                <img src="images/banners/banner-2-b.jpg" className='rounded transition duration-300 transform hover:-translate-y-6 flex-1 w-full' alt="" />
                <img src="images/banners/banner-2a.jpg" className='rounded transition duration-300 transform hover:-translate-y-6 flex-1 w-full' alt="" />
            </div>
            <div className='mt-5 pt-2 text-gray-text text-sm border-t text-center'>
                <Link>مشاهده و همه دسته ها</Link>
            </div>
        </div>
    )
}
