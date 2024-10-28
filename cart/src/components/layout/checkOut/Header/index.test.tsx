import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubHeader from '.';

describe('SubHeader Component', () => {
    test('renders product header labels correctly', () => {
        render(<SubHeader />);

        // Verifica se os textos "Produto", "QTD" e "Preço" estão presentes
        expect(screen.getByText('Produto')).toBeInTheDocument();
        expect(screen.getByText('QTD')).toBeInTheDocument();
        expect(screen.getByText('Preço')).toBeInTheDocument();
    });
});