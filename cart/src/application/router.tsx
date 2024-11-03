import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CardGridPage from "../pages/ListItensPage";
import CheckoutPage from "../pages/CheckOutPage";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/itens" />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/itens/*" element={<CardGridPage />} />
            </Routes>
        </BrowserRouter>
    );
}