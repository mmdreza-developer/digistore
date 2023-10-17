import React from 'react'
import { BsRocket } from 'react-icons/bs'

export default function ScrollerTop() {
    const scrollHandler = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div
            onClick={scrollHandler}
            className="text-white p-3 rounded-full shadow-lg hover:shadow-black bg-orange flex items-center justify-center transition-all fixed bottom-2 left-2 transform hover:-translate-y-2 text-2xl  hover:bg-orange-dark cursor-pointer">
            <BsRocket />
        </div>
    )
}
