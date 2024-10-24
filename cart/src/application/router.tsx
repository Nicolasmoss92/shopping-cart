import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/CheckOutPage";
import CardGridPage from "../pages/ListItensPage";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/itens/*" element={<CardGridPage />} />
            </Routes>
        </BrowserRouter>
    );
}