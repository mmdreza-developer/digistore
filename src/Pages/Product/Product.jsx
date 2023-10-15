import React from 'react'
import Layout from "../../Components/Layout/Layout"
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { DiGitCompare } from 'react-icons/di'
export default function Product() {
  return (
    <Layout title="محصول">
      <div className='container flex flex-col gap-4 md:flex-row  md:justify-center my-8'>
        <div className='flex-1 border rounded border-gray-200'>
          <img src="/images/products/2_Jeans_Trousers.jpg" className='w-full' alt="" />
        </div>
        <div className='flex-1 flex flex-col gap-4 p-4'>
          <h1 className="text-2xl">شلوار</h1>
          <div className='flex gap-4 items-center text-sm text-gray-400 font-light'>
            <div>1 نظر</div>
            <Link>نظر خود را بنویسید</Link>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <div>در دسترس:</div>
            <div className='text-green-700'>موجود</div>
          </div>
          <div className='text-gray-400 text-sm'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </div>
          <div className='text-3xl text-orange mt-3'>250 تومان</div>
          <div className="flex gap-4 items-center">
            <div>تعداد:</div>
            <div className='flex items-center'>
              <button className='px-4 py-3 rounded border'><AiOutlineMinus /></button>
              <div className='w-8 flex justify-center items-center text-center p-2 border'>1</div>
              <button className='px-4 py-3 rounded border'><AiOutlinePlus /></button>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <button className='px-4 py-2 rounded border bg-black text-white hover:bg-orange'>افزودن به سبد خرید</button>
            <button className='px-4 py-2 rounded border border-black hover:text-white hover:bg-black transition-all'>خرید کنید</button>
          </div>
          <div className='flex items-center gap-4 text-gray-400'>
            <Link className='flex items-center gap-1'><AiOutlineHeart /> افزودن به علاقه مندی ها </Link>
            <Link className='flex items-center gap-1'>مقایسه <DiGitCompare /></Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
