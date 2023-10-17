import React from 'react'
import Layout from '../../Components/Layout/Layout'
import products from '../../datas/products'
import CardProduct from '../../Components/CardProduct/CardProduct'
import AOS from 'aos'
import { useEffect } from 'react'
import LatestNews from '../../Components/LatestNews/LatestNews'
export default function Products() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Layout title="تمام محصولات">
      <div className='mt-7 container'>
        <h1 className="text-2xl font-bold text-blue my-5">تمام محصولات</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-8' aos-data="fade-down">
          {products.AllProducts.map(item => (
            <CardProduct {...item} />
          ))}
        </div>
        <LatestNews />
      </div>
    </Layout>
  )
}
