import React from 'react'

export default function FeatureBox({ icon, title, desc }) {
    return (
        <div className='flex gap-4 items-center p-4 shadow-md rounded transition-all duration-300 transform hover:-translate-y-4'>
            <div className='text-4xl'>{icon}</div>
            <div className='flex flex-col gap-2 items-start'>
                <div className=''>{title}</div>
                <div className='text-sm text-gray-500'>{desc}</div>
            </div>
        </div>
    )
}
