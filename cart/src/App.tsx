import Card from "./components/layout/card/Card";
import Header from "./components/Header/index";
import SubHeader from "./components/layout/checkOut/Header";
import ProductItem from "./components/layout/checkOut/ProductItem";
import CheckoutSummary from "./components/layout/checkOut/CheckoutSummary";
import CheckoutPage from "./pages/CheckOutPage";
import ListItensPage from "./pages/ListItensPage";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">  
      <Button title="Adicionar ao Carrinho" showIcon={true} primary={true} large={true} />
    </div>
  );
}

export default App;
