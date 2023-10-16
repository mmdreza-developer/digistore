import React, { useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideNextButton from '../../Components/SlideNextButton/SlideNextButton';
import SlidePrevButton from '../../Components/SlidePrevButton/SlidePrevButton';
import { Link } from 'react-router-dom';
import { SlReload } from "react-icons/sl"
import { AiOutlineHeart } from 'react-icons/ai';
import FeaturesBox from '../../Components/FeaturesBox/FeaturesBox';
import BestSellingProducts from '../../Components/BestSellingProducts/BestSellingProducts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FashionModel from '../../Components/FashionModel/FashionModel';
import ElectronicBanners from '../../Components/ElectronicBanners/ElectronicBanners';
import DecorBanners from '../../Components/DecorBanners/DecorBanners';
import SuggestedProducts from '../../Components/SuggestedProducts/SuggestedProducts';
import LatestNews from '../../Components/LatestNews/LatestNews';
import CardProduct from '../../Components/CardProduct/CardProduct';
import products from '../../datas/products';
export default function Index() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Layout title="صفحه اصلی">
        <div className="container grid grid-cols-1 md:grid-cols-3 my-8 gap-10 ">
          <section className='md:col-span-2'>
            <div data-aos="fade-down" data-aos-duration="1000">
              <Swiper className='rounded-2xl relative group mb-4'
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <div className='absolute z-10 top-1/3 right-0 transition-all duration-300 opacity-0 group-hover:opacity-100'>
                  <SlidePrevButton />
                </div>
                <SwiperSlide><Link><img src="/images/slides/slide2-1.jpg" width="100%" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link><img src="/images/slides/slide2.jpg" width="100%" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link><img src="/images/slides/slide3.jpg" width="100%" alt="" /></Link></SwiperSlide>
                <div className='absolute z-10 top-1/3 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100'>
                  <SlideNextButton />
                </div>
              </Swiper>
            </div>
            <div className='flex flex-col gap-4 md:flex-row items-center justify-center' data-aos="fade-down" data-aos-duration="1200">
              <Link><img src="/images/banners/banner-1.png" className='animate-banner' alt="" /></Link>
              <Link><img src="/images/banners/banner-2-1.png" className='animate-banner' alt="" /></Link>
            </div>
          </section>
          <section className='col-span-1' data-aos="fade-left" data-aos-duration="1500">
            <Swiper className='rounded relative group'
              // modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <div className='absolute z-10 top-1/3 right-0 transition-all duration-300 opacity-0 group-hover:opacity-100'>
                <SlidePrevButton />
              </div>
              {products.SpecialSale && products.SpecialSale.map(item => (
                <SwiperSlide className='flex flex-col gap-2 items-center p-2'>
                  <CardProduct title={item.title} price={item.price} discount={item.discount} img={item.img} />
                </SwiperSlide>
              ))}
              <div className='absolute z-10 top-1/3 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100'>
                <SlideNextButton />
              </div>
            </Swiper>
          </section>
        </div>
        <div className="container my-10">
          <FeaturesBox />
        </div>
        <section className="my-10" data-aos="fade-right" data-aos-duration="1500">
          <BestSellingProducts />
        </section>
        <section data-aos="fade-up" data-aos-duration="1500">
          <FashionModel />
        </section>
        <section data-aos="fade-up" data-aos-duration="1500">
          <ElectronicBanners />
        </section>
        <section data-aos="fade-up" data-aos-duration="1500">
          <DecorBanners />
        </section>
        <section data-aos="fade-up" data-aos-duration="1500">
          <SuggestedProducts />
        </section>
        <section data-aos="fade-up" data-aos-duration="1500">
          <LatestNews />
        </section>
      </Layout>
    </>
  )
}
