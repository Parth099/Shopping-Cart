import ProductCard from "./product-card";
import { getAllPhones } from "../../data.js";
import { useOutletContext } from "react-router-dom";

/*
index route for /products/
will display all products
*/

export default function AllProducts() {
    const ALL_PHONES = getAllPhones();
    const [appendToCart] = useOutletContext();

    return (
        <>
            {ALL_PHONES.map((phone) => (
                <ProductCard phoneData={phone} key={phone.name} appendToCart={appendToCart} />
            ))}
        </>
    );
}
