import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ products }) => {

  function truncateWithEllipses(text, max) {
    return text.substr(0, max - 1) + (text.length > max ? '....;' : '');
  }

  return (
    <Link to={`product/${products.id}`} className="flex flex-col h-[40%] px-12 py-6">
      <img src={products.image} alt="image" className="w-full h-[200px] hover:scale-105 ease-in-out transition-transform" />
      <div className="flex flex-col">
        <span>{truncateWithEllipses(products.title, 35)}</span>
        <span>£ {products.price}</span>
      </div>
    </Link>
  );
};

export default ProductsCard;
