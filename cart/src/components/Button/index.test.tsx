import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Button from ".";


describe('Button Component', () => {
    // Variáveis para armazenar propriedades padrão do botão
    const defaultProps = {
        title: 'Click Me',
        onClick: jest.fn(), // Mock da função onClick
    };

    // Executa antes de cada teste
    beforeEach(() => {
        render(<Button {...defaultProps} />);
    });

    test('renders with title', () => {
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
    });

    test('renders the icon when showIcon is true', () => {
        const icon = <span data-testid="icon">🌟</span>;
        render(<Button {...defaultProps} showIcon={true} icon={icon} />);

        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    test('does not render the icon when showIcon is false', () => {
        const icon = <span data-testid="icon">🌟</span>; // Exemplo de ícone
        render(<Button {...defaultProps} showIcon={false} icon={icon} />); // Renderiza sem o ícone

        expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });

    test('applies primary styling when primary prop is true', () => {
        const { container } = render(<Button {...defaultProps} />);
        expect(container.firstChild).toHaveClass('sc-blHHSb llSqkH'); // Ajuste a classe conforme seu estilo
    });
    
    test('applies large styling when large prop is true', () => {
        const { container } = render(<Button {...defaultProps} large={true} />);
        expect(container.firstChild).toHaveClass('sc-blHHSb jIVTyG'); // Ajuste a classe conforme seu estilo
    });

    test('calls onClick function when clicked', () => {
        const buttonElement = screen.getByText('Click Me');
        buttonElement.click();
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada uma vez
    });
});