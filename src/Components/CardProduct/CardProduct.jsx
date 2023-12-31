import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { SlReload } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { addToCart } from '../../Redux/ReduxProduct/Redux'
import { useDispatch } from 'react-redux'

export default function CardProduct({ id, title, img, price, discount }) {
  const dispatch = useDispatch()
  const addToCartHanlder = () => {
    const newProduct = {
      id,
      title,
      img,
      price,
      discount
    }
    dispatch(addToCart(newProduct))
    swal({
      title: `${title} با موفقیت به سبد خرید اضافه شد`,
      icon: "success",
      buttons: "بستن"
    })
  }
  return (
    <div className='flex flex-col items-center gap-4 bg-white rounded-2xl relative border group overflow-hidden'>
      {discount && <span className='absolute px-4 py-1 rounded bg-orange text-white text-sm top-2 right-2 group-hover:z-10'>حراج</span>}
      <Link className='w-full' to={`/product/${id}`}><img className='group-hover:scale-110 transition-all duration-500 w-full' src={img} alt="" /></Link>
      <Link className='text-gray-500' to={`/product/${id}`}>{title}</Link>
      {/* {discount && <div className='flex gap-1 items-center'><span className='bg-orange text-white text-xs p-1 rounded'>تخفیف :</span> %{discount}</div>} */}
      <div className='flex justify-center items-center gap-4'>
        <div className={`${discount && 'text-orange'}`}>{discount ? (((100 - discount) * price) / 100).toLocaleString() : (+price).toLocaleString()} تومان</div>
        {discount && <s className='text-gray-text text-sm'>{(+price).toLocaleString()} تومان</s>}
      </div>
      <div className='flex justify-between items-center gap-4 w-full px-6 py-2'>
        <Link className='text-lg hover:bg-orange hover:text-white transition-all duration-300 p-2 rounded'><AiOutlineHeart /></Link>
        <div className='hover:bg-orange hover:text-white text-center p-2 rounded flex-1 text-gray-500 transition-all duration-300 text-xs cursor-pointer' onClick={addToCartHanlder}>افزودن به سبد خرید</div>
        <Link className='text-lg hover:bg-orange hover:text-white transition-all duration-300 p-2 rounded'><SlReload /></Link>
      </div>
    </div>
  )
}
