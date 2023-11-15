'use client';
import {useState} from 'react';
import ProductImage from './components/productImage';
import ProductDetails from './components/productDetails';
import Image from 'next/image';


const  data = [
  {
    "id": 1,
    "title": "Fall Limited Edition Sneakers",
    "rate": 250,
    discount_percent: 50,
    "brand": "Sneakers Company",
    "desc": "<p>These low profile sneakers are your causual wear companion. Featuring a durable outer sole, they will withstand everything the weather can offer.</p>",
    "productImage": [
      {
        "img": "/assets/ecommerce/images/image-product-1.jpg",
        "thumbnail": "/assets/ecommerce/images/image-product-1-thumbnail.jpg"
      },
      {
        "img": "/assets/ecommerce/images/image-product-2.jpg",
        "thumbnail": "/assets/ecommerce/images/image-product-2-thumbnail.jpg"
      },
      {
        "img": "/assets/ecommerce/images/image-product-3.jpg",
        "thumbnail": "/assets/ecommerce/images/image-product-3-thumbnail.jpg"
      },
      {
        "img" : "/assets/ecommerce/images/image-product-4.jpg",
        "thumbnail": "/assets/ecommerce/images/image-product-4-thumbnail.jpg"
      }
    ]
  }
]


function EcommerceProductPage() {

  const [number, setNumber]= useState(0)
  console.log("NUMBER: ",number);

  return (
    <div className="grid sm:grid-cols-2">
      <div>
        <ProductImage 
          imageUrl={data[0].productImage[number].img} 
          setNumber={setNumber}
          number={number}
          length={data[0].productImage.length}
        />
        <div className='hidden sm:flex gap-7 px-10 pt-5'>
        {
          data[0].productImage.map((item, i)=> {
            return <div key={i}>
            <Image 
            src={item.thumbnail} 
            width={100} height={100} 
            alt='thumbnail' />
            </div>
          })
        }
        </div>
      </div>
      <div className='px-3'>
        <ProductDetails data={data[0]} />
      </div>
    </div>
  )
}

export default EcommerceProductPage