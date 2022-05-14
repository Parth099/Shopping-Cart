import { useEffect } from "react";

const PROJECT_KEY = "shopping-cart";

const useLocalStorage = (state) => {
    useEffect(() => {
        localStorage.setItem(PROJECT_KEY, JSON.stringify(state));
    }, [state]);
};

function LocalStorageInit() {
    const LSResponse = localStorage.getItem(PROJECT_KEY);
    console.log({ LSResponse });
    return LSResponse ? JSON.parse(LSResponse) : [];
}

export { useLocalStorage, LocalStorageInit };
