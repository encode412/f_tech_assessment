import { render, screen, waitFor } from '@testing-library/react';
import Product from '../../components/products';
import { useGetProducts } from '../../hooks/useGetProducts';

jest.mock('../../hooks/useGetProducts');

test('renders product list correctly', async () => {
  // Mock the API response
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ];
  useGetProducts.mockResolvedValue(products);

  // Render the component
  render(React.createElement(Product));

  // Wait for the component to finish fetching the products
  await waitFor(() => {
    // Verify that the loading spinner is not displayed
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();

    // Verify that the product list is rendered correctly
    expect(screen.getByTestId('product-list')).toBeInTheDocument();

    // Verify that the correct number of products is displayed
    const productElements = screen.getAllByTestId('product');
    expect(productElements.length).toBe(products.length);

    // Verify that the product names are correct
    products.forEach((product, index) => {
      expect(productElements[index]).toHaveTextContent(product.name);
    });
  });
});