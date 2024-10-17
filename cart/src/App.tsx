import Card from "./components/layout/card/Card";
import Header from "./components/Header/index";
import SubHeader from "./components/layout/checkOut/Header";
import ProductItem from "./components/layout/checkOut/ProductItem";
import CheckoutSummary from "./components/layout/checkOut/CheckoutSummary";
import CheckoutPage from "./pages/CheckOutPage";

function App() {
  return (
    <div className="App">  
      <CheckoutPage />
    </div>
  );
}

export default App;
