import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import CheckoutButton from ".";

describe("CheckoutButton Component", () => {
  beforeEach(() => {
    render(<CheckoutButton />);
  });

  test("renders with correct title", () => {
    const buttonElement = screen.getByRole("button", { name: /finalizar pedido/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("has primary and large classes", () => {
    const buttonElement = screen.getByRole("button", { name: /finalizar pedido/i });
    expect(buttonElement).toHaveClass("sc-blHHSb ynawA sc-gtLWhw hoskPT");
    expect(buttonElement).toHaveClass("sc-blHHSb ynawA sc-gtLWhw hoskPT");
  });
});
