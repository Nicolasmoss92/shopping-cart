import React, { createContext, useContext, useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  quantity: number;
  imageUrl: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void; // Função de remoção
  totalItems: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    // Carregar o estado do carrinho do localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Sempre que o carrinho for atualizado, salvá-lo no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adicionar ao carrinho
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      const updatedCart = existingProduct
        ? prevCart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];

      return updatedCart;
    });
  };

  // Remover do carrinho
  const removeFromCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // Se a quantidade for maior que 1, diminua a quantidade
        if (existingProduct.quantity > 1) {
          return prevCart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
        // Caso contrário, remova o item do carrinho
        return prevCart.filter(item => item.id !== product.id);
      }
      return prevCart; // Retorna o estado inalterado se o produto não existir
    });
  };

  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o contexto do carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
