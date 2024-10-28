import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '.';

// Mock do CardButton para evitar execução de lógica não testada
jest.mock('../CardButton', () => () => <button>Add to Cart</button>);

describe('Card Component', () => {
  const imageUrl = 'http://example.com/image.jpg';
  const productName = 'Test Product';
  const productPrice = '$10.00';

  beforeEach(() => {
    render(<Card imageUrl={imageUrl} productName={productName} productPrice={productPrice} />);
  });

  test('renders the product image', () => {
    const imageElement = screen.getByAltText(productName);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', imageUrl);
  });

  test('renders the product name', () => {
    const nameElement = screen.getByText(productName);
    expect(nameElement).toBeInTheDocument();
  });

  test('renders the product price', () => {
    const priceElement = screen.getByText(productPrice);
    expect(priceElement).toBeInTheDocument();
  });

  test('renders the CardButton', () => {
    const buttonElement = screen.getByRole('button', { name: /Add to Cart/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
