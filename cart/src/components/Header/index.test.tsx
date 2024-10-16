import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';

describe('Header Component', () => {

    beforeEach(() => {
        render(<Header />);
    });

    test('renders logo images correctly', () => {
        const logoImage = screen.getByAltText('Logotipo da RocketShoes');
        const iconImage = screen.getByAltText('Ícone de corrida');

        expect(logoImage).toBeInTheDocument();
        expect(iconImage).toBeInTheDocument();
    })

    test('renders cart information correctly', () => {
        const cartText = screen.getByText(/Meu carrinho/i);
        const cartItems = screen.getByText(/3 itens/i);

        expect(cartText).toBeInTheDocument();
        expect(cartItems).toBeInTheDocument();
    });

    test('renders shopping cart icon', () => {
        const cartIcon = screen.getByTestId('shopping-cart-icon');
        
        expect(cartIcon).toBeInTheDocument();
    });
});