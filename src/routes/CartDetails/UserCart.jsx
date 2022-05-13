import closeIcon from "../../img/icon/x.svg";

export default function UserCart(props) {
    //get proper CRUD funcs out
    const { appendToCart, removeFromCart, cartData, closeModal } = props;
    //console.log(cartData);
    return (
        <div className="flex flex-col bg-white p-6">
            <div className="flex justify-between max-h-min">
                <h2 className="font-bold text-4xl">Your Cart Details</h2>
                <img className="max-h-10 cursor-pointer" onClick={closeModal} src={closeIcon} alt="close-button" />
            </div>
            <hr className="mt-2 border-black" />
        </div>
    );
}
