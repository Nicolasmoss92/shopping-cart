import { CheckoutButtonStyled } from "./styles";

const CheckoutButton: React.FC = () => {
    return (
      <CheckoutButtonStyled
        title="FINALIZAR PEDIDO"
        primary={true}  // Define como botão primário
        large={true}    // Define como botão grande
      />
    );
  };
  
  export default CheckoutButton;