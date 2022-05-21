import ProductCard from "./product-card";
import { getAllPhones } from "../../data.js";

/*
index route for /products/
will display all products
*/

//context
import { useContext } from "react";
import CartContext from "../../context/CartContext.js";

export default function AllProducts() {
    const ALL_PHONES = getAllPhones();
    const { dispatchCartAction } = useContext(CartContext);

    return (
        <>
            {ALL_PHONES.map((phone) => (
                <ProductCard phoneData={phone} key={phone.name} dispatchCartAction={dispatchCartAction} />
            ))}
        </>
    );
}
