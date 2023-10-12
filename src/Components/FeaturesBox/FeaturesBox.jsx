import React from 'react'
import FeatureBox from './FeatureBox'
import { BsRocketTakeoff } from "react-icons/bs"
import { TbCoinBitcoin } from "react-icons/tb"
import { PiHeadsetBold } from "react-icons/pi"
import { AiOutlineGift } from 'react-icons/ai'
export default function FeaturesBox() {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 container'>
            <FeatureBox icon={<BsRocketTakeoff />} title="ارسال رایگان" desc="بیش از 100 تومن" />
            <FeatureBox icon={<TbCoinBitcoin />} title="ضمانت پول" desc="30 روز برگشت پول" />
            <FeatureBox icon={<PiHeadsetBold />} title="پشتیبانی" desc="آنلاین 24 ساعته" />
            <FeatureBox icon={<AiOutlineGift />} title="هدیه خرید" desc="بیش از 50 تومن" />
        </div>
    )
}
