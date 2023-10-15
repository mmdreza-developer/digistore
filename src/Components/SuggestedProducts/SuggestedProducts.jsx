import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import SlidePrevButton from '../SlidePrevButton/SlidePrevButton'
import SlideNextButton from '../SlideNextButton/SlideNextButton'
import CardProduct from '../CardProduct/CardProduct'
import { Link } from 'react-router-dom'

export default function SuggestedProducts() {
    return (
        <div className='container p-8 bg-white rounded shadow-md'>
            <h1 className="text-3xl text-center my-4">محصولات پیشنهادی</h1>
            <div>
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
                            slidesPerView: 5
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
                    <div className='absolute top-2/4 z-10 right-0'>
                        <SlidePrevButton />
                    </div>
                    <SwiperSlide className='flex flex-col gap-2'>
                        <CardProduct title="شلوار اسلش" img="images/products/f1-300x300.jpg" price={250000} discount={7} />
                        <CardProduct title="کیف اسپرت زنانه" img="/images/products/f17-300x300.jpg" price={661000} discount={6} />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col gap-2'>
                        <CardProduct title="کیف چرم زنانه" img="/images/products/f16-300x300.jpg" price={786000} discount={4} />
                        <CardProduct title="تیشرت" img="/images/products/f2-300x300.jpg" price={175000} />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col gap-2'>
                        <CardProduct title="کفش تابستانی زنانه" img="/images/products/f15-300x300.jpg" price={332000} />
                        <CardProduct title="کیف کوهنوردی" img="/images/products/f4-300x300.jpg" price={765000} discount={10} />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col gap-2'>
                        <CardProduct title="کفش پوتین زنانه" img="/images/products/f12-300x300.jpg" price={545000} />
                        <CardProduct title="کفش جردن" img="/images/products/f11-300x300.jpg" price={3400000} discount={9} />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col gap-2'>
                        <CardProduct title="کفش پوتین زنانه" img="/images/products/f12-300x300.jpg" price={545000} />
                        <CardProduct title="کفش جردن" img="/images/products/f11-300x300.jpg" price={3400000} discount={9} />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col gap-2'>
                        <CardProduct title="کفش تابستانی زنانه" img="/images/products/f15-300x300.jpg" price={332000} />
                        <CardProduct title="کیف کوهنوردی" img="/images/products/f4-300x300.jpg" price={765000} discount={10} />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col gap-2'>
                        <CardProduct title="کیف چرم زنانه" img="/images/products/f16-300x300.jpg" price={786000} discount={4} />
                        <CardProduct title="تیشرت" img="/images/products/f2-300x300.jpg" price={175000} />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col gap-2'>
                        <CardProduct title="کیف اسپرت زنانه" img="/images/products/f17-300x300.jpg" price={661000} discount={6} />
                        <CardProduct title="شلوار اسلش" img="images/products/f1-300x300.jpg" price={250000} discount={7} />
                    </SwiperSlide>
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
