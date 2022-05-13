import { useOutletContext, useParams } from "react-router-dom";
import { getPhoneByBrand } from "../../data.js";
import ProductCard from "./product-card.jsx";

export default function Brand() {
    let params = useParams();
    const brand = params.brand;
    const phonesByBrand = getPhoneByBrand(brand);
    const [appendToCart] = useOutletContext();
    return (
        <>
            {phonesByBrand.map((phone) => (
                <ProductCard phoneData={phone} key={phone.name} appendToCart={appendToCart} />
            ))}
        </>
    );
}
