import { CartProvider } from './contexts/cartContext';
import { AppRoutes } from './application/router';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
