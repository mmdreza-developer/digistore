import { React } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <button className='btn-slider-next' onClick={() => swiper.slideNext()}><AiOutlineLeft /></button>
    );
}