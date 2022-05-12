/*
Takes in data for one phone and displays it in a nice card
*/

export default function ProductCard(props) {
    const { phoneData } = props;
    if (!phoneData) return;

    return (
        <section className="flex flex-col bg-white p-3 w-96 rounded-lg shadow-lg relative">
            <div className="image-container h-40 flex justify-center">
                <img src={phoneData.image} alt={"Image of " + phoneData.name} className="" />
            </div>
            <div className="flex gap-1 text-xl justify-between mt-6">
                <p className="font-bold text-2xl">{phoneData.brand.toUpperCase()}</p>
                <p>{phoneData.name}</p>
            </div>
            <p className="font-normal absolute top-4 right-4">${phoneData.price}</p>
            <p className="font-semibold absolute top-4 left-4">{phoneData.storage}</p>
        </section>
    );
}