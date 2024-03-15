import React, { useEffect, useState } from 'react';
import ProductsCard from '../products_card';
import Loader from '../loader';
import ErrorScreen from '../error_screen';
import Pagination from '../pagination';
import Input from '../input';
import { useGetProducts } from '../../hooks/useGetProducts';

const Products = () => {
  const { products, loading, error } = useGetProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    // check if the products are not empty, if so then the
    // API call was successful and we can update our
    // filteredProducts state
    if (Object.keys(products).length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorScreen error={error.message} />;
  }

  const filterItems = (searchTerm) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredProducts);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const nPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="w-5/6 mx-auto py-10">
      <div className="flex justify-center items-center py-6 md:py-10">
        <Input onChangeCallback={filterItems} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {currentProducts.length === 0 && (
          <div className="flex items-center justify-center xl:w-[500%] h-[50vh]">
            <div className="md:text-4xl text-xl text-[#aa3535]">
              Not available
            </div>
          </div>
        )}
        {currentProducts?.map((products) => (
          <ProductsCard products={products} key={products.id} data-testid='product-list product'  />
        ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Products;
