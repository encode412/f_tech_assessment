import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { MdArrowBack } from 'react-icons/md';
import Loader from '../loader';
import ErrorScreen from '../error_screen';
import Button from '../button';

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorScreen error={error.message} />;
  }
  console.log(products);
  return (
    <>
      <Link to={'/'} className="flex gap-2 items-center px-6 md:px-10 my-4">
        <TiArrowBack color="#000" size={30} />
        <span>Check out more products</span>
      </Link>
      <div className="w-[350px] md:w-[1000px] mx-auto py-10 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 h-[40%] md:px-12 py-6">
          <img
            src={products.image}
            alt="image"
            className="w-[200px] md:w-[500px] h-[300px] cursor-pointer transition-transform hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-3xl">{products.title}</span>
            <span className="text-sm md:text-base">{products.description}</span>
            <span className="font-semibold my-2 md:font-base font-xs">
              Category: {products.category}
            </span>
            <span className='md:font-base font-xs'>Rating: {products.rating.rate} / 5</span>
            <span className="font-bold text-base md:text-xl my-2">£ {products.price}</span>
            <Button children="Add to cart" padding=".7rem" className='hover:cursor-not-allowed' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
