import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import CheckoutButton from ".";

// Mock do componente styled
jest.mock('./styles', () => ({
  CheckoutButtonStyled: (props: { title: string; primary?: boolean; large?: boolean }) => (
    <button {...props}>{props.title}</button>
  ),
}));

describe('CheckoutButton Component', () => {
  beforeEach(() => {
    render(<CheckoutButton />);
  });

  test('renders with correct title', () => {
    const buttonElement = screen.getByRole('button', { name: /FINALIZAR PEDIDO/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('has primary and large classes', () => {
    const buttonElement = screen.getByRole('button', { name: /FINALIZAR PEDIDO/i });
    // Verificando as classes aplicadas no botão
    expect(buttonElement).toHaveClass('element'); // Ajuste as classes conforme sua implementação
    expect(buttonElement).toHaveClass('large');   // Ajuste as classes conforme sua implementação
  });
});