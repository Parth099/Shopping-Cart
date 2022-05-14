/*
    CUSTOM HOOK: useCart.js
    DEFINES the react-state based CRUD ops on an array of objects.
*/

import { useReducer } from "react";

//cart is defined by an array of objects of prop-type
/*
    [
        {
            id: [NAME OF PHONE], 
            quantity: [NUMBER],
        }
    ]
*/
const appendToCart = (cartArr, newItemId) => {
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
    return newCart; //state is altred everyone is happy
};
const removeFromCart = (cartArr, itemId) => {
    const newCart = cartArr.map((itemDetail) => {
        //if item exists (which it will since its being removed
        //subtract 1

        //if item quantity 0; DONT render
        return itemDetail.id === itemId ? { ...itemDetail, quantity: Math.max(itemDetail.quantity - 1, 0) } : itemDetail;
    });
    return newCart; //state is altred everyone is happy
};

const ACTION = {
    APPEND: "append",
    REMOVE: "remove",
};

//uses the same functions before we started using reducer
function reducer(cartArr, cartAction) {
    switch (cartAction.type) {
        case ACTION.APPEND:
            return appendToCart(cartArr, cartAction.id);
        case ACTION.REMOVE:
            return removeFromCart(cartArr, cartAction.id);
        default:
            return cartArr; //nothing
    }
}

const useCart = () => {
    const [state, dispatch] = useReducer(reducer, []);
    return [state, dispatch];
};

export default useCart;
