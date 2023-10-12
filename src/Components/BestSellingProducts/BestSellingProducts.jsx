import React from 'react'
import { Link } from 'react-router-dom'
import { SwiperSlide, Swiper, useSwiper } from 'swiper/react'
import CardProduct from '../CardProduct/CardProduct'
import SlidePrevButton from '../SlidePrevButton/SlidePrevButton'
import SlideNextButton from '../SlideNextButton/SlideNextButton'

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
                        slidesPerView:3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                }}
                spaceBetween={20}
                slidesPerView={2}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/* id, title,img, isOnSale, price, discount  */}
                <div className='absolute top-1/3 z-10 right-0'>
                    <SlidePrevButton />
                </div>
                <SwiperSlide>
                    <CardProduct title="شلوار اسلش" img="images/products/f1-300x300.jpg" price={250000} discount={7} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct title="تیشرت" img="/images/products/f2-300x300.jpg" price={175000} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct title="کیف کوهنوردی" img="/images/products/f4-300x300.jpg" price={765000} discount={10} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct title="کفش جردن" img="/images/products/f11-300x300.jpg" price={3400000} discount={9} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct title="کفش پوتین زنانه" img="/images/products/f12-300x300.jpg" price={545000} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct title="کفش تابستانی زنانه" img="/images/products/f15-300x300.jpg" price={332000} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct title="کیف چرم زنانه" img="/images/products/f16-300x300.jpg" price={786000} discount={4} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct title="کیف اسپرت زنانه" img="/images/products/f17-300x300.jpg" price={661000} discount={6} />
                </SwiperSlide>
                <div className='absolute top-1/3 z-10 left-0'>
                    <SlideNextButton />
                </div>
            </Swiper>
        </div>
    )
}
