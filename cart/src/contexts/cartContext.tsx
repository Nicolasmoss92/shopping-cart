// /src/contexts/CartContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  quantity: number;
  increment: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  console.log(increment)

  return (
    <CartContext.Provider value={{ quantity, increment }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
