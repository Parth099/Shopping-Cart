/*
    CUSTOM HOOK: useCart.js

    DEFINES the react-state based CRUD ops on an array of objects.
*/

import { useState } from "react";

const useCart = () => {
    const [cartArr, setCartArr] = useState([]);

    const appendToCart = (newItem) => {};
    const removeFromCart = (item) => {};

    return [appendToCart, removeFromCart, [...cartArr]]; //new array to ensure no one messes with state
};

export default useCart;
