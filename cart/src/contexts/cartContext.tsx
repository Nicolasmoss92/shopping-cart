import { createContext, useContext, useState } from "react";

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
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      const updatedCart = existingProduct
        ? prevCart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];

      // Logando o estado do carrinho após a adição
      console.log("Carrinho atualizado:", updatedCart);

      return updatedCart;
    });
  };

  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);

  // Logando o total de itens
  console.log("Total de itens no carrinho:", totalItems);
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
