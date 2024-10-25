import { Button, QuantityDisplay, QuantityWrapper, RemoveButton } from "./styles";

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <QuantityWrapper>
      <Button onClick={onIncrease}>
        +
      </Button>
      <QuantityDisplay>{quantity}</QuantityDisplay> {/* Exibindo a quantidade dinamicamente */}
      <RemoveButton onClick={onDecrease}>
        -
      </RemoveButton>
    </QuantityWrapper>
  );
};

export default QuantityControl;