import React from 'react'
import { removeToCart } from '../Redux/ReduxProduct/Redux'
import { useDispatch } from 'react-redux'
export default function RemoveProduct({ id }) {
    const dispatch = useDispatch()
    dispatch(removeToCart(id))
}
