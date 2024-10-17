import { Button, QuantityDisplay, QuantityWrapper, RemoveButton } from "./styles";

const QuantityControl: React.FC = () => {
    return (
      <QuantityWrapper>
        <Button>
          +
        </Button>
        <QuantityDisplay>3</QuantityDisplay> {/* Exibindo a quantidade */}
        <RemoveButton>
          -
        </RemoveButton>
      </QuantityWrapper>
    );
  };
  
  export default QuantityControl;