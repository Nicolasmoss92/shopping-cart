import { useMemo } from 'react';
import { useCart } from '../../../../hooks/useCart';
import { SummaryWrapper, TotalText } from './styles';
import { formatPrice } from '../../../../utils/checkOut/formatPrice';
import Button from '../../../Button';

interface Product {
  price: string;
  quantity: number;
}

const CheckoutSummary: React.FC = () => {
  const { cart } = useCart();

  const total = useMemo(() => {
    return cart.reduce((acc, product: Product) => {
      const priceNumber = parseFloat(
        product.price.replace('R$', '').replace('.', '').replace(',', '.'),
      );
      return acc + priceNumber * product.quantity;
    }, 0);
  }, [cart]);

  return (
    <SummaryWrapper>
      <Button title="FINALIZAR PEDIDO" large={false} />
      {total > 0 ? (
        <TotalText>
          <span className="label">TOTAL</span>
          <span className="value">{formatPrice(total)}</span>
        </TotalText>
      ) : (
        <TotalText>
          <span className="label">Carrinho vazio</span>
        </TotalText>
      )}
    </SummaryWrapper>
  );
};

export default CheckoutSummary;
