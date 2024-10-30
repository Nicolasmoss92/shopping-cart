import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CheckoutSummary from '.';
import { useCart } from '../../../../hooks/useCart';

// Mock do hook useCart
jest.mock('../../../../hooks/useCart');

describe('CheckoutSummary Component', () => {
  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      cart: [
        { price: 'R$ 100,00', quantity: 2 },
        { price: 'R$ 50,00', quantity: 1 },
      ],
    });
    render(<CheckoutSummary />);
  });

  test('displays the correct total', () => {
    const totalText = screen.getByText(/TOTAL/i);
    const totalValue = screen.getByText(/R\$ ?250,00/i); // Regex para permitir espaços
    expect(totalText).toBeInTheDocument();
    expect(totalValue).toBeInTheDocument();
  });

  test('renders CheckoutButton', () => {
    const checkoutButton = screen.getByRole('button', { name: /FINALIZAR PEDIDO/i }); // Ajuste se necessário
    expect(checkoutButton).toBeInTheDocument();
  });
});
