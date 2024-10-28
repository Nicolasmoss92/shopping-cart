import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductItem from '.';

describe('ProductItem Component', () => {
  const mockProps = {
    image: '/path/to/image.jpg',
    name: 'Sample Product',
    price: '100.00',
    quantity: 2,
    onIncrease: jest.fn(),
    onDecrease: jest.fn(),
  };

  beforeEach(() => {
    render(<ProductItem {...mockProps} />);
  });

  test('renders product information correctly', () => {
    // Verifica se a imagem, nome e preço do produto estão no documento
    const imageElement = screen.getByAltText(mockProps.name);
    const nameElement = screen.getByText(mockProps.name);
    const priceElement = screen.getByText(`R$${mockProps.price}`);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProps.image);
    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  test('renders correct quantity', () => {
    const quantityElement = screen.getByText(mockProps.quantity.toString());
    expect(quantityElement).toBeInTheDocument();
  });

//   test('calls onIncrease when the increase button is clicked', () => {
//     const increaseButton = screen.getByRole('button', { name: /increase quantity/i });
//     fireEvent.click(increaseButton);
//     expect(mockProps.onIncrease).toHaveBeenCalled();
//   });
  
//   test('calls onDecrease when the decrease button is clicked', () => {
//     const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i });
//     fireEvent.click(decreaseButton);
//     expect(mockProps.onDecrease).toHaveBeenCalled();
//   });
});
