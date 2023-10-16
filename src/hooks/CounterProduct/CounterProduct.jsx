import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../../Redux/ReduxProduct/Redux'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function CounterProduct({ id, quantity }) {
    const dispatch = useDispatch()
    const IncrementProduct = () => {
        dispatch(incrementQuantity(id))
    }
    const DecrementProduct = () => {
        dispatch(decrementQuantity(id))
    }
    return (
        <div className='flex items-center'>
            <button className='bg-gray-text px-3 py-2 rounded outline-none text-black' onClick={DecrementProduct}><AiOutlineMinus /></button>
            <div className='w-[50px] border-y-2 flex justify-center items-center'>{quantity}</div>
            <button className='bg-gray-text px-3 py-2 rounded outline-none text-black' onClick={IncrementProduct}><AiOutlinePlus /></button>
        </div>
    )
}
