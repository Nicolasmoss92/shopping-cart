import React, { createContext, useEffect, useState } from 'react';
import { Product } from '../types/product/productTypes';
import {
  addProductToCart,
  removeProductFromCart,
} from '../service/cart/cartUtils';

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  totalItems: number;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => addProductToCart(prevCart, product));
  };

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => removeProductFromCart(prevCart, product));
  };

  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
