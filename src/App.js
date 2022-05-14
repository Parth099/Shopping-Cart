//modules and components
import { Link, Outlet } from "react-router-dom";
import UserCart from "./routes/CartDetails/UserCart";
//hooks
import useCart from "./hooks/useCart";
import useModal from "./hooks/useModal";
//image
import bagIcon from "./img/icon/bag.png";
import Modal from "./modal";
import { LocalStorageInit, useLocalStorage } from "./hooks/useLocalStorage";

//mostly nav bar logic
function App() {
    //custom hook
    const [cartArr, dispatchCartAction] = useCart(LocalStorageInit);
    useLocalStorage(cartArr);
    const [isOpen, openModal, closeModal] = useModal();
    let cartArrLen = cartArr.reduce((prev, curr) => prev + curr.quantity, 0); //adds up cart values

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
                            <div className="flex flex-row gap-1 cursor-pointer" onClick={openModal}>
                                <img className="w-12" src={bagIcon} alt={"Cart Details"} />
                                <div className="center-text-vert">
                                    <p className="px-1 text-2xlf ont-semibold bg-red-500 align-middle rounded-md">{cartArrLen}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-12 grid-sm:mx-2">
                <Modal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    element={<UserCart cartArr={cartArr} dispatchCartAction={dispatchCartAction} closeModal={closeModal} />}
                />
                <Outlet context={[dispatchCartAction, cartArr]} />
            </div>
        </>
    );
}

export default App;
