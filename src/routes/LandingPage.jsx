import coverPhone from "../img/phones/samsung/Galaxy-Z-Flip3.png";

export default function LandingPage() {
    return (
        <div className="Landing Page text-white relative min-h-screen">
            <section className="opening-ad">
                <div className="w-rbox border-white border-4 mx-auto mt-10 rounded-lg z-10 md:w-128 sm:w-96 xs:w-64">
                    <img src={coverPhone} alt="Galaxy Flip 3" className="w-100 h-100" />
                    <div className="bg-white flex flex-col text-slate-600 p-8 text-2xl sm:text-xl xs:text-sm">
                        <p className="text-sm mb-8">
                            Unexpected colors. A new protective layer and film to fortify the main screen. An IPX8 water resistance that lets you post
                            even in a downpour. If it sounds like we rethought the Flip, we did. Now it's a statement.
                        </p>
                        <p className="descrip">
                            <span className="prompt-font">Name</span>
                            <span>Galaxy Z Flip3</span>
                        </p>
                        <p className="descrip">
                            <span className="prompt-font">Price</span>
                            <span>$999.99</span>
                        </p>
                        <p className="descrip">
                            <span className="prompt-font">Storage</span>
                            <span>256 GB</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
