//modules
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import useCart from "./hooks/useCart";

//image
import bagIcon from "./img/bag.png";

//mostly nav bar logic
function App() {
    //custom hook
    const [appendToCart, removeFromCart, cartArr] = useCart();
    const location = useLocation();

    return (
        <>
            <div className="navbar ">
                <div className="bg-fiodGray flex justify-between text-white p-3">
                    <div className="ml-12 boldface text-6xl text-cteal">
                        <Link to={"./"}>Phony Store</Link>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-12 text-3xl last:mr-10">
                            <div className="center-text-vert">
                                <p>Home</p>
                            </div>
                            <div className="center-text-vert">
                                <p>Store</p>
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
            {location.pathname === "/" /*render if we are at home ONLY*/ && (
                <div className="Landing Page text-white">
                    <section>
                        <div className="home-page-curve">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                    className="shape-fill"
                                ></path>
                            </svg>
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
