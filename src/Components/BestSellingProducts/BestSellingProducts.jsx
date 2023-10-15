import React from 'react'
import { Link } from 'react-router-dom'
import { SwiperSlide, Swiper, useSwiper } from 'swiper/react'
import CardProduct from '../CardProduct/CardProduct'
import SlidePrevButton from '../SlidePrevButton/SlidePrevButton'
import SlideNextButton from '../SlideNextButton/SlideNextButton'
import products from '../../datas/products'

export default function BestSellingProducts() {
    const swiper = useSwiper()
    return (
        <div className='p-8 bg-blue rounded'>
            <h1 className='text-2xl text-center my-4 text-white'>پرفروش ترین محصولات</h1>
            <Swiper className='relative'
                breakpoints={{
                    300: {
                        slidesPerView: 1
                    },
                    600: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    991: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                }}
                spaceBetween={20}
                slidesPerView={2}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/* id, title,img, isOnSale, price, discount  */}
                <div className='absolute top-1/3 z-10 right-0'>
                    <SlidePrevButton />
                </div>
                {products.bestSellingProducts && products.bestSellingProducts.map(product => (
                    <SwiperSlide key={product.id}>
                        <CardProduct id={product.id} title={product.title} img={product.img} price={product.price} discount={product.discount} />
                    </SwiperSlide>
                ))}
                <div className='absolute top-1/3 z-10 left-0'>
                    <SlideNextButton />
                </div>
            </Swiper>
        </div>
    )
}
