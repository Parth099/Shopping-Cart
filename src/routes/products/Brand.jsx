import { useParams } from "react-router-dom";
import { getPhoneByBrand, getAllPhones } from "../../data.js";
import ProductCard from "./product-card.jsx";

export default function Brand() {
    let params = useParams();
    console.log(params);
    const brand = params.brand;
    const phones = brand === "all" ? getAllPhones() : getPhoneByBrand(brand);

    return (
        <>
            {phones.map((phone) => (
                <ProductCard phoneData={phone} key={phone.name} />
            ))}
        </>
    );
}
