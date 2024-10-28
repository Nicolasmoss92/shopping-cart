import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';
import { useCart } from '../../hooks/useCart';

jest.mock('../../hooks/useCart');

describe('Header Component', () => {
  beforeEach(() => {
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
    const totalItemsText = screen.getByText(/Itens 3/i);
    expect(totalItemsText).toBeInTheDocument();
  });

  test('renders the shopping cart icon', () => {
    const cartIcon = screen.getByTestId('shopping-cart-icon');
    expect(cartIcon).toBeInTheDocument();
  });
});
