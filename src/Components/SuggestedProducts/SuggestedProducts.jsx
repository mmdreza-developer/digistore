import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import SlidePrevButton from '../SlidePrevButton/SlidePrevButton'
import SlideNextButton from '../SlideNextButton/SlideNextButton'
import CardProduct from '../CardProduct/CardProduct'
import { Link } from 'react-router-dom'
import products from '../../datas/products'

export default function SuggestedProducts() {
    return (
        <div className='container p-8 bg-white rounded shadow-md'>
            <h1 className="text-3xl text-center my-4">محصولات پیشنهادی</h1>
            <div>
                <Swiper className='relative flex items-center'
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
                            slidesPerView: 5
                        },
                    }}
                    aria-colcount={2}
                    spaceBetween={20}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {/* id, title,img, isOnSale, price, discount  */}
                    <div className='absolute top-2/4 z-10 right-0'>
                        <SlidePrevButton />
                    </div>
                    {products.suggestedProducts && products.suggestedProducts.map(item => (
                        <SwiperSlide className=' flex flex-col'>
                            <CardProduct id={item.id} title={item.title} img={item.img} price={item.price} discount={item.discount} />
                        </SwiperSlide>
                    ))}
                    <div className='absolute top-2/4 z-10 left-0'>
                        <SlideNextButton />
                    </div>
                </Swiper>
            </div>
            <div className='text-center'>
                <Link className='text-gray-text text-sm'>مشاهده همه محصولات پیشنهادی</Link>
            </div>
        </div>
    )
}
