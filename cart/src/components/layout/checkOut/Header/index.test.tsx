import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import SubHeader from ".";

describe("SubHeader Component", () => {
  beforeEach(() => {
    render(<SubHeader />);
  });

  test("renders 'Produto' text", () => {
    const produtoElement = screen.getByText("Produto");
    expect(produtoElement).toBeInTheDocument();
  });

  test("renders 'QTD' text", () => {
    const qtdElement = screen.getByText("QTD");
    expect(qtdElement).toBeInTheDocument();
  });

  test("renders 'Preço' text", () => {
    const precoElement = screen.getByText("Preço");
    expect(precoElement).toBeInTheDocument();
  });
});
