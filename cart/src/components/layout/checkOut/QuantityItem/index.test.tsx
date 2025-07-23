import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import QuantityControl from '.';

describe('QuantityControl Component', () => {
  const mockIncrease = jest.fn();
  const mockDecrease = jest.fn();

  beforeEach(() => {
    render(
      <QuantityControl
        quantity={2}
        onIncrease={mockIncrease}
        onDecrease={mockDecrease}
      />,
    );
  });

  test('displays the correct quantity', () => {
    const quantityDisplay = screen.getByDisplayValue('2');
    expect(quantityDisplay).toBeInTheDocument();
  });

  test('calls onIncrease when the increase button is clicked', () => {
    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    });
    fireEvent.click(increaseButton);
    expect(mockIncrease).toHaveBeenCalled();
  });

  test('calls onDecrease when the decrease button is clicked', () => {
    const decreaseButton = screen.getByRole('button', {
      name: /decrease quantity/i,
    });
    fireEvent.click(decreaseButton);
    expect(mockDecrease).toHaveBeenCalled();
  });
});
