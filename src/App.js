//modules
import { Link, Outlet, useLocation } from "react-router-dom";
import useCart from "./hooks/useCart";

//image
import bagIcon from "./img/icon/bag.png";
import coverPhone from "./img/phones/samsung/galaxy_z_flip3.jpg";

//mostly nav bar logic
function App() {
    //custom hook
    const [appendToCart, removeFromCart, cartArr] = useCart();
    const currRoute = useLocation();

    return (
        <>
            <div className="navbar ">
                <div className="px-12 bg-fiodGray flex justify-between text-white p-3 md:flex-col items-center gap-6 pt-4">
                    <div className="boldface text-6xl text-cteal sm:text-4xl">
                        <Link to={"./"}>Phony Store</Link>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-12 text-3xl sm:text-2xl">
                            <div className="center-text-vert">
                                <p>Products</p>
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
            {currRoute.pathname === "/" /*render if we are at home ONLY*/ && (
                <div className="Landing Page text-white relative min-h-screen">
                    <section className="opening-ad">
                        <div className="w-rbox border-white border-4 mx-auto mt-10 rounded-lg z-10 md:w-128 sm:w-96 xs:w-64">
                            <img src={coverPhone} alt="Galaxy Flip 3" className="w-100 h-100" />
                            <div className="bg-white flex flex-col text-slate-600 p-8 text-2xl sm:text-xl xs:text-sm">
                                <p className="text-sm mb-8">
                                    Unexpected colors. A new protective layer and film to fortify the main screen. An IPX8 water resistance that lets
                                    you post even in a downpour. If it sounds like we rethought the Flip, we did. Now it's a statement.
                                </p>
                                <p class="descrip">
                                    <span class="prompt-font">Name</span>
                                    <p>Galaxy Z Flip3</p>
                                </p>
                                <p class="descrip">
                                    <span class="prompt-font">Price</span>
                                    <p>$999.99</p>
                                </p>
                                <p class="descrip">
                                    <span class="prompt-font">Storage</span>
                                    <p>256 TB</p>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            )}
            <div className="mx-12">
                <Outlet />
            </div>
        </>
    );
}

export default App;
