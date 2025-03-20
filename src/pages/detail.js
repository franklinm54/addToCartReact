import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../products';

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug);
    if(findDetail.length > 0) {
      setDetail(findDetail[0]);
    }else{
      window.location.href = "/";
    }
  }, [slug])
  return (
    <div>
      <h2 className='text-3xl text-center'>PRODUCT DETAIL</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <img src={detail.image} alt="" className='w-full'/>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
          <p className='font-bold text-3xl'>
            ${detail.price}
          </p>
          <div className='flex gap-5'>
            <div className='flex gap-2 justify-center items-center'>
              <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl justify-center items-center items-center'>-</button>
              <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl justify-center items-center items-center'>1</span>
              <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl justify-center items-center items-center'>+</button>
            </div>
            <button className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl'>
              Add to cart
            </button>
          </div>
          <p>
            {detail.description}
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Detail;