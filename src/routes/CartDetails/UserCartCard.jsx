import { getPhoneByName } from "../../data";

export default function UserCartCard(props) {
    const { id, addOne, removeOne, quantity } = props; //string
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
                    <span>${phoneData.price}</span>
                </div>
                <div className="info-tag">
                    <span className="quant font-semibold">Quantity: </span>
                    <span>{quantity}</span>
                </div>
                <hr className="w-80 cart-sm:w-full" />
                <div className="mt-2">
                    <span className="text-2xl font-bold">Total: </span>
                    <span className="text-xl">{phoneData.price * quantity}</span>
                </div>
            </section>
        </div>
    );
}
