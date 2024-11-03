import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

jest.mock('react-icons/fa', () => ({
    FaShoppingCart: () => <span data-testid="shopping-cart-icon" />,
}));

jest.mock('../../hooks/useCart', () => ({
    useCart: () => ({
        totalItems: '5',
    }),
}));

describe('Header Component', () => {
    const defaultProps = {
        logoSrc: 'test-file-stub', 
        additionalLogoSrc: 'test-file-stub',
        cartTitle: "Meu carrinho",
        itemsLink: '/items',
        checkoutLink: '/checkout',
        showCartIcon: true,
    };

    const renderHeader = (props = {}) => {
        render(<Header {...defaultProps} {...props} />);
    };

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('renders the main logo', () => {
        renderHeader();
        const logo = screen.getByAltText('Logo Principal');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', defaultProps.logoSrc);
    });

    test('renders the additional logo if provided', () => {
        renderHeader();
        const additionalLogo = screen.getByAltText('Logo Adicional');
        expect(additionalLogo).toBeInTheDocument();
        expect(additionalLogo).toHaveAttribute('src', defaultProps.additionalLogoSrc);
    });

    test('renders the cart icon when showCartIcon is true', () => {
        renderHeader();
        const cartIcon = screen.getByTestId('shopping-cart-icon');
        expect(cartIcon).toBeInTheDocument();
    });

    test('does not render the cart icon when showCartIcon is false', () => {
        renderHeader({ showCartIcon: false });
        const cartIcon = screen.queryByTestId('shopping-cart-icon');
        expect(cartIcon).not.toBeInTheDocument();
    });

    test('displays the correct cart title', () => {
        renderHeader();
        const cartTitle = screen.getByText(defaultProps.cartTitle);
        expect(cartTitle).toBeInTheDocument();
    });

    test('displays the correct number of items in the cart', () => {
        renderHeader();
        const totalItems = screen.getByText(/5/);
        expect(totalItems).toBeInTheDocument();
    });

    test('links to the items page', () => {
        renderHeader();
        const itemsLink = screen.getByRole('link', { name: /Logo Principal/i });
        expect(itemsLink).toHaveAttribute('href', defaultProps.itemsLink);
    }); 
});
