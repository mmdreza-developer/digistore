import React, { useState } from 'react'
import Layout from "../../Components/Layout/Layout"
import { Link, useParams } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { DiGitCompare } from 'react-icons/di'
import products from '../../datas/products'
import { FaUserTie } from 'react-icons/fa6'
export default function Product() {
  const [isComment, setIsComment] = useState(false)
  const { productId } = useParams()
  console.log(productId);
  const product = products.AllProducts.find(item => item.id === productId)
  console.log(product);
  return (
    <Layout title={` محصول ${product.title}`}>
      <div className='container flex flex-col gap-4 md:flex-row  md:justify-center my-8'>
        <div className='flex-1 border rounded border-gray-200'>
          <img src={product.img} className='w-full' alt="" />
        </div>
        <div className='flex-1 flex flex-col gap-4 p-4'>
          <h1 className="text-2xl">{product.title}</h1>
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
          <div className=''>
            {product.discount && <s className='text-gray-500'>{product.price} تومان</s>}
            <div className='text-3xl text-orange'>{product.discount ? (product.price * ((100 - product.discount) / 100)) : product.price} تومان</div>

          </div>

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
      <div className='container flex flex-col my-10 shadow-md p-4'>
        <div className='flex justify-center items-center gap-4 text-xl text-gray-400'>
          <div className={`cursor-default p-1 text-black border-b ${!isComment && "border-orange"}`} onClick={() => setIsComment(false)}>توضیحات</div>
          <div className={`cursor-default p-1 text-black border-b ${isComment && "border-orange"}`} onClick={() => setIsComment(true)}>نظرات</div>
        </div>
        {isComment ? (
          <div className='flex gap-2 items-center border p-4 rounded mt-2'>
            <div className='text-2xl p-2 rounded-full border-double border-2 border-gray-300'><FaUserTie /></div>
            <div className='flex flex-col gap-1 justify-center'>
              <div className='flex items-center gapx-1'>
                <div>مدیر سایت</div>
                -
                <div>مهر 1402,12</div>
              </div>
              <div className='text-gray-500 text-sm'>متن تستی برای کامنت </div>
            </div>
          </div>
        ) :
          (
            <div className='text-gray-500 p-10 border-t text-sm px-24'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
          )}

      </div>
    </Layout>
  )
}
