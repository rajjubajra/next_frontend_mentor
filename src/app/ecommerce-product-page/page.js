'use client';
import {useState} from 'react';
import ProductImage from './components/productImage';
import ProductDetails from './components/productDetails';
import { useSelector, useDispatch } from 'react-redux';
import { cartClose } from './reduxSlice/cartSlice';
import LightBoxGallery from './components/lightBoxGallery';



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

  

  const dispath = useDispatch();
  const lightbox = useSelector((state ) => state.imageIndex.lightbox);

  //redux toolkit dispath
  const imageIndex = useSelector((state) => state.imageIndex.index);
  
  return (
    <>
    <div 
    onClick={() => dispath(cartClose())}
    className="grid sm:grid-cols-2">
      <div>
        <ProductImage 
          imageUrl={data[0].productImage[imageIndex].img} 
          setNumber={setNumber}
          number={number}
          length={data[0].productImage.length}
        />
      </div>
      <div className='px-3'>
        <ProductDetails data={data[0]} />
      </div>
    </div>
    <div className={`${lightbox ? "fixed top-0": "hidden"} z-50 w-full min-h-screen`}>
      <LightBoxGallery />
    </div>
    </>
  )
}

export default EcommerceProductPage