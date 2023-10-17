import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function BreadCrumb({ Links }) {
    return (
        <div className='container flex items-center gap-1 my-4'>
            <ul className='flex items-center gap-1'>
                {Links.map(item => (
                    <>
                        <li className=' list-none'>
                            <Link className='text-gray-400' to={item.link}>{item.title}</Link>
                        </li>
                        {
                            Links.length !== item.id ? (
                                <AiOutlineLeft className='text-gray-500' />
                            ) : null
                        }
                    </>
                ))}
            </ul>
        </div>
    )
}
