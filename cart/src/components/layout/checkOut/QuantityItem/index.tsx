import {
  QuantityButton,
  QuantityControlWrapper,
  QuantityInput,
} from './styles';

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <QuantityControlWrapper>
      <QuantityButton onClick={onIncrease} aria-label="increase quantity">
        +
      </QuantityButton>
      <QuantityInput type="text" value={quantity} readOnly />
      <QuantityButton onClick={onDecrease} aria-label="decrease quantity">
        -
      </QuantityButton>
    </QuantityControlWrapper>
  );
};

export default QuantityControl;
