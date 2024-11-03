import '@testing-library/jest-dom';
import CheckoutSummary from ".";
import { useCart } from "../../../../hooks/useCart";
import { render, screen  } from '@testing-library/react';

jest.mock('../../../../hooks/usecart');

describe('', () => {
    const mockUseCart = useCart as jest.Mock;
    
    const renderButton = (props = {}) => {
        render(<CheckoutSummary  {...props} />);
    };

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('renders "Carrinho vazio" when cart is empty', () => {
        mockUseCart.mockReturnValue({ cart: [] });
    
        renderButton();
        
        expect(screen.getByText('Carrinho vazio')).toBeInTheDocument();
      });

      test('displays the total price when cart has items', () => {
        mockUseCart.mockReturnValue({
          cart: [
            { price: 'R$10,00', quantity: 2 },
            { price: 'R$20,00', quantity: 1 },
          ]
        });
    
        renderButton();
        
        // Verificar que o total está correto e formatado
        expect(screen.getByText('TOTAL')).toBeInTheDocument();
        expect(screen.getByText('R$40,00')).toBeInTheDocument();
      });

      test('calculates total price with multiple items correctly', () => {
        mockUseCart.mockReturnValue({
          cart: [
            { price: 'R$15,00', quantity: 3 },
            { price: 'R$25,00', quantity: 2 },
            { price: 'R$5,00', quantity: 4 },
          ]
        });
    
        renderButton();
    
        expect(screen.getByText('TOTAL')).toBeInTheDocument();
        expect(screen.getByText('R$115,00')).toBeInTheDocument();
      });
    
})