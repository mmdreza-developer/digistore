import { React } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSwiper } from 'swiper/react';

export default function SlidePrevButton() {
    const swiper = useSwiper();
    return (
        <button className='btn-slider-prev' onClick={() => swiper.slidePrev()}><AiOutlineRight /></button>
    )
}
