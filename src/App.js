//modules
import { Link, Outlet } from "react-router-dom";
import useCart from "./hooks/useCart";
//image
import bagIcon from "./img/icon/bag.png";

//mostly nav bar logic
function App() {
    //custom hook
    const [appendToCart, removeFromCart, cartArr] = useCart();

    return (
        <>
            <div className="navbar z-10">
                <div className="px-12 bg-fiodGray flex justify-between text-white p-3 md:flex-col items-center gap-6 pt-4">
                    <div className="boldface text-6xl text-cteal sm:text-4xl">
                        <Link to={"./"}>Phony Store</Link>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-12 text-3xl sm:text-2xl">
                            <div className="center-text-vert">
                                <p>
                                    <Link to={"products"}>Products</Link>
                                </p>
                            </div>
                            <div className="flex flex-row gap-1">
                                <img className="w-12" src={bagIcon} alt={"Cart Details"} />
                                <div className="center-text-vert">
                                    <p className="px-1 text-2xlf ont-semibold bg-red-500 align-middle rounded-md">{cartArr.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-12 grid-sm:mx-2">
                <Outlet />
            </div>
        </>
    );
}

export default App;
