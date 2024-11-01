import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";
import { FaShoppingCart } from 'react-icons/fa';


jest.mock('react-icons/fa', () => ({
    FaShoppingCart: () => <span data-testid="shopping-cart-icon" />,
  }));
  
describe('Button Component', () => {
    const defaultProps = {
        title: 'Click Me',
        onClick: jest.fn(),
        icon: <FaShoppingCart />,
        large: true
    };

    const renderButton = (props = {}) => {
        render(<Button {...defaultProps} {...props} />);
    };

    test('renders with title', () => {
        renderButton();

        const buttonElement = screen.getByText('Click Me');

        expect(buttonElement).toBeInTheDocument();
    });

    test('renders the icon when showIcon is true', () => {
        renderButton({ showIcon: true, icon: <FaShoppingCart /> });
        expect(screen.getByTestId('shopping-cart-icon')).toBeInTheDocument();
    });

    test('does not render the icon when showIcon is false', () => {
        renderButton({ showIcon: false, icon: <FaShoppingCart /> });
        expect(screen.queryByTestId('shopping-cart-icon')).not.toBeInTheDocument();
    });
    
    test('applies large styling when large prop is true', () => {
        renderButton({ large: true });

        const button = screen.getByText('Click Me');

        expect(button).toHaveStyle('padding: 18px 24px');
        expect(button).toHaveStyle('width: 300px');
      });

    test('calls onClick function when clicked', () => {
        renderButton();

        const button = screen.getByText('Click Me');
    
        fireEvent.click(button);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1); 
    });

    test('does not call onClick when button is disabled', () => {
        renderButton({ disabled: true });
    
        const button = screen.getByText('Click Me');
        fireEvent.click(button);
    
        expect(defaultProps.onClick).toHaveBeenCalledTimes(0);
    });

    test('renders with small styling when large prop is false', () => {
        renderButton({ large: false });
    
        const button = screen.getByText('Click Me');
        expect(button).toHaveStyle('padding: 8px 16px');
        expect(button).toHaveStyle('width: 200px'); 
    });

    test('calls onClick multiple times when clicked repeatedly', () => {
        renderButton();
    
        const button = screen.getByText('Click Me');
    
        fireEvent.click(button);
        fireEvent.click(button); 
    
        expect(defaultProps.onClick).toHaveBeenCalledTimes(2); 
    });
});