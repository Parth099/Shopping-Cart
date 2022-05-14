import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import LandingPage from "./routes/LandingPage";
import Brand from "./routes/products/Brand";
import Products from "./routes/products/products";
import AllProducts from "./routes/products/products-index";

export default function RouteSwitcher() {
    return (
        <BrowserRouter basename="/Shopping-Cart">
            <Routes>
                <Route path={"/"} element={<App />}>
                    <Route index element={<LandingPage />}></Route>
                    <Route path="products" element={<Products />}>
                        <Route index element={<AllProducts />}></Route>
                        <Route path=":brand" element={<Brand />}></Route>
                    </Route>
                    <Route path={"*"} element={<ErrorPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
