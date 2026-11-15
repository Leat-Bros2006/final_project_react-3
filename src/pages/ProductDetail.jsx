import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useFetch from '../hook/useFetch'
import { useNavigate } from 'react-router'
import Loading from '../components/Loading'

function ProductDetail() {

    let param = useParams()
    let navigate = useNavigate()

    const { data, error, loading } = useFetch(`https://fakestoreapi.com/products/${param.id}`)

    if (error) {
        return <div>{error}</div>
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='bg-gray-100 px-40 py-15'>
            <div>
                <button onClick={() => navigate("/")} className='hover:underline cursor-pointer'>Back to Home</button>
            </div>
            <div className='p-10 mt-5 bg-white shadow rounded-2xl grid grid-cols-2 gap-7'>
                <div className='bg-gray-100 rounded-lg p-5'>
                    <img className='w-full hover:scale-105 duration-200 transition-all h-[450px] object-contain' src={data.image} alt="" />
                </div>
                <div className='bg-blue-300'>
                    <p>{data.category}</p>
                    <p>{data.title}</p>
                    <p>★{data.rating?.rate} | {data.rating?.count}</p>
                    <p>${data.price}</p>
                    <hr className='my-5' />
                    <p>Description</p>
                    <p>{data.description}</p>
                    <div className='mt-5 grid grid-cols-2 gap-5'>
                        <button className='bg-black text-white p-3.5 rounded-lg'>Add to Card</button>
                        <button className='bg-white text-black border p-3.5 rounded-lg border-gray-500'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail