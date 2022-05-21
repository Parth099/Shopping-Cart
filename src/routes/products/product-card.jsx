/*
Takes in data for one phone and displays it in a nice card
*/

//context
import { useContext } from "react";
import cartContext from "../../context/CartContext.js";

export default function ProductCard(props) {
    const { phoneData } = props;
    const [cartArr, dispatchCartAction] = useContext(cartContext);

    if (!phoneData) return;

    const addPhoneToCart = () => {
        dispatchCartAction({ id: phoneData.name, type: "append" });
    };

    return (
        <section className="flex flex-col bg-white p-3 w-96 rounded-lg shadow-lg relative">
            <div className="image-container h-40 flex justify-center">
                <img className="" src={phoneData.image} alt={"Image of " + phoneData.name} />
            </div>
            <div className="flex gap-1 text-xl justify-between mt-6">
                <p className="font-bold text-2xl">{phoneData.brand.toUpperCase()}</p>
                <p>{phoneData.name}</p>
            </div>
            <p className="font-normal absolute top-4 right-4">${phoneData.price}</p>
            <p className="font-semibold absolute top-4 left-4">{phoneData.storage}</p>
            <button
                className="mt-2 p-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-md text-white text-xl  hover:font-bold"
                onClick={addPhoneToCart}
            >
                Add to Cart
            </button>
        </section>
    );
}
