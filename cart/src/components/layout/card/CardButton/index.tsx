import { useState } from "react";
import Button from "../../../button/Button";
import { CartIconWrapper } from "./styles";
import { useCart } from "../../../../contexts/cartContext";

type Product = {
  id: number;
  name: string;
  price: string;
  quantity: number;
  imageUrl: string;
};

const CardButton: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };


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
      onClick={handleAddToCart}  // Agora usamos o método increment do contexto
    />
  );
};

export default CardButton;