import { createContext } from "react";

const cartContext = createContext({
    cartArr: [],
    dispatchCartAction: () => {},
});

export default cartContext;
