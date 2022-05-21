import closeIcon from "../../img/icon/x.svg";
import UserCartCard from "./UserCartCard";
import { getPhoneByName } from "../../data";

import { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function UserCart(props) {
    //get proper CRUD funcs out
    const { closeModal } = props;
    const {cartArr, dispatchCartAction} = useContext(CartContext)

    //sums the total total
    const total = cartArr.reduce((prev, curr) => {
        let phoneData = getPhoneByName(curr.id);
        return phoneData.price * curr.quantity + prev;
    }, 0);

    const formatMoney = function (number) {
        return number.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };

    //console.log(cartArr);
    return (
        <div className="flex flex-col bg-white p-6">
            <div className="flex justify-between max-h-min">
                <h2 className="font-bold text-4xl">Your Cart Details</h2>
                <img className="max-h-10 cursor-pointer" onClick={closeModal} src={closeIcon} alt="close-button" />
            </div>
            <hr className="mt-2 border-black" />
            {cartArr.map((item) => {
                if (item.quantity === 0) return null; //skip empty items
                return (
                    <section key={item.id}>
                        <UserCartCard id={item.id} dispatchCartAction={dispatchCartAction} quantity={item.quantity} formatMoney={formatMoney} />
                        <hr className="border-black border-dashed" />
                    </section>
                );
            })}
            {cartArr.length === total && <p className="text-center p-8 font-light text-5xl">The Cart is Empty</p>}
            <p className="text-right text-2xl mt-2">
                <span className="text-3xl font-bold">Total: </span>
                {formatMoney(total)}
            </p>
        </div>
    );
}
