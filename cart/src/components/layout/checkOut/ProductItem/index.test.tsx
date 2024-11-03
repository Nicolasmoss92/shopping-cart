import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductItem from '.';

jest.mock('../QuantityItem/index', () => {
  return ({ onIncrease, onDecrease }: { onIncrease: () => void; onDecrease: () => void }) => (
    <div>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
});

describe('ProductItem Component', () => {
  const defaultProps = {
    image: 'https://example.com/image.jpg',
    name: 'Test Product',
    price: 'R$20,00',
    quantity: 1,
    onIncrease: jest.fn(),
    onDecrease: jest.fn(),
  };

  const renderProductItem = (props = {}) => {
    render(<ProductItem {...defaultProps} {...props} />);
  };

  test('renders product image', () => {
    renderProductItem();

    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  test('calls onIncrease when Increase button is clicked', () => {
    renderProductItem();

    const increaseButton = screen.getByText('Increase');
    fireEvent.click(increaseButton);

    expect(defaultProps.onIncrease).toHaveBeenCalledTimes(1);
  });

  test('calls onDecrease when Decrease button is clicked', () => {
    renderProductItem();

    const decreaseButton = screen.getByText('Decrease');
    fireEvent.click(decreaseButton);

    expect(defaultProps.onDecrease).toHaveBeenCalledTimes(1);
  });
});
