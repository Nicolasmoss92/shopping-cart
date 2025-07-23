import { Product } from '../../types/product/productTypes';
import { addProductToCart, removeProductFromCart } from '../cart/cartUtils';

describe('Cart Utilities', () => {
  const defaultProduct: Product = {
    id: 1,
    name: 'Test Product',
    price: '10.00',
    quantity: 1,
    imageUrl: 'test-url',
  };

  describe('addProductToCart', () => {
    it('should add a new product to the cart', () => {
      const initialCart: Product[] = [];
      const updatedCart = addProductToCart(initialCart, defaultProduct);
      expect(updatedCart).toEqual([{ ...defaultProduct, quantity: 1 }]);
    });

    it('should increment quantity if product already exists', () => {
      const initialCart: Product[] = [{ ...defaultProduct, quantity: 1 }];
      const updatedCart = addProductToCart(initialCart, defaultProduct);
      expect(updatedCart).toEqual([{ ...defaultProduct, quantity: 2 }]);
    });
  });

  describe('removeProductFromCart', () => {
    it('should remove product if quantity is greater than 1', () => {
      const initialCart: Product[] = [{ ...defaultProduct, quantity: 2 }];
      const updatedCart = removeProductFromCart(initialCart, defaultProduct);
      expect(updatedCart).toEqual([{ ...defaultProduct, quantity: 1 }]);
    });

    it('should remove product from cart if quantity is 1', () => {
      const initialCart: Product[] = [{ ...defaultProduct, quantity: 1 }];
      const updatedCart = removeProductFromCart(initialCart, defaultProduct);
      expect(updatedCart).toEqual([]);
    });

    it('should return the same cart if product does not exist', () => {
      const initialCart: Product[] = [
        {
          id: 2,
          name: 'Another Product',
          price: '20.00',
          quantity: 1,
          imageUrl: 'another-url',
        },
      ];
      const updatedCart = removeProductFromCart(initialCart, defaultProduct);
      expect(updatedCart).toEqual(initialCart);
    });
  });
});
