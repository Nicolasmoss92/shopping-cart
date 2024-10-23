import { CheckoutButtonStyled } from "./styles";

const CheckoutButton: React.FC = () => {
    return (
      <CheckoutButtonStyled
        title="Finalizar Pedido"
        primary={true}  // Define como botão primário
        large={true}    // Define como botão grande
      />
    );
  };
  
  export default CheckoutButton;