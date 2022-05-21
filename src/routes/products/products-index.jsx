import ProductCard from "./product-card";
import { getAllPhones } from "../../data.js";

/*
index route for /products/
will display all products
*/

//context
import { useContext } from "react";
import cartContext from "../../context/CartContext.js";

export default function AllProducts() {
    const ALL_PHONES = getAllPhones();
    const [cartArr, dispatchCartAction] = useContext(cartContext);

    return (
        <>
            {ALL_PHONES.map((phone) => (
                <ProductCard phoneData={phone} key={phone.name} dispatchCartAction={dispatchCartAction} />
            ))}
        </>
    );
}
