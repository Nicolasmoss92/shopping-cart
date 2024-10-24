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

  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems }}>
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
