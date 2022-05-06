import { Link, Outlet } from "react-router-dom";

//nav bar logic
function App() {
    return (
        <>
            <div className="bg-black flex justify-between text-white p-3">
                <div className="boldface text-4xl text-cteal">
                    <Link to={"./"}>Phony Store</Link>
                </div>
                <div>
                    <div className="flex gap-12 text-2xl">
                        <div>
                            <p>Home</p>
                        </div>
                        <div>
                            <p>Store</p>
                        </div>
                        <div>
                            <p>IMG</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default App;
