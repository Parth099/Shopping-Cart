import { Link, Outlet } from "react-router-dom";
import { getBrands } from "../../data.js";

export default function Products() {
    const Brands = getBrands();

    return (
        <div className="bg-caparol mt-3 py-6 px-5 rounded-lg min-w-full flex menu-font justify-center grid-sm:flex-col grid-sm:items-center">
            <div className="side-menu max-w-min ml-6 mr-24">
                <div className="flex flex-col mb-12">
                    <h2 className="text-3xl font-semibold">
                        <Link to="/products">Phone Brands</Link>
                    </h2>
                </div>
                <div className="flex flex-col gap-2">
                    {Brands.map((brand) => (
                        <Link to={brand} className="menu-link" key={brand}>
                            <p className="font-medium text-2xl pr-12">{brand.toUpperCase()}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="product-grid-display grid grid-cols-3 gap-5 grid-lg:grid-cols-2 grid-md:grid-cols-1 grid-sm:mt-10">
                <Outlet />
            </div>
        </div>
    );
}
