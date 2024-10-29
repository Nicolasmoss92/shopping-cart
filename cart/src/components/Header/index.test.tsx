import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';
import { useCart } from '../../hooks/useCart';

// Mock do hook useCart
jest.mock('../../hooks/useCart');

describe('Header Component', () => {
  beforeEach(() => {
    // Mockando a implementação do useCart
    (useCart as jest.Mock).mockReturnValue({ totalItems: 3 });
    render(<Header />);
  });

  test('renders header with logo images', () => {
    const logoImage = screen.getByAltText('Rocketshoes Logo');
    expect(logoImage).toBeInTheDocument();

    const additionalLogoImage = screen.getByAltText('Additional Logo');
    expect(additionalLogoImage).toBeInTheDocument();
  });

  test('displays the correct total items in the cart', () => {
    // Ajustando o texto para corresponder ao que está sendo renderizado
    const totalItemsText = screen.getByText(/meu carrinho/i);
    expect(totalItemsText).toBeInTheDocument();

    const itemsCountText = screen.getByText(/3 itens/i); // Usando regex para maior flexibilidade
    expect(itemsCountText).toBeInTheDocument();
  });

  test('renders the shopping cart icon', () => {
    const cartIcon = screen.getByTestId('shopping-cart-icon');
    expect(cartIcon).toBeInTheDocument();
  });
});