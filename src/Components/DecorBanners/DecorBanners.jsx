import React, { useEffect } from 'react'
import SlidePrevButton from '../SlidePrevButton/SlidePrevButton'
import { Link } from 'react-router-dom'
import SlideNextButton from '../SlideNextButton/SlideNextButton'
import FashionModelItem from '../FashionModel/FashionModelItem'
import { SwiperSlide, Swiper } from 'swiper/react'
export default function DecorBanners() {
    return (
        <div className='container my-14 bg-white p-4 shadow-md shadow-gray-text rounded'>
            <h1 className='text-center py-4 transform -translate-y-12'>
                <span className="text-2xl px-6 py-2 text-center bg-white rounded-full shadow-md shadow-gray-text">مبلمان و دکور</span>
            </h1>
            <div className='flex justify-center gap-6 mb-7'>
                <div>
                    <img src="images/banners/banner-3b.jpg" className='rounded transition duration-300 transform hover:-translate-y-6 w-full' alt="" />
                </div>
                <div>
                    <img src="images/banners/banner-cat4.png" className='rounded transition duration-300 transform hover:-translate-y-6 w-full' alt="" />
                </div>
                <div>
                    <img src="images/banners/banner-cat6.png" className='rounded transition duration-300 transform hover:-translate-y-6 w-full' alt="" />
                </div>
            </div>
            <Swiper className='relative'
                spaceBetween={20}
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
            >
                <div className='absolute left-0 top-1/3 z-10'>
                    <SlideNextButton />
                </div>
                <SwiperSlide>
                    <FashionModelItem img="/images/products/1_Blazers.jpg" title="پیراهن مردانه" countItem={4} />
                </SwiperSlide>
                <SwiperSlide>
                    <FashionModelItem img="/images/products/1_Sofa_Chair.jpg" title="مبل" countItem={6} />
                </SwiperSlide>
                <SwiperSlide>
                    <FashionModelItem img="/images/products/2_Home_Decor.jpg" title="دکور خانگی" countItem={3} />
                </SwiperSlide>
                <SwiperSlide>
                    <FashionModelItem img="/images/products/2_Jeans_Trousers.jpg" title="شلوار جین و شلوار" countItem={8} />
                </SwiperSlide>
                <SwiperSlide>
                    <FashionModelItem img="/images/products/3_Home_Garden.jpg" title="گیاه" countItem={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <FashionModelItem img="/images/products/3_Sneakers.jpg" title="کفش" countItem={6} />
                </SwiperSlide>
                <SwiperSlide>
                    <FashionModelItem img="/images/products/4_Jumpsuits.jpg" title="لباس زنانه" countItem={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <FashionModelItem img="/images/products/5_Watches.jpg" title="ساعت" countItem={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <FashionModelItem img="/images/products/5_Lighting.jpg" title="لوازم خانگی" countItem={4} />
                </SwiperSlide>
                <div className='absolute right-0 top-1/3 z-10'>
                    <SlidePrevButton />
                </div>
            </Swiper>
            <div className='mt-5 pt-2 text-gray-text text-sm border-t text-center'>
                <Link>مشاهده و همه دسته ها</Link>
            </div>
        </div>
    )
}
