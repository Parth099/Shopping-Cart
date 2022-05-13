/*
    CUSTOM HOOK: useCart.js

    DEFINES the react-state based CRUD ops on an array of objects.
*/

import { useState } from "react";

//cart is defined by objects of type
/*
    {
        id: [NAME OF PHONE], 
        quantity: [NUMBER],
    }
*/
const useCart = () => {
    const [cartArr, setCartArr] = useState([]);

    const appendToCart = (newItemId) => {
        let isUpdated = 0;
        const newCart = cartArr.map((itemDetail) => {
            //if item exists then add 1 to quantity
            if (itemDetail.id === newItemId) {
                isUpdated = 1;
                return { ...itemDetail, quantity: itemDetail.quantity + 1 };
            } else {
                return itemDetail;
            }
        });
        //if it didnt exists just add it in
        if (!isUpdated) {
            newCart.push({ id: newItemId, quantity: 1 });
        }
        setCartArr(newCart); //state is altred everyone is happy
    };
    const removeFromCart = (itemId) => {
        const newCart = cartArr.map((itemDetail) => {
            //if item exists (which it will since its being removed
            //subtract 1

            //if item quantity 0; DONT render
            return itemDetail.id === itemId ? { ...itemDetail, quantity: Math.max(itemDetail.quantity - 1, 0) } : itemDetail;
        });
        setCartArr(newCart); //state is altred everyone is happy
    };

    return [appendToCart, removeFromCart, [...cartArr]]; //new array to ensure no one messes with state
};

export default useCart;
