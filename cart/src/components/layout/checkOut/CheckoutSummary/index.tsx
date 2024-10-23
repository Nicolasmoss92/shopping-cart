import CheckoutButton from "../CheckOutButton";
import {SummaryWrapper, TotalText } from "./styles";

const CheckoutSummary: React.FC = () => {
    const total = 179.90

    return (
        <SummaryWrapper>
            <CheckoutButton />
            <TotalText>Total: R${total}</TotalText>
        </SummaryWrapper>
    );
};

export default CheckoutSummary;