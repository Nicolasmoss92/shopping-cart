import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '.';

jest.mock('../CardButton', () => () => <button>Add to Cart</button>);

describe('Card Component', () => {
  const defaultProps = {
    imageUrl: 'test-file-stub',
    productName: 'Test Product',
    productPrice: '$10.00',
  };

  const renderCard = (props = {}) => {
    render(<Card {...defaultProps} {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders card with valid props', () => {
    renderCard();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  test('renders the product image', () => {
    renderCard();
    const image = screen.getByAltText('Test Product');
    expect(image).toHaveAttribute('src', defaultProps.imageUrl);
  });

  test('renders the product name', () => {
    renderCard();
    const nameElement = screen.getByText(defaultProps.productName);
    expect(nameElement).toBeInTheDocument();
  });

  test('renders the product price', () => {
    renderCard();
    const priceElement = screen.getByText(defaultProps.productPrice);
    expect(priceElement).toBeInTheDocument();
  });

  test('renders the CardButton', () => {
    renderCard();
    const buttonElement = screen.getByRole('button', { name: /Add to Cart/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
