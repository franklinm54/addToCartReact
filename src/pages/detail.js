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
      Detail
    </div>
  )
}

export default Detail;