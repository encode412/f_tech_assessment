import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Products from './components/products';
import ProductDetails from './components/product_details';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
