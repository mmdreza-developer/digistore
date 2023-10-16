import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeToCart } from '../../Redux/ReduxProduct/Redux'
import CounterProduct from '../../hooks/CounterProduct/CounterProduct'
export default function Cart() {
  const productsStore = useSelector(state => state.productStore.cart)
  console.log(productsStore);
  const dispatch = useDispatch()
  const removeCart = (itemId) => {
    dispatch(removeToCart(itemId))
  }
  const IncrementProduct = (itemId) => {
    dispatch(incrementQuantity(itemId))
  }
  const DecrementProduct = (itemId) => {
    dispatch(decrementQuantity(itemId))
  }
  return (
    <Layout title="سبد خرید">
      {productsStore.length ? (
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
              {productsStore.length && (
                productsStore.map(item => (
                  <tr key={item.id}>
                    <td><AiOutlineClose className='text-red-700 text-5xl p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 cursor-pointer' onClick={() => removeCart(item.id)} /></td>
                    <td><img src={`${item.img}`} className='w-[70px] h-[70px]' alt="" /></td>
                    <td>
                      <Link className='text-orange'>{item.title}</Link>
                    </td>
                    <td>{item.discount ? (((100 - item.discount) / 100) * item.price) : item.price} تومان</td>
                    <td className=''>
                      <CounterProduct id={item.id} quantity={item.quantity} />
                    </td>
                    <td>{item.discount ? (((100 - item.discount) / 100) * item.price) * item.quantity : item.price * item.quantity} تومان</td>
                  </tr>
                ))
              )}


            </tbody>
          </table>
          <div>
            <div className='my-6 flex gap-2 items-center justify-center flex-col md:flex-row'>
              <input type="text" placeholder='کد تخفیف' className='p-2 placeholder:text-gray-500 placeholder:text-sm rounded outline-none border border-gray-text' />
              <button className='p-2 rounded outline-none bg-orange text-white hover:bg-orange-dark transition-all duration-300'>اعمال کد تخفیف</button>
              <button className='p-2 rounded outline-none bg-orange text-white disabled:bg-gray-500 disabled:cursor-not-allowed' disabled>بروز رسانی سبد خرید</button>
            </div>
            <div className="my-6 flex flex-col gap-2 items-center justify-center">
              <div className='flex items-center gap-8'>
                <div>جمع جزء</div>
                <div className='text-sm text-gray-500'>{Number(productsStore.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)).toLocaleString()} تومان</div>
              </div>
              <div className='flex items-center gap-8'>
                <div>مجموع</div>
                <div className='text-orange text-xl'>{Number(productsStore.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)).toLocaleString()} تومان</div>
              </div>
              <div>
                <button className='px-4 py-2 rounded bg-orange text-white mt-2 text-sm hover:bg-orange-dark transition-all duration-300'>ادامه جهت تصویه حساب</button>
              </div>
            </div>
          </div>
        </div>
      ) :
        <div className='py-14 flex justify-center items-center text-2xl text-red-600 font-bold'>
          <AiOutlineShoppingCart className='text-4xl' />
          <h1 className=''>سبد خرید خالی است!!!</h1>
        </div>}
    </Layout>
  )
}
