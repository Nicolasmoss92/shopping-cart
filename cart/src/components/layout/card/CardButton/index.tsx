import { useState } from "react";
import Button from "../../../button/Button";
import { CartIconWrapper, Quantity } from "./styles";

const CardButton: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const icon = (
    <CartIconWrapper>
      <img src='./Vector.jpg' alt="Carrinho" />
      <span>{quantity}</span>  {/* Aqui podemos ajustar para exibir a quantidade */}
    </CartIconWrapper>
  );

  return (
    <Button
      title="ADICIONAR AO CARRINHO"  // Texto do botão
      showIcon={true}  // Indica que o ícone deve ser mostrado
      icon={icon}  // Passa o ícone
      primary={true}  // Define como botão primário (roxo)
      large={true}  // Define como botão grande
      onClick={handleAddToCart}
    />
  );
};

export default CardButton;
