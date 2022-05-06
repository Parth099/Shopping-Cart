import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";

export default function RouteSwitcher() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />}>
                    <Route path={"*"} element={<ErrorPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
