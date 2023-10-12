import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import LatestNewsItem from './LatestNewsItem'

export default function LatestNews() {
  return (
    <div className='container my-14'>
      <h1 className="text-3xl text-center mb-4">آخرین خبرها</h1>
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
            slidesPerView: 3
          },
        }}
      >
        <SwiperSlide>
          <LatestNewsItem img="/images/news/news1.jpg" sender="مدیر سایت" title="اعتماد به فروشندگان" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و … " date={24} month="فروردین" />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsItem img="/images/news/news2.jpg" sender="مدیر سایت" title="اعتماد به فروشندگان" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و … " date={10} month="اردیبهشت" />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsItem img="/images/news/news3.jpg" sender="مدیر سایت" title="اعتماد به فروشندگان" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و … " date={10} month="تیر" />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsItem img="/images/news/news4.jpg" sender="مدیر سایت" title="اعتماد به فروشندگان" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و … " date={24} month="شهریور" />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsItem img="/images/news/news5.jpg" sender="مدیر سایت" title="اعتماد به فروشندگان" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و … " date={12} month="آبان" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
