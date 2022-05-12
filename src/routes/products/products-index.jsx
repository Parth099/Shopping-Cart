import ProductCard from "./product-card";
import { getAllPhones } from "../../data.js";

/*
index route for /products/
will display all products
*/

export default function AllProducts() {
    const ALL_PHONES = getAllPhones();
    return (
        <>
            {ALL_PHONES.map((phone) => (
                <ProductCard phoneData={phone} key={phone.name} />
            ))}
        </>
    );
}
