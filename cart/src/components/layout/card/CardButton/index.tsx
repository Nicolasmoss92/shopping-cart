import { useState } from "react";
import Button from "../../../button/Button";
import { CartIconWrapper } from "./styles";
import { useCart } from "../../../../contexts/cartContext";

const CardButton: React.FC = () => {
  const { increment } = useCart();  // Usando o método increment do contexto

  const icon = (
    <CartIconWrapper>
      <img src='./Vector.jpg' alt="Carrinho" />
      {/* O número de itens aqui será gerenciado no Header, então não precisa exibir neste componente */}
    </CartIconWrapper>
  );

  return (
    <Button
      title="ADICIONAR AO CARRINHO"  // Texto do botão
      showIcon={true}  // Indica que o ícone deve ser mostrado
      icon={icon}  // Passa o ícone
      primary={true}  // Define como botão primário (roxo)
      large={true}  // Define como botão grande
      onClick={increment}  // Agora usamos o método increment do contexto
    />
  );
};

export default CardButton;