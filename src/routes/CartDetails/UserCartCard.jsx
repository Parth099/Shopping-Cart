import { getPhoneByName } from "../../data";

export default function UserCartCard(props) {
    const { id, addOne, removeOne, quantity, formatMoney } = props; //string
    const phoneData = getPhoneByName(id);
    return (
        <div className="item-container flex justify-between items-center py-4 cart-sm:flex-col">
            <div className="img-container w-48 mr-10">
                <img className="h-100 w-100" src={phoneData.image} alt={"An image of a phone, the phone is " + phoneData.name} />
            </div>
            <section className="info-container text-xl cart-font mr-12 cart-sm:self-start">
                <div className="info-tag">
                    <span className="font-bold">{phoneData.brand.toUpperCase()} </span>
                    <span>{phoneData.name}</span>
                </div>
                <div className="info-tag">
                    <span>{phoneData.storage}</span>
                </div>
                <div className="info-tag">
                    <span>{formatMoney(phoneData.price)}</span>
                </div>
                <div className="info-tag flex items-center gap-4">
                    <span className="quant font-semibold">Quantity: </span>
                    <span className="rounded-sm align-middle flex">
                        <button
                            onClick={() => removeOne(id)}
                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer"
                        >
                            <span class="m-auto text-2xl font-thin">-</span>
                        </button>
                        <p className="bg-gray-300 flex flex-col justify-center px-2">{quantity}</p>
                        <button
                            onClick={() => addOne(id)}
                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
                        >
                            <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                    </span>
                </div>
                <hr className="w-80 mt-2 cart-sm:w-full" />
                <div className="mt-2">
                    <span className="text-2xl font-bold">Total: </span>
                    <span className="text-xl">{formatMoney(phoneData.price * quantity)}</span>
                </div>
            </section>
        </div>
    );
}
